// ============================================================
//  SoloSmart — Módulo de Autenticação (reutilizável)
//  Uso: <script src="auth.js"></script> antes de outros scripts
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyBzt9NrZaX24HP9husP9iwTjUHsUEtBrWc",
  authDomain: "solosmart.firebaseapp.com",
  projectId: "solosmart",
  storageBucket: "solosmart.firebasestorage.app",
  messagingSenderId: "684064638812",
  appId: "1:684064638812:web:e3e038664a47a5701b2399",
  measurementId: "G-9G79YVZ2XM"
};

// URL DEFINITIVA DO APPS SCRIPT (Com permissão de Drive)
const URL_API = "https://script.google.com/macros/s/AKfycbyrkBqYRAagM32au-_kcEG3hUt1yrisKP6PHNpqHIEB2LlriZ-vpxgER2OtSzn1Nv71/exec";

if (typeof firebase !== "undefined") {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
}

const SoloSmart = (function () {
  const CHAVE_SESSAO = "solosmart_usuario";
  const CHAVE_LOGIN_TS = "solosmart_login_ts";
  const DURACAO_MAX_SESSAO_MS = 8 * 60 * 60 * 1000; // 8 horas

  function obterAuth() {
    return firebase.auth();
  }

  // ---------- Sessão local (cache de UI) ----------

  function salvarUsuarioLocal(usuario) {
    try {
      sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuario));
      sessionStorage.setItem(CHAVE_LOGIN_TS, String(Date.now()));
    } catch (e) {
      console.warn("Não foi possível salvar sessão local:", e);
    }
  }

  function obterUsuarioLocal() {
    try {
      const bruto = sessionStorage.getItem(CHAVE_SESSAO);
      if (!bruto) return null;

      const ts = Number(sessionStorage.getItem(CHAVE_LOGIN_TS) || 0);
      if (!ts || Date.now() - ts > DURACAO_MAX_SESSAO_MS) {
        limparSessaoLocal();
        return null;
      }

      return JSON.parse(bruto);
    } catch (e) {
      limparSessaoLocal();
      return null;
    }
  }

  function limparSessaoLocal() {
    sessionStorage.removeItem(CHAVE_SESSAO);
    sessionStorage.removeItem(CHAVE_LOGIN_TS);
  }

  // ---------- Validação no backend (SoloSmart) ----------

  async function validarAcessoNoBackend(usuarioFirebase) {
    const idToken = await usuarioFirebase.getIdToken(true);
    const url = `${URL_API}?action=validarAcesso&idToken=${encodeURIComponent(idToken)}`;
    const resposta = await fetch(url, { method: "GET" });

    if (!resposta.ok) {
      throw new Error(`Falha na API (${resposta.status}).`);
    }

    const dados = await resposta.json();

    if (!dados || dados.sucesso !== true || !dados.usuario) {
      const msg = (dados && dados.mensagem) || "Acesso não autorizado.";
      const erro = new Error(msg);
      erro.codigoBackend = dados && dados.codigo;
      throw erro;
    }

    return dados.usuario;
  }

  // ---------- Proteção de páginas privadas ----------

  function protegerPagina(opcoes = {}) {
    const paginaLogin = opcoes.paginaLogin || "login.html";

    return new Promise((resolve, reject) => {
      const auth = obterAuth();

      const cancelar = auth.onAuthStateChanged(async (usuarioFirebase) => {
        cancelar(); // não precisamos mais do listener

        if (!usuarioFirebase) {
          limparSessaoLocal();
          window.location.href = paginaLogin;
          return reject(new Error("Não autenticado."));
        }

        try {
          await usuarioFirebase.reload();

          if (!usuarioFirebase.emailVerified) {
            limparSessaoLocal();
            window.location.href = paginaLogin;
            return reject(new Error("E-mail não verificado."));
          }

          const local = obterUsuarioLocal();

          if (local && !opcoes.forcarRevalidacaoBackend) {
            return resolve(local);
          }

          const usuario = await validarAcessoNoBackend(usuarioFirebase);
          salvarUsuarioLocal(usuario);
          resolve(usuario);
        } catch (erro) {
          console.error("Falha ao proteger página:", erro);
          limparSessaoLocal();
          const motivo = encodeURIComponent(erro.message || "Acesso não autorizado.");
          window.location.href = `${paginaLogin}?erro=${motivo}`;
          reject(erro);
        }
      });
    });
  }

  // ---------- Logout ----------

  async function sair() {
    try {
      await obterAuth().signOut();
    } catch (e) {
      console.warn("Erro no signOut:", e);
    }
    limparSessaoLocal();
    window.location.href = "login.html";
  }

  return {
    salvarUsuarioLocal,
    obterUsuarioLocal,
    limparSessaoLocal,
    validarAcessoNoBackend,
    protegerPagina,
    sair,
    URL_API
  };
})();

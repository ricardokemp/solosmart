# 🌱 SoloSmart

### Plataforma Inteligente de Gestão, Amostragem e Monitoramento do Solo

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Web-blue)
![Backend](https://img.shields.io/badge/backend-Google%20Apps%20Script-yellow)
![Database](https://img.shields.io/badge/database-Google%20Sheets-34A853)

## 📌 Sobre o projeto

O **SoloSmart** é uma plataforma web desenvolvida para gerenciamento de propriedades rurais, amostragem georreferenciada do solo, integração com dispositivos IoT e armazenamento de informações agrícolas.

O objetivo é oferecer uma solução simples, acessível e escalável para produtores rurais, empresas de agronomia, consultorias agrícolas e profissionais que trabalham com análise e monitoramento do solo.

A plataforma será disponibilizada no modelo SaaS (Software as a Service), permitindo múltiplos clientes, usuários independentes e planos de assinatura.

## 🎯 Objetivos

- Digitalizar o processo de amostragem do solo.
- Registrar pontos de coleta com coordenadas GPS.
- Armazenar fotografias e documentos.
- Gerenciar propriedades rurais e talhões.
- Integrar sensores e dispositivos IoT.
- Monitorar variáveis físicas e químicas do solo.
- Disponibilizar dashboards e relatórios.
- Centralizar informações históricas.
- Oferecer acesso multiusuário e multiempresa.

## 🚀 Funcionalidades previstas

### 1. Gestão de usuários
- Cadastro de empresas.
- Cadastro de usuários.
- Login e autenticação.
- Controle de permissões.
- Administração de contas.
- Gestão de assinaturas.

### 2. Gestão de propriedades
- Cadastro de propriedades rurais.
- Cadastro de talhões.
- Identificação geográfica.
- Registro de áreas em hectares.
- Visualização em mapas.

### 3. Amostragem do solo
- Criação de campanhas de amostragem.
- Cadastro de pontos de coleta.
- Registro de coordenadas GPS.
- Identificação de profundidade.
- Registro de data e responsável.
- Inclusão de observações.
- Identificação individual das amostras.
- Histórico de coletas.

### 4. Fotografias e documentos
- Registro fotográfico das coletas.
- Associação de imagens às amostras.
- Armazenamento de documentos.
- Integração com Google Drive.

### 5. Integração IoT
- Cadastro de dispositivos.
- Identificação de sensores.
- Recebimento de dados.
- Histórico de medições.
- Monitoramento de umidade.
- Monitoramento de temperatura.
- Monitoramento de condutividade elétrica.
- Geração de alertas.

### 6. Dashboard e relatórios
- Indicadores gerais.
- Visualização geográfica.
- Histórico de amostragens.
- Gráficos de monitoramento.
- Relatórios técnicos.
- Exportação de dados.

## 🏗️ Arquitetura tecnológica

O projeto utilizará inicialmente ferramentas com planos gratuitos, priorizando simplicidade, baixo custo e facilidade de manutenção.

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura da interface |
| CSS3 | Estilização |
| JavaScript | Funcionalidades do frontend |
| GitHub | Controle de versão e código-fonte |
| GitHub Pages | Publicação da plataforma |
| Google Apps Script | Backend e APIs |
| Google Sheets | Banco de dados inicial |
| Google Drive | Armazenamento de arquivos |
| OpenStreetMap | Mapas e geolocalização |

## 🗄️ Estrutura inicial do banco de dados

O banco de dados inicial será mantido no Google Planilhas.

Planilha: `SoloSmart_Database`

Abas:

| Tabela | Descrição |
|---|---|
| Empresas | Cadastro de clientes |
| Usuarios | Usuários da plataforma |
| Propriedades | Propriedades rurais |
| Talhoes | Divisões das propriedades |
| Campanhas | Campanhas de coleta |
| Amostras | Registros das amostras |
| Fotografias | Referências das imagens |
| Dispositivos | Cadastro de equipamentos IoT |
| Leituras_IoT | Dados dos sensores |
| Assinaturas | Planos e assinaturas |

## 📂 Estrutura do repositório

```text
solosmart/
│
├── index.html
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── pages/
│   ├── login.html
│   ├── cadastro.html
│   ├── dashboard.html
│   ├── propriedades.html
│   ├── talhoes.html
│   ├── amostras.html
│   ├── mapas.html
│   └── relatorios.html
│
├── database/
│   └── estrutura.sql
│
├── apps-script/
│   └── Code.gs
│
└── README.md
```

## 🛣️ Roadmap de desenvolvimento

- [x] Criação do projeto SoloSmart.
- [x] Criação da planilha inicial no Google Sheets.
- [x] Estruturação das dez abas iniciais do banco de dados.
- [ ] Desenvolvimento da interface principal.
- [ ] Implementação do cadastro de empresas.
- [ ] Implementação de autenticação.
- [ ] Desenvolvimento do dashboard.
- [ ] Cadastro de propriedades rurais.
- [ ] Cadastro e gerenciamento de talhões.
- [ ] Implementação do módulo de amostragem.
- [ ] Integração com GPS e mapas.
- [ ] Integração com fotografias e Google Drive.
- [ ] Desenvolvimento de relatórios.
- [ ] Integração com dispositivos IoT.
- [ ] Implementação de planos e assinaturas.
- [ ] Testes e publicação da primeira versão.

## 🔐 Segurança

A segurança será um requisito fundamental da plataforma.

Serão implementados:

- Autenticação segura de usuários.
- Controle de acesso por empresa.
- Separação dos dados entre clientes.
- Proteção das informações armazenadas.
- Validação das requisições.
- Controle de permissões.
- Proteção das credenciais e chaves de integração.

As senhas não serão armazenadas diretamente no Google Planilhas.

## 💰 Modelo de negócio

O SoloSmart será desenvolvido como uma plataforma SaaS.

A proposta comercial prevê:

- Plano gratuito para experimentação.
- Plano profissional para consultorias e produtores.
- Plano empresarial para grandes operações.
- Recursos adicionais conforme o plano contratado.

Os limites e valores dos planos serão definidos durante o desenvolvimento.

## 🌎 Visão de futuro

Transformar o SoloSmart em uma plataforma completa de gestão inteligente do solo, integrando amostragem, geolocalização, análise de dados, sensoriamento IoT e inteligência artificial.

A visão é oferecer uma ferramenta capaz de conectar informações de campo, análises laboratoriais e monitoramento contínuo em um único ambiente digital.

## 📄 Licença

Projeto em desenvolvimento.

A definição da licença de distribuição será realizada antes da publicação comercial.

---

**SoloSmart**

*Tecnologia, dados e inteligência para o monitoramento do solo.* 🌱

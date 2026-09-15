# 🚀 GUIA DE SETUP - VENDABOT

## Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn
- Conta Firebase (grátis)
- Chave de API OpenAI
- Conta Stripe (para pagamentos)

---

## 1️⃣ Clone e Setup Inicial

```bash
# Clone o repositório
git clone https://github.com/reinaldosilvamkt-bit/vendabot.git
cd vendabot

# Instale as dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env
```

---

## 2️⃣ Configure as Variáveis de Ambiente

Edite o arquivo `.env` com suas credenciais:

### Firebase

1. Vá para [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Vá em "Configurações do Projeto" > "Contas de serviço"
4. Gere uma nova chave privada
5. Copie os valores para `.env`

```env
FIREBASE_PROJECT_ID=seu_project_id
FIREBASE_API_KEY=sua_api_key
# ... outros valores
```

### OpenAI

1. Vá para [OpenAI API](https://platform.openai.com/api-keys)
2. Crie uma nova chave de API
3. Adicione ao `.env`:

```env
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4
```

### Stripe

1. Vá para [Stripe Dashboard](https://dashboard.stripe.com/)
2. Vá em "API Keys"
3. Copie a chave secreta:

```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### WhatsApp (Evolution API)

Ainda não configurada - você pode usar:
- **Evolution API** (recomendado) - self-hosted
- **Twilio** - mais estável, pagas
- **Baileys** - gratuito, menos estável

```env
EVOLUTION_API_URL=http://localhost:8080
EVOLUTION_API_KEY=sua_chave_api
```

---

## 3️⃣ Inicie o Servidor Backend

```bash
# Terminal 1 - Backend
npm start

# Você deve ver:
# 🚀 VENDABOT está rodando em http://localhost:3001
# 📱 WhatsApp Bot pronto para atender
# 🤖 IA conectada e funcionando
# 💳 Sistema de pagamento: Stripe integrado
```

---

## 4️⃣ Inicie o Frontend

```bash
# Terminal 2 - Frontend
cd frontend
npm install
npm start

# Deve abrir automaticamente em http://localhost:3000
```

---

## 5️⃣ Teste a Aplicação

### Registrar usuário
```
http://localhost:3000/register
- Email: teste@vendabot.com.br
- Senha: SenhaForte123
- Nome: Teste
- Empresa: Minha Empresa
```

### Acessar Dashboard
```
http://localhost:3000/dashboard
```

### Testar API
```bash
# Login
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "teste@vendabot.com.br",
    "password": "SenhaForte123"
  }'

# Listar clientes
curl -X GET http://localhost:3001/api/crm/customers \
  -H "Authorization: Bearer SEU_TOKEN"
```

---

## 🐳 Rodar com Docker

```bash
# Build
docker-compose build

# Rodar
docker-compose up

# Acesse
http://localhost:3001 (backend)
http://localhost:3000 (frontend)
```

---

## 📦 Estrutura do Projeto

```
vendabot/
├── server.js                 # Servidor principal
├── routes/
│   ├── auth.js              # Autenticação
│   ├── crm.js               # CRM
│   ├── whatsapp.js          # WhatsApp
│   ├── ai.js                # IA
│   └── payments.js          # Pagamentos
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   └── Pricing.js
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   └── App.js
│   └── public/
│       └── index.html
├── .env.example             # Template variáveis
├── .gitignore
├── docker-compose.yml
├── package.json
└── README.md
```

---

## ✅ Checklist de Setup

- [ ] Node.js instalado
- [ ] `.env` configurado com todas as chaves
- [ ] Firebase project criado
- [ ] OpenAI API key adicionada
- [ ] Stripe account configurada
- [ ] Backend rodando em :3001
- [ ] Frontend rodando em :3000
- [ ] Usuário teste criado e logado
- [ ] Dashboard carregando corretamente

---

## 🆘 Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 3001 já em uso
```bash
# Mude a porta no .env
PORT=3002
```

### Firebase connection error
- Verifique se o arquivo `firebase-key.json` está correto
- Confirme se o projeto existe no Firebase Console

### OpenAI API error
- Verifique se sua chave de API é válida
- Confirme se sua conta tem créditos

---

## 📚 Próximos passos

1. Ler [DEPLOYMENT.md](./DEPLOYMENT.md) para colocar em produção
2. Ler [API.md](./API.md) para documentação da API
3. Configurar Evolution API para WhatsApp
4. Customizar respostas da IA
5. Configurar webhooks de pagamento

---

**Desenvolvido com ❤️ por RS Corporation**

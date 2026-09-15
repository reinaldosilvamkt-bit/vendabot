# 🚀 VENDABOT - IA que vende 24/7

**CRM + Bot WhatsApp com Inteligência Artificial**

Desenvolvedor: RS Corporation

## 📋 Sobre

VENDABOT é uma plataforma SaaS completa para automação de vendas, atendimento e suporte via WhatsApp usando Inteligência Artificial.

### ✨ Funcionalidades Principais

- 🤖 **Bot IA WhatsApp** - Atenda 1000+ clientes automaticamente
- 💳 **CRM Integrado** - Gerencie leads e clientes
- 📊 **Dashboard Analytics** - Relatórios em tempo real
- 💰 **Pagamentos** - Integração Stripe
- 🔐 **Autenticação** - Login seguro
- 🎯 **Multi-agentes** - Vários bots simultâneos
- 📱 **Interface Responsiva** - Web e Mobile

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- Firebase/MongoDB
- OpenAI API (GPT-4)
- Stripe (Pagamentos)
- Redis (Cache)
- Bull (Fila de tarefas)

### Frontend
- React.js
- Tailwind CSS
- Socket.io (Real-time)

### Integrações
- WhatsApp (Evolution API)
- OpenAI
- Stripe
- Firebase

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/reinaldosilvamkt-bit/vendabot.git
cd vendabot

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas chaves

# Inicie o servidor
npm start
```

## 🚀 Como Usar

### 1. Registre-se
```bash
POST /api/auth/register
{
  "email": "seu@email.com",
  "password": "senha123",
  "name": "Seu Nome",
  "company": "Sua Empresa"
}
```

### 2. Faça Login
```bash
POST /api/auth/login
{
  "email": "seu@email.com",
  "password": "senha123"
}
```

### 3. Conecte WhatsApp
- Acesse o Dashboard
- Vá em Integrações > WhatsApp
- Escaneie o QR Code
- Pronto! Seu bot está online

### 4. Configure IA
- Defina o nome do seu bot
- Adicione sua descrição de empresa
- Customize as respostas automáticas
- Ative os tipos de atendimento (vendas/suporte)

## 📊 Planos

| Plano | Preço | Mensagens | Agentes |
|-------|-------|-----------|----------|
| **Free** | Grátis | 100/mês | 1 |
| **Starter** | R$ 99 | 10.000/mês | 3 |
| **Pro** | R$ 249 | 100.000/mês | 10 |
| **Enterprise** | R$ 999+ | Ilimitado | Ilimitado |

## 📚 API Endpoints

### Autenticação
- `POST /api/auth/register` - Registrar
- `POST /api/auth/login` - Login

### CRM
- `GET /api/crm/customers` - Listar clientes
- `POST /api/crm/customers` - Criar cliente
- `GET /api/crm/conversations/:customerId` - Histórico
- `GET /api/crm/stats` - Estatísticas

### WhatsApp
- `POST /api/whatsapp/webhook` - Receber mensagens
- `POST /api/whatsapp/send` - Enviar mensagem
- `GET /api/whatsapp/status` - Status da conexão

### IA
- `POST /api/ai/generate-response` - Gerar resposta
- `POST /api/ai/analyze-sentiment` - Analisar sentimento

### Pagamentos
- `POST /api/payments/create-checkout` - Criar sessão checkout
- `POST /api/payments/webhook` - Webhook Stripe

## 🔐 Segurança

- JWT para autenticação
- Variáveis de ambiente para credenciais
- HTTPS em produção
- Rate limiting
- Validação de entrada

## 📈 Roadmap

- [ ] Dashboard avançado
- [ ] Integração com CRM populares
- [ ] Suporte a múltiplos idiomas
- [ ] Análise de IA melhorada
- [ ] Mobile App nativa
- [ ] White label
- [ ] API pública

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, faça um fork e envie um pull request.

## 📄 Licença

MIT License - veja LICENSE para detalhes

## 📞 Suporte

Em caso de dúvidas ou problemas:
- Email: support@vendabot.com.br
- WhatsApp: (sua empresa)
- Documentação: https://docs.vendabot.com.br

---

**Desenvolvido com ❤️ por RS Corporation**

*VendaBot - IA que vende 24/7*

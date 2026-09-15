# 📚 DOCUMENTAÇÃO DA API - VENDABOT

## Base URL

```
Desenvolvimento: http://localhost:3001/api
Produção: https://vendabot.com.br/api
```

## Autenticação

Todas as requisições (exceto login/register) precisam do header:

```
Authorization: Bearer SEU_TOKEN_JWT
```

---

## 🔐 AUTH - Autenticação

### Registrar novo usuário

```http
POST /auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "SenhaForte123",
  "company": "Minha Empresa LTDA"
}
```

**Response (201):**
```json
{
  "message": "Usuário criado com sucesso!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "email": "joao@example.com",
    "name": "João Silva",
    "company": "Minha Empresa LTDA",
    "plan": "free"
  }
}
```

---

### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "password": "SenhaForte123"
}
```

**Response (200):**
```json
{
  "message": "Login realizado com sucesso!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "email": "joao@example.com",
    "name": "João Silva",
    "plan": "free"
  }
}
```

---

## 💼 CRM - Gerenciar Clientes

### Listar todos os clientes

```http
GET /crm/customers
Authorization: Bearer TOKEN
```

**Response (200):**
```json
{
  "total": 42,
  "customers": [
    {
      "id": "customer_1234567890",
      "phone": "11999999999",
      "name": "Maria Santos",
      "email": "maria@example.com",
      "status": "lead",
      "createdAt": "2024-01-15T10:30:00Z",
      "lastInteraction": "2024-01-15T14:30:00Z",
      "tags": ["quente", "vendas"],
      "notes": "Interessada em plano Pro"
    }
  ]
}
```

---

### Criar novo cliente

```http
POST /crm/customers
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "phone": "11999999999",
  "name": "Maria Santos",
  "email": "maria@example.com",
  "status": "lead"
}
```

**Response (201):**
```json
{
  "message": "Cliente criado com sucesso!",
  "customer": {
    "id": "customer_1234567890",
    "phone": "11999999999",
    "name": "Maria Santos",
    "email": "maria@example.com",
    "status": "lead",
    "createdAt": "2024-01-15T10:30:00Z",
    "lastInteraction": "2024-01-15T10:30:00Z",
    "tags": [],
    "notes": ""
  }
}
```

---

### Obter histórico de conversas

```http
GET /crm/conversations/:customerId
Authorization: Bearer TOKEN
```

**Response (200):**
```json
{
  "customerId": "customer_1234567890",
  "total": 5,
  "conversations": [
    {
      "id": "conv_123",
      "customerId": "customer_1234567890",
      "message": "Olá, qual é o valor do plano Pro?",
      "sender": "customer",
      "timestamp": "2024-01-15T14:30:00Z",
      "aiResponse": "O plano Pro custa R$ 249/mês e inclui..."
    }
  ]
}
```

---

### Estatísticas do CRM

```http
GET /crm/stats
Authorization: Bearer TOKEN
```

**Response (200):**
```json
{
  "totalCustomers": 42,
  "totalConversations": 156,
  "leads": 25,
  "customers": 12,
  "closed": 5
}
```

---

## 💬 WhatsApp - Bot

### Enviar mensagem

```http
POST /whatsapp/send
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "phone": "11999999999",
  "message": "Olá! Como posso ajudar?"
}
```

**Response (200):**
```json
{
  "status": "sent",
  "phone": "11999999999",
  "message": "Olá! Como posso ajudar?",
  "timestamp": "2024-01-15T14:30:00Z"
}
```

---

### Webhook para receber mensagens

```http
POST /whatsapp/webhook
Content-Type: application/json

{
  "phone": "11999999999",
  "message": "Quero mais informações",
  "timestamp": "2024-01-15T14:30:00Z"
}
```

**Response (200):**
```json
{
  "status": "received",
  "message": "Mensagem processada",
  "phone": "11999999999",
  "timestamp": "2024-01-15T14:30:00Z"
}
```

---

### Status da conexão

```http
GET /whatsapp/status
Authorization: Bearer TOKEN
```

**Response (200):**
```json
{
  "whatsapp": "connected",
  "instance": "vendabot",
  "messages": "ready"
}
```

---

## 🤖 IA - Processamento

### Gerar resposta com IA

```http
POST /ai/generate-response
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "message": "Qual é o preço do seu serviço?",
  "customerProfile": {
    "name": "Maria Santos",
    "company": "Minha Empresa",
    "status": "lead"
  },
  "context": "vendas"
}
```

**Response (200):**
```json
{
  "success": true,
  "originalMessage": "Qual é o preço do seu serviço?",
  "aiResponse": "Ótima pergunta! Temos 3 planos disponíveis:\n- Starter: R$ 99/mês\n- Pro: R$ 249/mês\n- Enterprise: R$ 999+/mês\n\nQual se interessa mais?",
  "tokens": 145
}
```

---

### Analisar sentimento

```http
POST /ai/analyze-sentiment
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "message": "Adorei o serviço de vocês! Muito bom mesmo."
}
```

**Response (200):**
```json
{
  "message": "Adorei o serviço de vocês! Muito bom mesmo.",
  "sentiment": "positivo",
  "confidence": 0.95
}
```

---

## 💳 Pagamentos - Stripe

### Criar sessão de checkout

```http
POST /payments/create-checkout
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "planId": "pro",
  "userEmail": "joao@example.com"
}
```

**Planos válidos:**
- `starter` - R$ 99/mês
- `pro` - R$ 249/mês
- `enterprise` - R$ 999+/mês

**Response (200):**
```json
{
  "checkoutUrl": "https://checkout.stripe.com/pay/cs_...",
  "sessionId": "cs_test_..."
}
```

---

### Webhook de pagamento

Stripe enviará automaticamente eventos para:
```
POST /payments/webhook
```

**Eventos processados:**
- `customer.subscription.created` - Assinatura criada
- `customer.subscription.updated` - Assinatura atualizada
- `customer.subscription.deleted` - Assinatura cancelada

---

## ❌ Códigos de Erro

| Código | Significado | Solução |
|--------|------------|----------|
| 400 | Bad Request | Verifique os parâmetros enviados |
| 401 | Unauthorized | Token inválido ou expirado |
| 403 | Forbidden | Você não tem permissão |
| 404 | Not Found | Recurso não existe |
| 500 | Server Error | Erro interno, tente novamente |

**Exemplo de erro:**
```json
{
  "error": "Email e senha são obrigatórios"
}
```

---

## 🔄 Rate Limiting

- **Login:** 5 tentativas por hora
- **API geral:** 100 requisições por hora
- **WhatsApp:** Limitado pelo plano
- **IA:** Limitado pelo OpenAI

---

## 📋 Exemplos Completos

### Fluxo de vendas completo

```javascript
// 1. Usuário se registra
POST /auth/register
→ Recebe token

// 2. IA processa mensagem do cliente
POST /ai/generate-response
→ Gera resposta automática

// 3. Cria cliente no CRM
POST /crm/customers
→ Registra novo lead

// 4. Envia mensagem via WhatsApp
POST /whatsapp/send
→ Envia proposta de venda

// 5. Cliente clica no link de checkout
POST /payments/create-checkout
→ Redireciona para Stripe

// 6. Stripe envia webhook de confirmação
POST /payments/webhook
→ Atualiza status do cliente
```

---

## 🧪 Testar com cURL

```bash
# 1. Registrar
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@example.com",
    "password": "Teste123!",
    "company": "Empresa Teste"
  }'

# 2. Login (guarde o token)
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "teste@example.com",
    "password": "Teste123!"
  }'

# 3. Listar clientes
curl -X GET http://localhost:3001/api/crm/customers \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

---

**Desenvolvido com ❤️ por RS Corporation**

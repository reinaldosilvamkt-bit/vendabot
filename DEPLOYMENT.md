# 🌍 DEPLOYMENT - VENDABOT

## Opção 1: Replit (Mais Fácil - Grátis)

### Passo 1: Criar conta
1. Vá para [Replit.com](https://replit.com/)
2. Clique em "Sign up"
3. Use GitHub para logar mais rápido

### Passo 2: Importar repositório
1. Clique em "+ Create"
2. Selecione "Import from GitHub"
3. Cola a URL: `https://github.com/reinaldosilvamkt-bit/vendabot`
4. Clique em "Import"

### Passo 3: Configurar variáveis
1. Vá em "Secrets" (ícone de cadeado)
2. Adicione todas as variáveis do `.env`:
   - `FIREBASE_PROJECT_ID`
   - `OPENAI_API_KEY`
   - `STRIPE_SECRET_KEY`
   - etc...

### Passo 4: Deploy
1. Clique em "Run"
2. Espere o build
3. Seu app estará em: `https://vendabot.replit.dev`

### Passo 5: Frontend no Vercel
1. Vá para [Vercel.com](https://vercel.com/)
2. Clique em "New Project"
3. Importe seu GitHub
4. Selecione a pasta `frontend`
5. Adicione as variáveis de ambiente
6. Clique em "Deploy"

**Custo:** Grátis! (enquanto não ultrapassar limites)

---

## Opção 2: Railway (Recomendado - Pago)

### Vantagens:
- Melhor performance
- PostgreSQL/MongoDB inclusos
- Subdomínios grátis
- Interface intuitiva

### Passo 1: Criar conta
1. Vá para [Railway.app](https://railway.app/)
2. Clique em "Login with GitHub"

### Passo 2: Novo projeto
1. Clique em "New Project"
2. Selecione "Deploy from GitHub"
3. Selecione seu repositório

### Passo 3: Configurar banco de dados
```bash
# Railway vai criar automaticamente as variáveis
# Você verá no painel
DATABASE_URL=postgresql://...
```

### Passo 4: Variáveis de ambiente
1. Vá em "Variables"
2. Adicione:
```
NODE_ENV=production
FIREBASE_PROJECT_ID=...
OPENAI_API_KEY=...
STRIPE_SECRET_KEY=...
```

### Passo 5: Deploy automático
1. Clique em "Deploy"
2. Espere ~5 minutos
3. Seu app estará em: `https://vendabot-production.railway.app`

**Custo:** ~R$ 50-100/mês (com banco de dados)

---

## Opção 3: Render (Fácil e Barato)

### Passo 1: Criar conta
1. Vá para [Render.com](https://render.com/)
2. Clique em "Sign up with GitHub"

### Passo 2: Novo Web Service
1. Dashboard > "New +" > "Web Service"
2. Conecte seu GitHub
3. Selecione o repositório `vendabot`
4. Clique em "Connect"

### Passo 3: Configurar
- **Name:** vendabot
- **Environment:** Node
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Instance Type:** Free (começar com isso)

### Passo 4: Environment Variables
Adcione todas do `.env`

### Passo 5: Deploy
Clique em "Create Web Service"

**Custo:** Grátis (Free tier) ou R$ 20-50/mês (Pro)

---

## Opção 4: DigitalOcean App Platform (Profissional)

### Passo 1: Criar conta e app
1. Vá para [DigitalOcean.com](https://www.digitalocean.com/)
2. Dashboard > "Apps"
3. Clique em "Create Apps"

### Passo 2: Conectar GitHub
1. Clique em "GitHub" e autorize
2. Selecione `vendabot`

### Passo 3: Configurar serviços
```yaml
services:
- name: vendabot
  github:
    repo: reinaldosilvamkt-bit/vendabot
  build_command: npm install && npm run build
  http_port: 3001
```

### Passo 4: Database
1. Adicione PostgreSQL (incluído)
2. Adicione Redis para cache

### Passo 5: Deploy
Clique em "Deploy"

**Custo:** R$ 50-200/mês (com database)

---

## Setup de Domínio Custom

### Domínio .com.br

1. **Compre um domínio:**
   - [registro.br](https://www.registro.br/) - oficial
   - [godaddy.com](https://www.godaddy.com/)
   - [namecheap.com](https://www.namecheap.com/)

2. **Configure DNS:**
   - Vá ao painel do seu registro
   - Encontre "DNS Records" ou "Nameservers"
   - Adicione os registros fornecidos pela sua plataforma:

   **Para Railway:**
   ```
   CNAME: api.vendabot.com.br -> railway.app
   ```

   **Para Vercel:**
   ```
   CNAME: app.vendabot.com.br -> vercel.com
   ```

3. **Aguarde propagação (24-48h)**

---

## SSL/HTTPS

### Automático (recomendado)
- **Replit:** automático com `.replit.dev`
- **Railway:** automático
- **Render:** automático
- **DigitalOcean:** automático
- **Vercel:** automático

### Manual (Let's Encrypt)
```bash
# Via Certbot
certbot certonly --standalone -d vendabot.com.br
```

---

## Monitoramento em Produção

### Logs
```bash
# Railway
railway logs

# Render
# Via dashboard

# DigitalOcean
# Via dashboard
```

### Alertas
1. Railway > Settings > Alerts
2. Render > Environment > Alerts
3. DigitalOcean > Apps > Alerts

### Uptime
Use [UptimeRobot.com](https://uptimerobot.com/) - GRÁTIS

```bash
# Monitore sua API
https://vendabot.com.br/health
```

---

## Backup de Dados

### Firebase (automático)
- Dashboard > Backup & Restore
- Google faz backup automático

### PostgreSQL/MongoDB
```bash
# Railway backup automático
# Render backup automático (Pro)

# Manual:
pg_dump > backup.sql
mongodump --out backup/
```

---
## Comparação de Plataformas

| Plataforma | Preço Free | Preço Pago | Setup | Performance |
|-----------|-----------|-----------|-------|-------------|
| **Replit** | Sim | R$ 70+ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Railway** | Não | R$ 50+ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Render** | Sim | R$ 30+ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **DigitalOcean** | Não | R$ 50+ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Vercel** (Frontend) | Sim | R$ 20+ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## Minha Recomendação

### Fase 1: MVP (começar grátis)
- Backend: **Replit** (grátis, fácil)
- Frontend: **Vercel** (grátis, rápido)
- Database: **Firebase** (grátis, 1GB)
- **Custo:** R$ 0/mês

### Fase 2: Produção (quando tiver clientes)
- Backend: **Railway** (R$ 50-80/mês)
- Frontend: **Vercel** (R$ 0-20/mês)
- Database: **Railway PostgreSQL** (incluído)
- **Custo:** R$ 50-100/mês

### Fase 3: Escala (muitos clientes)
- Backend: **DigitalOcean App Platform** (R$ 150-300/mês)
- Frontend: **Vercel Pro** (R$ 20/mês)
- Database: **DigitalOcean Managed DB** (R$ 50+/mês)
- **Custo:** R$ 200-400/mês

---

## Checklist de Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados criado e testado
- [ ] Firebase backup configurado
- [ ] HTTPS/SSL ativado
- [ ] Domínio apontado para app
- [ ] Monitoramento ativado (UptimeRobot)
- [ ] Backups agendados
- [ ] Testes de produção passando
- [ ] Logs sendo monitorados
- [ ] Alertas configurados

---

**Desenvolvido com ❤️ por RS Corporation**

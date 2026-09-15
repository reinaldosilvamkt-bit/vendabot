# 📞 SUPORTE E FAQ - VENDABOT

## ❓ Perguntas Frequentes

### Como funciona o bot de IA?

O bot usa a API do OpenAI (GPT-4) para gerar respostas contextualizadas baseadas na mensagem do cliente e no histórico de conversa.

```
Cliente envia: "Qual é o preço?"
         ↓
    Bot processa via IA
         ↓
    IA gera: "O plano Pro custa R$ 249/mês"
         ↓
Bot envia via WhatsApp
```

---

### Quanto custa cada plano?

| Plano | Preço | Mensagens | Agentes | Suporte |
|-------|-------|-----------|---------|----------|
| Free | Grátis | 100/mês | 1 | Email |
| Starter | R$ 99 | 10k/mês | 3 | Email |
| Pro | R$ 249 | 100k/mês | 10 | Chat |
| Enterprise | R$ 999+ | Ilimitado | Ilimitado | Dedicado |

---

### Como integro meu WhatsApp?

1. Vá em Dashboard > Integrations > WhatsApp
2. Clique em "Conectar"
3. Escaneie o QR Code
4. Pronto! Seu bot está online

---

### Posso customizar as respostas da IA?

Sim! Em Dashboard > Configurações > IA, você pode:
- Definir o tom de voz
- Adicionar informações da empresa
- Criar respostas padrão
- Treinar o bot com seus dados

---

### Como funciona a cobrança?

- Pagamento mensal automático via Stripe
- Fatura enviada por email
- Pode cancelar a qualquer momento
- Sem contrato de longo prazo

---

### Quantas mensagens posso enviar?

Depende do seu plano:
- **Free:** 100 mensagens/mês
- **Starter:** 10.000 mensagens/mês
- **Pro:** 100.000 mensagens/mês
- **Enterprise:** Ilimitado

Contagens reset todo dia 1º do mês.

---

### Meus dados são seguros?

Sim! Utilizamos:
- Encriptação end-to-end
- HTTPS/TLS em toda comunicação
- Firebase Security Rules
- Backups automáticos diários
- Conformidade com LGPD

---

### Como faço backup dos meus dados?

Backup é automático! Você pode exportar em:
- Dashboard > Dados > Exportar
- Formatos: CSV, JSON, PDF

---

### Posso usar múltiplos números de WhatsApp?

Sim! Com planos Pro e Enterprise:
- Starter: 1 número
- Pro: até 5 números
- Enterprise: ilimitado

---

### Qual é o tempo de resposta do bot?

- Média: 2-3 segundos
- Máximo: 5 segundos
- Fora de horário: resposta automática

---

### Posso cancelar a qualquer momento?

Sim! Cancele sem penalidades:
1. Dashboard > Plano > Cancelar
2. Seu acesso continua até o fim do mês
3. Sem cobranças futuras

---

## 🐛 Troubleshooting

### Erro: "WhatsApp não conecta"

**Causas possíveis:**
- Número de telefone incorreto
- WhatsApp Web bloqueado
- Sessão expirada

**Solução:**
1. Saia do WhatsApp Web
2. Tente reconectar em 5 minutos
3. Escaneie o QR Code novamente
4. Se persistir, reinicie o app

---

### Erro: "IA não gera respostas"

**Causas possíveis:**
- Chave OpenAI inválida
- Cota de API excedida
- Mensagem muito longa

**Solução:**
1. Verifique sua chave OpenAI
2. Verifique saldo de créditos em OpenAI
3. Reduza o tamanho da mensagem
4. Tente novamente em alguns minutos

---

### Erro: "Pagamento não funciona"

**Causas possíveis:**
- Cartão recusado
- Dados incorretos
- Webhook não configurado

**Solução:**
1. Verifique dados do cartão
2. Tente outro cartão
3. Entre em contato com suporte

---

### Dashboard lento

**Causas possíveis:**
- Muitos clientes carregando
- Conexão lenta
- Cache do navegador

**Solução:**
1. Limpe o cache (Ctrl+Shift+Del)
2. Feche abas desnecessárias
3. Tente em outro navegador
4. Faça upgrade de plano

---

### Mensagens não chegam

**Causas possíveis:**
- Número não existe
- Número bloqueado
- WhatsApp suspenso

**Solução:**
1. Verifique o número (com código de país)
2. Tente mandar manualmente no WhatsApp
3. Contate nosso suporte

---

## 📞 Contato de Suporte

### Email
📧 **support@vendabot.com.br**
- Resposta em até 24 horas
- Assuntos técnicos, faturamento, geral

### Chat (Plans Pro e Enterprise)
💬 Em Dashboard > Suporte > Chat
- Resposta em até 1 hora
- Segunda a sexta, 9h-18h

### WhatsApp
📱 **(11) XXXX-XXXX** (em breve)
- Suporte rápido
- Apenas clientes Enterprise

### Comunidade
👥 [Discord VendaBot](https://discord.gg/vendabot)
- Compartilhe dicas
- Conheça outros usuários
- Acesso a beta features

---

## 📚 Recursos Adicionais

### Documentação
- [Setup Completo](./SETUP.md)
- [Deployment](./DEPLOYMENT.md)
- [API Reference](./API.md)
- [GitHub](https://github.com/reinaldosilvamkt-bit/vendabot)

### Vídeos Tutorial (em breve)
- Setup inicial
- Conectar WhatsApp
- Configurar IA
- Adicionar clientes
- Acompanhar vendas

### Blog
- Dicas de vendas
- Cases de sucesso
- Novidades do VENDABOT

---

## 🏆 Termos de Serviço

### Direitos do Usuário
✅ Usar a plataforma conforme seus termos
✅ Exportar dados a qualquer momento
✅ Cancelar sem penalidades
✅ Privacidade garantida

### Obrigações do Usuário
❌ Não usar para spam
❌ Não usar para conteúdo ilegal
❌ Respeitar a API rate limit
❌ Manter credenciais seguras

### Responsabilidades
- VENDABOT não se responsabiliza por perdas de dados (fazemos backup, mas recomendamos seus próprios)
- Não somos responsáveis por taxas de SMS/WhatsApp
- Não garantimos resposta de clientes (bot envia, mas cliente pode ignorar)

---

## 🔒 Privacidade e LGPD

Somos conformes com LGPD! Seus dados:
- ✅ São criptografados
- ✅ Ficam no Brasil
- ✅ Podem ser deletados a qualquer momento
- ✅ Não são compartilhados com terceiros
- ✅ Têm backup automático

[Ler Política de Privacidade Completa](./PRIVACY.md)

---

**Obrigado por usar VENDABOT! 🚀**

Dúvidas? Entre em contato:
📧 support@vendabot.com.br
💬 Discord: https://discord.gg/vendabot

---

*Desenvolvido com ❤️ por RS Corporation*

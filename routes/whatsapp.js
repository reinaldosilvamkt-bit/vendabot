const express = require('express');
const axios = require('axios');
const router = express.Router();

// Receber mensagens WhatsApp
router.post('/webhook', (req, res) => {
  try {
    const { phone, message, timestamp } = req.body;

    console.log(`📱 Mensagem recebida de ${phone}: ${message}`);

    // Processar com IA
    // Salvar no banco de dados
    // Enviar resposta automática

    res.json({
      status: 'received',
      message: 'Mensagem processada',
      phone,
      timestamp
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Enviar mensagem
router.post('/send', async (req, res) => {
  try {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({ error: 'Telefone e mensagem são obrigatórios' });
    }

    console.log(`📤 Enviando mensagem para ${phone}: ${message}`);

    // Integração com Evolution API
    // const evolutionResponse = await axios.post(
    //   `${process.env.EVOLUTION_API_URL}/message/sendText`,
    //   {
    //     number: phone,
    //     text: message,
    //   },
    //   {
    //     headers: {
    //       'api_key': process.env.EVOLUTION_API_KEY
    //     }
    //   }
    // );

    res.json({
      status: 'sent',
      phone,
      message,
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Status da conexão
router.get('/status', (req, res) => {
  res.json({
    whatsapp: 'connected',
    instance: process.env.WHATSAPP_INSTANCE_NAME || 'vendabot',
    messages: 'ready'
  });
});

module.exports = router;

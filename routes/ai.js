const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();

// OpenAI initialization
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Gerar resposta com IA
router.post('/generate-response', async (req, res) => {
  try {
    const { message, customerProfile, context } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Mensagem é obrigatória' });
    }

    const systemPrompt = `Você é um assistente de vendas da empresa ${customerProfile?.company || 'VendaBot'}.
    Seu objetivo é:
    1. Atender clientes com profissionalismo
    2. Responder perguntas sobre produtos/serviços
    3. Gerar leads e fechar vendas
    4. Ser amigável e empático
    5. Fornecer informações úteis
    
    Responda de forma concisa e natural, como um atendente real.`;

    const response = await openai.createChatCompletion({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const aiResponse = response.data.choices[0].message.content;

    res.json({
      success: true,
      originalMessage: message,
      aiResponse,
      tokens: response.data.usage.total_tokens
    });
  } catch (error) {
    console.error('OpenAI Error:', error.message);
    res.status(500).json({ 
      error: 'Erro ao gerar resposta',
      message: error.message 
    });
  }
});

// Análise de sentimento
router.post('/analyze-sentiment', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Mensagem é obrigatória' });
    }

    const response = await openai.createChatCompletion({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Analise o sentimento da mensagem e responda com: positivo, neutro ou negativo.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.3,
      max_tokens: 50
    });

    const sentiment = response.data.choices[0].message.content.toLowerCase();

    res.json({
      message,
      sentiment,
      confidence: 0.95
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

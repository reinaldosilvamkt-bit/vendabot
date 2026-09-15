const express = require('express');
const router = express.Router();

// Mock database
const customers = {};
const conversations = {};

// Listar clientes
router.get('/customers', (req, res) => {
  try {
    res.json({
      total: Object.keys(customers).length,
      customers: Object.values(customers)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar cliente
router.post('/customers', (req, res) => {
  try {
    const { phone, name, email, status } = req.body;

    if (!phone || !name) {
      return res.status(400).json({ error: 'Telefone e nome são obrigatórios' });
    }

    const customerId = `customer_${Date.now()}`;
    customers[customerId] = {
      id: customerId,
      phone,
      name,
      email: email || '',
      status: status || 'lead',
      createdAt: new Date(),
      lastInteraction: new Date(),
      tags: [],
      notes: ''
    };

    res.status(201).json({
      message: 'Cliente criado com sucesso!',
      customer: customers[customerId]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Histórico de conversas
router.get('/conversations/:customerId', (req, res) => {
  try {
    const { customerId } = req.params;
    const custConversations = Object.values(conversations).filter(
      c => c.customerId === customerId
    );

    res.json({
      customerId,
      total: custConversations.length,
      conversations: custConversations.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      )
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Dashboard stats
router.get('/stats', (req, res) => {
  try {
    res.json({
      totalCustomers: Object.keys(customers).length,
      totalConversations: Object.keys(conversations).length,
      leads: Object.values(customers).filter(c => c.status === 'lead').length,
      customers: Object.values(customers).filter(c => c.status === 'customer').length,
      closed: Object.values(customers).filter(c => c.status === 'closed').length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

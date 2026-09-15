const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { initializeApp, cert } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Firebase Initialize (será configurado com credenciais)
// const serviceAccount = require('./firebase-key.json');
// initializeApp({
//   credential: cert(serviceAccount),
//   databaseURL: process.env.FIREBASE_PROJECT_ID
// });

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'VENDABOT - IA que vende 24/7',
    version: '1.0.0',
    status: 'online',
    developer: 'RS Corporation'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Auth Routes
app.use('/api/auth', require('./routes/auth'));

// CRM Routes
app.use('/api/crm', require('./routes/crm'));

// WhatsApp Routes
app.use('/api/whatsapp', require('./routes/whatsapp'));

// Payment Routes
app.use('/api/payments', require('./routes/payments'));

// AI Routes
app.use('/api/ai', require('./routes/ai'));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`
🚀 VENDABOT está rodando em http://localhost:${PORT}`);
  console.log(`📱 WhatsApp Bot pronto para atender`);
  console.log(`🤖 IA conectada e funcionando`);
  console.log(`💳 Sistema de pagamento: Stripe integrado\n`);
});

module.exports = app;

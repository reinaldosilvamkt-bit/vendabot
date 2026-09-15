const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// Criar sessão de checkout
router.post('/create-checkout', async (req, res) => {
  try {
    const { planId, userEmail } = req.body;

    const plans = {
      starter: {
        name: 'Starter',
        price: 9900, // R$ 99
        description: '10.000 mensagens/mês'
      },
      pro: {
        name: 'Pro',
        price: 24900, // R$ 249
        description: '100.000 mensagens/mês'
      },
      enterprise: {
        name: 'Enterprise',
        price: 99900, // R$ 999
        description: 'Ilimitado'
      }
    };

    const plan = plans[planId];
    if (!plan) {
      return res.status(400).json({ error: 'Plano inválido' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: `VENDABOT - ${plan.name}`,
              description: plan.description,
            },
            unit_amount: plan.price,
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing`,
      customer_email: userEmail,
    });

    res.json({
      checkoutUrl: session.url,
      sessionId: session.id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Webhook Stripe
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'customer.subscription.created':
        console.log('✅ Assinatura criada:', event.data.object);
        break;
      case 'customer.subscription.updated':
        console.log('✏️ Assinatura atualizada:', event.data.object);
        break;
      case 'customer.subscription.deleted':
        console.log('❌ Assinatura cancelada:', event.data.object);
        break;
    }

    res.json({ received: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

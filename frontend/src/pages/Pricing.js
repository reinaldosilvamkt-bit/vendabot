import React from 'react';

function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Para testar',
      features: [
        '100 mensagens/mês',
        '1 agente',
        'Dashboard básico',
        'Teste ilimitado'
      ],
      cta: 'Começar Grátis',
      highlight: false
    },
    {
      name: 'Starter',
      price: '99',
      description: 'Para pequenos negócios',
      features: [
        '10.000 mensagens/mês',
        '3 agentes',
        'Analytics básico',
        'Email suporte'
      ],
      cta: 'Contratar',
      highlight: false
    },
    {
      name: 'Pro',
      price: '249',
      description: 'Para lojas e agências',
      features: [
        '100.000 mensagens/mês',
        '10 agentes',
        'Analytics completo',
        'Chat suporte prioritário',
        'Integrações'
      ],
      cta: 'Contratar',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: '999+',
      description: 'Para grandes empresas',
      features: [
        'Mensagens ilimitadas',
        'Agentes ilimitados',
        'Suporte dedicado',
        'API customizada',
        'White label'
      ],
      cta: 'Falar com Vendedor',
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Planos VENDABOT</h1>
        <p className="text-center text-gray-600 mb-12">Escolha o plano perfeito para seu negócio</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 ${
                plan.highlight
                  ? 'bg-blue-600 text-white shadow-xl transform scale-105'
                  : 'bg-white shadow'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-4 text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {plan.price}</span>
                {plan.price !== '0' && plan.price !== '999+' && <span className="text-sm">/mês</span>}
              </div>
              <button
                className={`w-full py-2 rounded font-bold mb-6 ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-3">✅</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;

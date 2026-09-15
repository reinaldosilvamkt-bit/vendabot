import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

function Dashboard() {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalConversations: 0,
    leads: 0,
    customers: 0,
    closed: 0
  });
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/crm/stats`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(response.data);
    } catch (error) {
      console.error('Erro ao buscar stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-20">Carregando...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard VENDABOT</h1>
          <p className="text-gray-600">Bem-vindo, {user.name}! 👋</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 font-semibold">Total de Clientes</div>
            <div className="text-3xl font-bold text-blue-600 mt-2">{stats.totalCustomers}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 font-semibold">Conversas</div>
            <div className="text-3xl font-bold text-green-600 mt-2">{stats.totalConversations}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 font-semibold">Leads</div>
            <div className="text-3xl font-bold text-yellow-600 mt-2">{stats.leads}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 font-semibold">Clientes</div>
            <div className="text-3xl font-bold text-purple-600 mt-2">{stats.customers}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 font-semibold">Fechados</div>
            <div className="text-3xl font-bold text-red-600 mt-2">{stats.closed}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">⚙️ Configurações</h3>
            <p className="text-gray-600 mb-4">Configure seu bot e preferências</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Configurar
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">📱 WhatsApp</h3>
            <p className="text-gray-600 mb-4">Conecte seu WhatsApp</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Conectar
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">💳 Plano</h3>
            <p className="text-gray-600 mb-4">Upgrade seu plano</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

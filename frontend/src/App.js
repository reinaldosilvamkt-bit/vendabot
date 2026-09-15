import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🤖 VENDABOT
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            IA que vende 24/7 - CRM + Bot WhatsApp com Inteligência Artificial
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/register" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Começar Grátis
            </a>
            <a href="/pricing" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
              Ver Planos
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher VENDABOT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Integrado</h3>
              <p className="text-gray-600">Atenda seus clientes direto no WhatsApp com IA</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">IA Inteligente</h3>
              <p className="text-gray-600">Respostas automáticas que parecem humanas</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p className="text-gray-600">Relatórios detalhados em tempo real</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

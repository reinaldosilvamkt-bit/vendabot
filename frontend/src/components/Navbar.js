import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          <a href="/" className="text-2xl font-bold text-blue-600">VENDABOT</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="/" className="text-gray-600 hover:text-blue-600">Início</a>
          <a href="/pricing" className="text-gray-600 hover:text-blue-600">Planos</a>
          {isAuthenticated ? (
            <>
              <a href="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</a>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="text-gray-600 hover:text-blue-600">Login</a>
              <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Cadastro
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

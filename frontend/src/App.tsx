import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import { HomePage } from './pages/HomePage';
import { BoardPage } from './pages/BoardPage';
import { colors } from './styles/colors';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link to="/" className="text-2xl font-bold" style={{ color: colors.primary.orange }}>
                    Pet Community
                  </Link>
                </div>
                <div className="flex items-center space-x-8">
                  <Link to="/" className="text-gray-700 hover:text-orange-600">
                    Home
                  </Link>
                  <Link to="/board" className="text-gray-700 hover:text-orange-600">
                    Bulletin Board
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/board" element={<BoardPage />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

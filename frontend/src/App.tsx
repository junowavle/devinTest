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
          <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-[1920px] mx-auto px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link
                    to="/"
                    className="text-2xl font-semibold tracking-tight"
                    style={{ color: colors.primary.orange }}
                  >
                    Pet Community
                  </Link>
                </div>
                <div className="flex items-center space-x-12">
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-orange-600 transition-all duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/board"
                    className="text-gray-700 hover:text-orange-600 transition-all duration-200"
                  >
                    Bulletin Board
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-[1920px] mx-auto px-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/board" element={<BoardPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

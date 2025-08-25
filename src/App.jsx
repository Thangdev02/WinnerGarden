import './App.css'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProductsPage from './pages/ProductPage';
import Footer from './components/Footer';
import Header from './components/Header';
import PlantDetail from './pages/ProductDetailPage';
import AboutUs from './pages/AboutUs';
import AuthPage from './pages/AuthPage';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // khi đổi route → bật loading
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;

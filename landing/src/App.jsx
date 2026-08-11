import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RingLoader from "react-spinners/RingLoader";
import Header from './components/Header';
import About from './components/About';
import Carrousel from './components/Carrousel';
import PortfolioFL from './projects/portfolio-fl';
import Footer from './components/Footer';
import logo from './logo-FL-AZUL.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {loading ? (
          <div className="loader">
            <RingLoader color="#229CE2" width={300} />

          </div>
        ) : (
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={
              <>
                <Header />
                <About />
                <Carrousel />
                <Footer />
              </>
            } />

            {/* Ruta del proyecto */}
            <Route path="/portfolio-fl" element={<PortfolioFL />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BarLoader from "react-spinners/BarLoader";
import Header from './components/Header';
import About from './components/About';
import Carrousel from './components/Carrousel';
import PortfolioFL from './projects/portfolio-fl';
import Footer from './components/Footer';
import logo from './logo-FL-AZUL.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {loading ? (
          <div className="loader">
            <div className="loader-logo"><img src={logo} alt="Logo" /></div>
            <BarLoader color="blue" width={200} />
            <h2 className="loader-loading">Cargando...</h2>
            <h3 className="loader-translate-advise">(Porfavor desactiva el traductor de Google para evitar errores ortográficos)</h3>
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
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Logo from './assets/logo.png'; 
import Home from './components/Home.js';
import SobreNos from './components/SobreNos.js';
import NossosValores from './components/NossosValores.js';
import Historia from './components/Historia.js';
import Adocao from './components/Adocao.js';
import AjudeACausa from './components/AjudeACausa.js';
import Contatos from './components/Contatos.js';
import Footer from './components/Footer.js';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <div className="navbar-logo">
              <Link to="/">
                <img src={Logo} alt="Logo" className="logo-img" />
              </Link>
            </div>
            <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
              <li><Link to="/sobre-nos">Sobre Nós</Link></li>
              <li><Link to="/nossos-valores">Nossos Valores</Link></li>
              <li><Link to="/historia">História e Objetivos</Link></li>
              <li><Link to="/adocao">Cães Disponíveis para Adoção</Link></li>
              <li><Link to="/ajude-a-causa">Ajude a Causa</Link></li>
              <li><Link to="/contatos">Contatos</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/nossos-valores" element={<NossosValores />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/adocao" element={<Adocao />} />
            <Route path="/ajude-a-causa" element={<AjudeACausa />} />
            <Route path="/contatos" element={<Contatos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

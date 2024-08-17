import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <section className="footer">
      <footer className="footer-conteudo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <p>
        Transformando vidas, uma patinha de cada vez.
        </p>
        <div className="imagens-footer">
          <a className="img-footer" href="https://www.facebook.com/adoptiide4pezi.arad">
            <img className="img-footer" src="https://img.icons8.com/?size=256&id=118501&format=png" alt="Facebook" />
          </a>
          <Link className="img-footer" to="/contatos">
            <img className="img-footer" src="https://img.icons8.com/?size=256&id=l8GURTKU12XE&format=png&color=1A6DFF,C822FF" alt="Contato" />
          </Link>
        </div>
        <p>&copy; 2024 4 Pezi Arad</p>
      </footer>
    </section>
  );
}

export default Footer;


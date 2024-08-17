import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/sobre-nos">
        <img src={Logo} alt="Logo" className="home-logo" />
      </Link>
      <h2 className="home-subtext">Juntos, somos a voz daqueles que não podem falar.</h2>
    </div>
  );
};

export default Home;

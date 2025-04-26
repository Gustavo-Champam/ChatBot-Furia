import React, { useState, useEffect } from 'react';
import './Navbar.css';  // Arquivo de estilo CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Imagens/Logo.jpg" alt="FURIA Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Início</a></li>         {/* <- Link para página inicial */}
        <li><a href="/cs">CS:GO</a></li>
        <li><a href="/r6">Rainbow Six</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

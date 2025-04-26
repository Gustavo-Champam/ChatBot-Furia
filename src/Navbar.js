import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Scroll pra baixo => esconde
    } else {
      setShowNavbar(true);  // Scroll pra cima => mostra
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? '' : 'navbar-hidden'}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src="/Imagens/logofuria.jpg" alt="FURIA Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/cs">CS:GO</Link></li>
        <li><Link to="/r6">Rainbow Six</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

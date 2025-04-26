import React from 'react';
import './R6Page.css'; // Reutiliza o mesmo CSS do R6

function CSPage() {
  return (
    <div className="R6-page">
      <h2>Formação CS:GO</h2>

      <div className="top-row">
        {/* Jogadores */}
        <div className="card">
          <div className="player-image-container">
            <img src="/Imagens/KSCERATO.jpg" alt="KSCERATO" className="player-image" />
          </div>
          <div className="player-info">
            <h3>KSCERATO</h3>
            <p className="number">101</p>
            <p className="role">Rifler</p>
          </div>
        </div>

        <div className="card">
          <div className="player-image-container">
            <img src="/Imagens/yurih.jpg" alt="yuurih" className="player-image" />
          </div>
          <div className="player-info">
            <h3>YUURIH</h3>
            <p className="number">102</p>
            <p className="role">Rifler</p>
          </div>
        </div>

        <div className="card">
          <div className="player-image-container">
            <img src="/Imagens/yeki.jpg" alt="chelo" className="player-image" />
          </div>
          <div className="player-info">
            <h3>YEKINDAR</h3>
            <p className="number">103</p>
            <p className="role">Entry Fragger</p>
          </div>
        </div>

        <div className="card">
          <div className="player-image-container">
            <img src="/Imagens/fallen.jpg" alt="FalleN" className="player-image" />
          </div>
          <div className="player-info">
            <h3>FALLEN</h3>
            <p className="number">104</p>
            <p className="role">AWP / IGL</p>
          </div>
        </div>

        <div className="card">
          <div className="player-image-container">
            <img src="/Imagens/molodoy.jpg" alt="skullz" className="player-image" />
          </div>
          <div className="player-info">
            <h3>molodoy</h3>
            <p className="number">105</p>
            <p className="role">Rifler</p>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        {/* Treinador */}
        <div className="card">
          <div className="player-image-container">
            <img src="/Imagens/sidde.jpg" alt="guerri" className="player-image" />
          </div>
          <div className="player-info">
            <h3>SIDDE</h3>
            <p className="role">Treinador</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSPage;

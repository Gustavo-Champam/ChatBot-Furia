import React from 'react';
import './R6Page.css';  // Importa os estilos

function R6Page() {
  return (
    <div className="R6-page">
      <h2>Formação</h2>

      <div className="top-row">
        {/* Jogadores */}
        <div className="card">
          <img src="/Imagens/Kheyze.jpg" alt="Kheye" className="player-image" />
          <div className="player-info">
            <h3>KHEYE</h3>
            <p className="number">104</p>
            <p className="role">Jogador</p>
          </div>
        </div>

        <div className="card">
          <img src="/Imagens/Jv.jpg" alt="JV92" className="player-image" />
          <div className="player-info">
            <h3>JV92</h3>
            <p className="number">104</p>
            <p className="role">Jogador</p>
          </div>
        </div>

        <div className="card">
          <img src="/Imagens/Felipox.jpg" alt="Felipox" className="player-image" />
          <div className="player-info">
            <h3>FELIPOX</h3>
            <p className="number">101</p>
            <p className="role">Jogador</p>
          </div>
        </div>

        <div className="card">
          <img src="/Imagens/Herdsz.jpg" alt="Herdsz" className="player-image" />
          <div className="player-info">
            <h3>HERDSZ</h3>
            <p className="number">98</p>
            <p className="role">Jogador</p>
          </div>
        </div>

        <div className="card">
          <img src="/Imagens/Nade.jpg" alt="Nade" className="player-image" />
          <div className="player-info">
            <h3>NADE</h3>
            <p className="number">90</p>
            <p className="role">Jogador</p>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        {/* Treinador */}
        <div className="card">
          <img src="/Imagens/IgorCtg.jpg" alt="IgorCTG" className="player-image" />
          <div className="player-info">
            <h3>IGOORCTG</h3>
            <p className="role">Treinador</p>
          </div>
        </div>

        {/* Analista */}
        <div className="card">
          <img src="/Imagens/Abreu.jpg" alt="Abreu" className="player-image" />
          <div className="player-info">
            <h3>ABREU</h3>
            <p className="role">Analista</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default R6Page;

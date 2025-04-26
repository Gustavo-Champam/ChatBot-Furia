import React from "react";
import './PlayerCards.css'; // Estilos para os cards

const players = [
  { name: "KHEYE", role: "Jogador", score: 104, imgSrc: "/path/to/kheye.jpg" },
  { name: "JV92", role: "Jogador", score: 104, imgSrc: "/path/to/jv92.jpg" },
  { name: "FELIPOX", role: "Jogador", score: 101, imgSrc: "/path/to/felipox.jpg" },
  { name: "HERDSZ", role: "Jogador", score: 98, imgSrc: "/path/to/herdsz.jpg" },
  { name: "NADE", role: "Jogador", score: 90, imgSrc: "/path/to/nade.jpg" },
  { name: "IGOORCTG", role: "Treinador", score: null, imgSrc: "/path/to/igoorctg.jpg" },
  { name: "ABREU", role: "Analista", score: null, imgSrc: "/path/to/abreu.jpg" }
];

const PlayerCards = () => {
  return (
    <div className="player-cards">
      <h2>Formação</h2>
      <div className="cards-container">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.imgSrc} alt={player.name} className="player-image" />
            <div className="player-info">
              <h3 className="player-name">{player.name}</h3>
              <p className="player-role">{player.role}</p>
              {player.score && <p className="player-score">{player.score}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCards;

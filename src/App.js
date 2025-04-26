import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import CSPage from "./CSPage";
import R6Page from "./R6Page";
import PlayerCards from "./PlayerCards";
import Navbar from './Navbar';  // Importando o Navbar corretamente (default export)
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Agora a Navbar será renderizada corretamente */}
        <h1>FURIA Chatbot</h1>
        <Routes>
          <Route path="/" element={<Chat />} /> {/* Rota para o Chat */}
          <Route path="/cs" element={<CSPage />} /> {/* Rota para CSPage */}
          <Route path="/r6" element={<R6Page />} /> {/* Rota para R6Page */}
          <Route path="/players" element={<PlayerCards />} /> {/* Rota para a página de jogadores */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

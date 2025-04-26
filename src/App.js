import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Chat from "./Chat";
import CSPage from "./CSPage";
import R6Page from "./R6Page";
import PlayerCards from "./PlayerCards";
import Navbar from './Navbar';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>FURIA Chatbot</h1>
        <DynamicTitle />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/cs" element={<CSPage />} />
          <Route path="/r6" element={<R6Page />} />
          <Route path="/players" element={<PlayerCards />} />
        </Routes>
      </div>
    </Router>
  );
}

const DynamicTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      document.title = "FURIA Chatbot";
    } else if (path === "/cs") {
      document.title = "FURIA Chatbot - CS:GO";
    } else if (path === "/r6") {
      document.title = "FURIA Chatbot - Rainbow Six";
    } else if (path === "/players") {
      document.title = "FURIA Chatbot - Jogadores";
    }
  }, [location]);

  return null;  
};

export default App;

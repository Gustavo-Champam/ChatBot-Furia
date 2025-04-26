import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css'; // Estilo opcional

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Função para enviar a pergunta à IA com um contexto especializado
  const askGemini = async (pergunta) => {
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `
                    Responda como se fosse um torcedor fanático da FURIA, com linguagem descontraída e criativa. A FURIA é uma organização de esports muito conhecida no Brasil, com grandes equipes de CS:GO e Rainbow Six. 
                    Ela é conhecida por sua presença forte em campeonatos de esportes, especialmente em CS:GO, onde seus jogadores como KSCERATO e Yuurih são ícones, e no Rainbow Six, onde sua equipe tem um ótimo desempenho. 
                    Pergunta: ${pergunta}`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const resposta = res.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      return resposta || 'A IA ficou sem palavras 😅';
    } catch (error) {
      console.error('Erro na chamada da IA:', error);
      return 'Eita! Deu ruim aqui. Tenta de novo aí, furioso!';
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'Você', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const botReply = await askGemini(input);
    const botMessage = { sender: 'Bot', text: botReply };
    setMessages((prev) => [...prev, botMessage]);
    setInput('');
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <h2>FURIA CHATBOT</h2>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        {loading && <p><strong>Bot:</strong> Esquenta aí que já te respondo, torcida! 🔥</p>}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Digite sua pergunta..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;

import React, { useState } from 'react';
import axios from 'axios';
import './GeminiBot.css'; // Certifique-se de que você tem um CSS para estilizar o bot

const GeminiBot = () => {
  const [input, setInput] = useState('');  // Entrada do usuário
  const [response, setResponse] = useState('');  // Resposta da IA
  const [loading, setLoading] = useState(false);  // Estado de carregamento

  const askGemini = async () => {
    if (!input) return;  // Se a entrada estiver vazia, não faz a requisição
    setLoading(true);  // Marca o início do carregamento
    setResponse('');   // Limpa a resposta anterior

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL,  // URL da API (definida no .env)
        {
          inputs: [
            { text: `Responda de forma descontraída como se fosse um torcedor da FURIA para a pergunta: ${input}` }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Captura o conteúdo gerado pela API
      const content = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'A IA ficou sem palavras 😅';
      setResponse(content);  // Atualiza o estado com a resposta da IA
    } catch (err) {
      console.error('Erro na requisição:', err.response ? err.response.data : err.message);
      setResponse('Erro ao se conectar com a IA.');  // Mensagem de erro
    }

    setLoading(false);  // Finaliza o estado de carregamento
  };

  return (
    <div className="gemini-bot">
      <h2>🤖 FURIA Gemini Bot</h2>
      
      {/* Área para o usuário digitar a pergunta */}
      <textarea
        rows={4}
        placeholder="Manda sua pergunta, torcedor!"
        value={input}
        onChange={(e) => setInput(e.target.value)}  // Atualiza o estado com o que o usuário digita
      />

      {/* Botão de envio */}
      <button onClick={askGemini} disabled={loading}>
        {loading ? 'Respondendo...' : 'Enviar'}
      </button>

      {/* Exibe a resposta da IA */}
      {response && (
        <div className="response-box">
          <strong>🐆 IA da FURIA:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiBot;

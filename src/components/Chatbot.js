import React, { useState } from 'react';
import { getChatResponse } from '../api';
import './Chatbot.css';

const Chatbot = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        try {
            const res = await getChatResponse(query);
            setResponse(res.data.response);
        } catch (error) {
            console.error('Error:', error);
            setResponse('Failed to fetch response.');
        }
    };

    return (
        <div className="chat-container">
            <h2>Chat with AI</h2>
            <textarea
                placeholder="Type your question here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            /> <br />
            <button onClick={handleSend}>Send</button>
            {response && <div className="chat-response"><strong>AI:</strong> {response}</div>}
        </div>
    );
};

export default Chatbot;

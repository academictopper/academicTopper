"use client"
import axios from 'axios';
import React, { useState } from 'react'

function FeatureAi() {
   
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setSuggestions('');

    try {
      const response = await axios.post('/api/checkAnswer', { question, answer });
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error(error);
      setSuggestions('Error fetching suggestions.');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Question and Answer Checker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Answer:</label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Checking...' : 'Check Answer'}
        </button>
      </form>
      {suggestions && (
        <div>
          <h2>Suggestions:</h2>
          <p>{suggestions}</p>
        </div>
      )}
    </div>
  );
}

export default FeatureAi
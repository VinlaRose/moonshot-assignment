const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4000; // You can change this to any available port

app.use(express.json());

app.post('/generate-token', async (req, res) => {
  const apiKey = '4NKQ3-815C2-8T5Q2-16318-55301';
  const url = 'https://devcore02.cimet.io/v1/generate-token';

  try {
    const response = await axios.post(url, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error calling the API:', error.message);
    res.status(500).json({ error: 'An error occurred while calling the API' });
  }
});

module.exports = app;

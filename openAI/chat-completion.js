const fetch = require('node-fetch');
require('dotenv').config();
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.OPENAI_API_KEY; // replace with your actual API key

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: 'Hello!'
    }]
  })
};

fetch(API_ENDPOINT, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

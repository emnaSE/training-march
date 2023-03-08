const fetch = require('node-fetch');
require('dotenv').config();
const API_ENDPOINT = 'https://api.openai.com/v1/edits';
const API_KEY = process.env.OPENAI_API_KEY; // replace with your actual API key

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    model: 'text-davinci-edit-001',
    input: 'What day of the wek is it?',
    instruction: 'Fix the spelling mistakes'
  })
};

fetch(API_ENDPOINT, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

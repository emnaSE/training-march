const axios = require('axios');
require('dotenv').config();

const prompt = "A cute baby sea otter";
const n = 2;
const size = "1024x1024";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
  }
};

const data = {
  prompt,
  n,
  size
};

axios.post("https://api.openai.com/v1/images/generations", data, config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.response.data);
  });

const FormData = require('form-data');
const axios = require('axios');
require('dotenv').config();
const fs = require('fs');
const formData = new FormData();
formData.append('image', fs.createReadStream('./otter.png'));
formData.append('mask', fs.createReadStream('./mask.png'));
formData.append('prompt', 'A cute baby sea otter wearing a beret');
formData.append('n', 2);
formData.append('size', '1024x1024');

axios.post('https://api.openai.com/v1/images/edits', formData, {
  headers: {
    ...formData.getHeaders(),
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });

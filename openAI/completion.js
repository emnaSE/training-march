require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const questions = [
    "What is the capital of France?",
    "What is the capital of Germany?",
    "What is the capital of Italy?",
    "What is the capital of Spain?",
    "What is the capital of Portugal?",
    "What is the capital of Greece?",

    "What is the capital of the United Kingdom?",
];

let callOpenAi = async (prompt) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: JSON.stringify(prompt),
    temperature: 0,
    max_tokens: 50 - prompt.length,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    best_of: 1
  });
  return response.data.choices[0].text;
}

async function generateText() {
  for (const question of questions) {
    const response = await callOpenAi(question);
    console.log(`prompt: ${question}`);
    console.log(`completion:  ${response}`);
    console.log("---------------------");
  }
}generateText();


// Path: openAI/completion.js

// const fs = require("fs");

// async function generateText() {
//   let data = [];

//   for (const question of questions) {
//     const response = await callOpenAi(question);
//     data.push({ question, response });
//   }

//   const csv = data.map((row) => `${row.question},${row.response}`).join("\n");

//   fs.writeFile("output.csv", csv, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Output saved to output.csv");
//   });
// }

// generateText();

const fs = require("fs");

async function generateText() {
  let data = [];

  for (const question of questions) {
    const response = await callOpenAi(question);
    const obj = { question, response };
    data.push(obj);

    console.log(`prompt: ${question}`);
    console.log(`completion:  ${response}`);
    console.log("---------------------");
  }

  fs.writeFile("output.jsonl", "", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Output file created.");
  });

  for (const obj of data) {
    const json = JSON.stringify(obj);
    const jsonl = `[${json}]\n`;
    fs.appendFile("output.jsonl", jsonl, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

  console.log("Output saved to output.jsonl");
}

generateText();

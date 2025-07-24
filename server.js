const express = require('express');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

dotenv.config();
const app = express();
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/ask', async (req, res) => {
  const { question } = req.body;
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: question }]
    });
    res.json({ answer: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error("Erreur:", error);
    res.status(500).send("Erreur GPT");
  }
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(3000, () => console.log("Bot technique Daitem lancé sur port 3000"));

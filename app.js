const express = require("express");

const app = express();

const answers = [
  "Yes, definitely",
  "It is certain",
  "Without a doubt",
  "Ask again later",
  "Cannot predict now",
  "Don't count on it",
  "My sources say no",
  "Very doubtful",
];

app.get("/", (req, res) => {
  res.json({ message: "Magic 8-Ball API" });
});

app.get("/ask", (req, res) => {
  const question = req.query.question || "No question asked";
  const answer = answers[Math.floor(Math.random() * answers.length)];
  res.json({ question, answer });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

if (require.main === module) {
  app.listen(3000, "0.0.0.0", () => {
    console.log("Server listening on port 3000");
  });
}

module.exports = app;
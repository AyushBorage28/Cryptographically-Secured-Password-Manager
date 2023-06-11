const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config(); // Load environment variables from .env file

const PORT = 3001;
const db = process.env.DB_CONNECTION_STRING; // Use the connection string from .env

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("Connection failed:", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
  res.send("Hello login World");
});

app.get("/register", (req, res) => {
  res.send("Hello register World");
});

app.get("/passwordvault", (req, res) => {
  res.send("Hello password vault World");
});

app.listen(PORT, () => {
  console.log("Server is running");
});

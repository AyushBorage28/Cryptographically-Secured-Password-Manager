// this is the file where the server gets started
const dotenv = require("dotenv");



const mongoose = require("mongoose");
const express = require("express");
const app = express();

//middle ware 
// i will use it for the function that if the user is not loggen in then on clicking the passowrd vault he shoul be redirected to home page


const PORT = 3001;

const db =
  "mongodb+srv://ishpreetshriya:ishpreetshriya@cluster0.lkxf8ok.mongodb.net/pwuc?retryWrites=true&w=majority";

mongoose
  .connect(db,{
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify:false
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(`no connection`));

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/login", (req, res) => {
    res.send("Hello login  World");
  });
  
  app.get("/register", (req, res) => {
    res.send("Hello register  World");
  });
  
  app.get("/passwordvault", (req, res) => {
    res.send("Hello register  World");
  });
  
app.listen(PORT, () => {
  console.log("Server is running");
});

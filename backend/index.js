// index.js
// Import the connect function from db.js

import express from "express";
import connect from "./db.js";
import createUser from "./Routes/CreateUser.js";
const app = express();

// Call the connect function to establish a connection to the database
connect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json())
app.use('/api/',createUser)

app.listen(5000, () => {
  console.log("Server is Working");
});

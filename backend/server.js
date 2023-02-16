const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/home", (req, res) => {
  res.send({ message: "Hello from Node.js!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

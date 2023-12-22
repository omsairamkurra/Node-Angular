const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.send(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});

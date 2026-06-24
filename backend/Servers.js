const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("FitWell Backend Running");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Frontend and Backend Connected Successfully"
  });
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

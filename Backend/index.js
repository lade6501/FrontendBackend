const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const url = process.env.DBURL;

const port = process.env.PORT || 4000;

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const alienRouter = require("./routes/aliens");

app.use("/aliens", alienRouter);

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});

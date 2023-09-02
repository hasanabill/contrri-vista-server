const express = require("express");
const app = express();
app.use(require("cors"));
require("dotenv").config();
app.use(express.json());

const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ltzoc1z.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log("Database is running"))
  .catch((e) => console.log(`MongoDB Connection Error: ${e.message}`));

const port = process.env.PORT;
app.listen(port, () => console.log(`server is running at port: ${port}`));

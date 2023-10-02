const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
// app.use(express.json());
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nzwjojj.mongodb.net/?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/projects", require("./routes/api/projects"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running at port: ${port}`));

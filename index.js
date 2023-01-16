const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { connection } = require("./config/db");
const { todoRoutes } = require("./Routes/todo.route");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/todos", todoRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Connected to database on port ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});

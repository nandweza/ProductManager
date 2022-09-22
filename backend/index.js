const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const expenseRoute = require("./routes/expense");
const listRoute = require("./routes/lists");

const port = 4000;
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfully!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/expense", expenseRoute);
app.use("/api/lists", listRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
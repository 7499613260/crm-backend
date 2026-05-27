const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/customers", require("./routes/customer"));

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});

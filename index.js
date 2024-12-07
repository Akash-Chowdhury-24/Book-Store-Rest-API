require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/bookRoutes");
// mongo db connected
const connectDB = require("./database/db");
connectDB();

// middleware express.json()
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));
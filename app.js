require("dotenv").config();

const express = require("express");
const Router = require("./router/router");

//...

//...

const app = express();

app.use(express.json());

// Logic here
// importing user context
// const User = require("./model/user");

// ...
app.use("/api/wallet", Router)



module.exports = app;

const express = require("express");
const imageRouter = require('./routes/imageRouter.js');
const authRouter = require("./routes/authRouter.js");
const cors = require("cors");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.use('/api/v1/images', imageRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;
 
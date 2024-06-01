const express = require("express");
const imageRouter = require('./routes/imageRouter.js');
const cors = require("cors");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());
app.use('/api/v1/images', imageRouter);

module.exports = app;

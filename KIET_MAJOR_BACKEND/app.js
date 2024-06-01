const express = require("express");
const imageRouter = require('./routes/imageRouter.js');

const app = express();

app.use(express.json());
app.use('/api/v1/images', imageRouter);

module.exports = app;

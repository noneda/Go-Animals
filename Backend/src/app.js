const routes = require('./routers')


const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: "APP Go Animals",
    author: "noneda",
    version: "0.0.4",
    description: "IDK",
  });
});


//routes(app);

module.exports = app;

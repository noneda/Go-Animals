const routes = require('./routers')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session');

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(morgan("tiny"));
app.use(cors({
  origin: 'http://localhost:5173',  // Ajusta al puerto del frontend
  credentials: true
}));

app.use(session({
  secret: 'tu_clave_secreta', 
  resave: false,              
  saveUninitialized: false,   
  cookie: { 
    secure: false, 
    maxAge: 1000 * 60 * 60 * 8
  }  
}));

app.get("/", (req, res) => {
  res.json({
    name: "APP Go Animals",
    author: "noneda",
    version: "0.0.4",
    description: "IDK",
  });
});


routes(app);

module.exports = app;

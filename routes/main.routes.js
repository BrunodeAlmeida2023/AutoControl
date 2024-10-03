const express = require('express');
const routes = express.Router();
const CarroRouter = require('./carro.router')

routes.use("/carro", CarroRouter)


module.exports = routes;
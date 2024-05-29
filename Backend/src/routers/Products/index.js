const {Router} = require('express')

const prod = require('../../controllers/Products')
const {Auth} = require('../../controllers/Auth')

const ProdRouter = Router()

ProdRouter.get("/status", prod.Howmanythere)
ProdRouter.get("/boxs", prod.sendBoxs)
ProdRouter.get("/box/:id", prod.sendBox)

module.exports = ProdRouter
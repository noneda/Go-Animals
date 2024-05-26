// * Here I Push paths
const AuthRouter = require('./Auth');
// const ProdRouter = require('./Products')

const send = (app) => {
  //app.use('/API/Productos', ProdRouter)
  app.use('/API/Auth', AuthRouter)
}

module.exports = send;

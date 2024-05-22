// * Here I Push paths
//const AuthRouter = require('./Auth');
const Productos = require('./Products')

const send = (app) => {
  app.use('/API/Productos', Productos)
  //app.use('API/Auth', AuthRouter)
}

module.exports = send;

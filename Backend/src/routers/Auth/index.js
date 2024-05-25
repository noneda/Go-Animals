const {Router} = require('express')

const auth = require('../../controllers/Auth')

const AuthRouter = Router();

AuthRouter.post("/LogIn", auth.LogIn)
AuthRouter.post("/LogOut", auth.LogOut)

module.exports = AuthRouter;

const express = require("express")
const route = express.Router()
const UserController = require("../controllers/userController")

route.get("/login", UserController.login)
route.post("/login", UserController.handleLoginSubmit)

module.exports = route
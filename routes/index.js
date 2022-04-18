const express = require("express")
const route = express.Router()
const homeRoute = require("./homeRoute")
const userRoute = require("./userRoute")

// route.get("/", (req, res) => {
//     res.send("Welcome")
// })

route.use("/", homeRoute)
route.use("/user", userRoute)

module.exports = route
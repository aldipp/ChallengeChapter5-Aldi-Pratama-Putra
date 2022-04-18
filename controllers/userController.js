const fs = require("fs")

class UserController {

    static login(req,res) {
        res.render("login")
    }

    static handleLoginSubmit (req, res) {
        const {username, password} = req.body

        let uD = fs.readFileSync("./models/userData.json", "utf-8")
        let parsingUserData = JSON.parse(uD)

        let searchInData = parsingUserData.find(data => data.username === username && data.password === password)

        if (searchInData) {
            res.render("games")
        } else {
            console.log("Username and Password incorrect!")
        }
    }
}

module.exports = UserController
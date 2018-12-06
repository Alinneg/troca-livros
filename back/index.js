const BodyParse = require("body-parser")
const Express = require("express")
const app = Express()

const DB = require("./dataBase/db")
const Router = require("./src/routeService")

async function init() {
    const dbPoll = await DB.makeConnection()
    app.all('*', function (req, res, next) {
        var responseSettings = {
            "AccessControlAllowOrigin": req.headers.origin,
            "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
            "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
            "AccessControlAllowCredentials": true
        }
        res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials)
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token")
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
        res.header()
        next()
    })

    const router = new Router(app, dbPoll)

    router.setRoutes()

    app.use(BodyParse.json())
    app.listen(8080, () => {
        console.log("Listen on http://localhost:8080")
    })
}

init()
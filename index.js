const express = require('express')
const db = require("./models")
const app = express()
var bodyParser = require('body-parser')

const boatService = require('./services/boat')
const sailorService = require('./services/sailor')
const reserveService = require('./services/reserve')

app.use(bodyParser.json())
app.use(express.urlencoded({
    extended:false
}))


db.sequelize.sync({force:true}).then(() =>{
    boatService(app,db)
    sailorService(app,db)
    reserveService(app,db)
    app.listen("8080",() =>console.log("sever is running"))
})


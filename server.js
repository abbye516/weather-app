const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect(process.env.CONNECTION_STRING ||"mongodb://localhost/weather", { useNewUrlParser: true })

app.use('/', api)

const port = 3000
app.listen(process.env.PORT || 3000 , function () {
    console.log(`Running on port ${port}`)
})

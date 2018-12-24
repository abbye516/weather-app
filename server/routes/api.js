const express = require('express')
const router = express.Router()
const city = require('../model/city')
const request = require('request')
const moment = require('moment')


router.get('/city/:cityName', function (req, res) {
    let name = req.params.cityName
    request(`https://api.apixu.com/v1/current.json?key=81abec970d3044dc975114043181912&q=${name}`, function (err, response, body) {
        let data = JSON.parse(body)
        data.current.last_updated = moment(data.current.last_updated).format("MMMM Do, YYYY")
        res.send(data)
    })
})

router.get('/cities', function (req, res) {
    city.find({}, function (err, data) {
        // moment(timeData).format("MMMM Do, YYYY")
        res.send(data)
    })
})

router.post('/city', function (req, res) {
    let cityImport = new city(req.body)
    console.log(req.body)
    cityImport.save()
    res.end()
})

router.delete('/city/:cityName', function (req, res) {
    let data = req.params.cityName
    let newData = data.charAt(0).toUpperCase() + data.slice(1)
    city.findOneAndDelete({ name: newData }, function (err) {
    })
    res.end()

})


module.exports = router

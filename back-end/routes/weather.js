const express = require('express')
const router = express.Router()
const axios = require('axios').default;

// get weather by longitude and latitude
router.get('/', (req, res) => {
    const apiId= process.env.MAPS_API_KEY
    const {lat, lon}= req.query
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+apiId)
        .then(function(result){
            console.log(result.data)
            res.send(result.data)
        })
        .catch(function(error){
            console.log(error)
            res.send(error)
        })
})

module.exports = router
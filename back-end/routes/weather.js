const express = require('express')
const router = express.Router()
const axios = require('axios').default;


router.get('/', (req, res) => {
    const appid= '4ddea071b5c9616feaab9b5a09b40c59'
    const {lat, lon}= req.query
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+appid)
        .then(function(result){
            console.log(result.data)
            res.send(result.data)
        })
        .catch(function(error){
            console.log(error)
            res.send(error)
        })
    // User.find()
    //     .then(users =>  {
    //         res.json(users)
    //     })
    //     .catch(err => {
    //         res.status(400).json(err)
    //     })
    // console.log((appid))
    // res.send(q+appid)
})

module.exports = router
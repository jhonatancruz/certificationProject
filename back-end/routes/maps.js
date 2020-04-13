const express = require('express')
const router = express.Router()

// get weather by longitude and latitude
router.get('/', (req, res) => {
    res.render('mapsTest')
})

module.exports = router
const express = require('express')
const router = express.Router()

// const auth = require('../middlewares/authorization')
// const List = require('../models/List')

// router.use(auth)

router.get('/', (req, res) => {
    res.send('Working')
})

module.exports = router
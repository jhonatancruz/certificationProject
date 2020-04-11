const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')

const testRoutes = require('./routes/test')

// mongoose.connect(
//     process.env.MONGODB_URL,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log('DB connected!')
// )

const app = express()

app.set('view engine', 'ejs')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', testRoutes)

module.exports = app
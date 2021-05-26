const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const routes = require('./routes/routes')
app.use('/',routes)

module.exports = app

const express = require('express')
const app = express()
const db = require('../database/connect');
const cors = require('cors')

async function syncDatabase() {
    const result = await db.sync()
    try {
        console.log('[*] Connected on database')
    } catch (databaseSyncError) {
        console.log(databaseSyncError)
    }
}

app.use(cors())
app.use(express.json())
syncDatabase()

const routes = require('./routes/routes')
app.use('/',routes)

module.exports = app

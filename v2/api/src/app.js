const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./middlewares/middlewares')
app.use(cors())
app.use(express.json())

const routes = require('./routes/routes')
app.use('/carga', middleware.authUser)
app.use('/cliente', middleware.authUser)
app.use('/configuracao', middleware.authUser)
app.use('/empresa-distribuicao', middleware.authUser)
app.use('/empresa-operacao', middleware.authUser)
app.use('/local-coleta', middleware.authUser)
app.use('/local-entrega', middleware.authUser)
app.use('/motorista', middleware.authUser)
app.use('/operador', middleware.authUser)
app.use('/solicitacao', middleware.authUser)
app.use('/veiculo', middleware.authUser)

app.use('/',routes)

module.exports = app

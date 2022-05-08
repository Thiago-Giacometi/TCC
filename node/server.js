import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import routes from './routes.js'
import db from './db.js'
import './models/index.js'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())
app.use(routes)

app.use(function (req, res, next) {
  console.log('middleware')
  next()
})

db.sync(() => console.log('Banco de dados conectado'))

const port = process.env.PORT || 8090
app.listen(port)
console.log('Conectado na porta ' + port)

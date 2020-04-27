const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: './.env'});
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongooseConnect = require('./utils/mongooseConnect')
const path = require('path')
const colors = require('colors')
const cors = require('./middleware/cors')
const errors = require('./routes/errorsRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

// --> MIDDLEWARES
app.use('/uploads/' ,express.static('uploads'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors)

// --> ROUTES

app.use('/user', userRoutes)
app.get('/', (req, res, next) => res.send('Jarvis pour vous servir'))
app.use(errors.error404)
app.use(errors.sendError)

mongooseConnect
app.listen(8081, () => console.log(colors.red.underline('Jarvis API peut servir')))

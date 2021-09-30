const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
require('./database')

//Middlewares

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))


//Routes
app.use('/api', require('./routes/usuarios.routes'))
app.use('/login', require('./routes/login.routes'))



//Settings
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
  }
)
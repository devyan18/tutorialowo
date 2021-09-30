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
app.use('/usuarios', require('./routes/usuarios.routes'))



//Settings
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
  }
)
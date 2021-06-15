const express = require('express')
const app = express()
const morgan = require('morgan')
const methodOverride = require('method-override')
const cors = require('cors')
const userRoutes = require('./routes/user')
const port = process.env.PORT || 3002

require('dotenv').config();
require('./config/database');


app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/', userRoutes)
 
app.listen(port, function(){
   console.log("Listening")
})

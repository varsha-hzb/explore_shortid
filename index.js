require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URL).then(() => console.log('mongodb connected!'))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// link router
const urlRouter = require('./routes/urlRoute')
app.use('/', urlRouter)

app.listen(PORT, () => 
console.log(`Server started on PORT: ${PORT}`)
)
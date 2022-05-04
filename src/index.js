const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
    useNewUrlParser:true
}, console.log('Connected to database'))

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Olá Mundo')
})

app.listen(3333, () => console.log('Server running'))
const express = require('express')
const connectDatabase = require('./utils/connectDatabase')
const userRoutes = require('./routes/userRoutes')
const dotenv = require('dotenv').config()

// instantiate express app
const app = express()

// connect to database
connectDatabase()

//setup app
app.use(express.json())
app.use('api/v1/user', userRoutes)

// set port number
const PORT = process.env.PORT || 3250

//start server and listen for connections
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
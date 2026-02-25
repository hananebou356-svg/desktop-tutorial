require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const authController = require('./controllers/authController')
const authMiddleware = require('./middlewares/authMiddleware')

const app = express()
app.use(express.json())

// MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected'))
.catch(err => console.log(err))

// Routes

app.post('/register',authController.register)
app.post('/login',authController.login)
app.get('/profile',authMiddleware,authController.profile)

const PORT = process.env.PORT
app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT}`)
})
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// REGISTER
exports.register = async (req, res)=> {
    try{
      const {email,password} = req.body
      
      const userExists = await User.findOne({email})
      if (userExists){
        return res.statut(400).json({ message: 'User alread exists'})
      }
      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await User.create({
        email,
        password: hashedPassword
      })
     res.status(201).json({
        message: 'User created successfully'
     })
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

// LOGIN
exports.login = async (req, res) => {
    try{
        const {email,password } = req.body

        const user = await User.findOne({ email })
        if (!user){
            return res.status(400).json({message: 'Invalid credentials'})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).json({message: 'Invalid credentials'})
        }
        const token = jwt.sign(
            {id: user._id },
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        )
        res.json({
            token
        })
    }catch (error){
        res.status(500).json({ message: error.message })
    }
}

// PROFILE
exports.profile = async (req, res) => {
    res.json({
    message: 'Welcome to your profile',
    user: req.user
  })
}
const User = require('../models/userModel')
const router = require('express').Router()

router.post('/register', async (req, res) => {

    //validate user
    if (!req.body.username) return res.status(400).json({ message: 'Username required...' })
    if (!req.body.email) return res.status(400).json({ message: 'Email required...' })
    if (!req.body.password) return res.status(400).json({ message: 'Password required' })

    try {

        //save new user
        const newUser = new User(req.body)
        const savedUser = await newUser.save()

        return res.status(201).json(savedUser)

    } catch (err) {
        return res.status(500).json(err)
    }

})

router.get('/findAll', async (req, res) => {

    try {
        //find all users
        const users = await User.find()

        return res.status(200).json(users)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.get('/findOne/:id', async (req, res) => {

    //validate user
    if (!req.params.id) return res.status(400).json({ message: 'Id param required...' })

    try {
        //find single user
        const user = await User.findById({ _id: req.params.id })

        return res.status(200).json(user)

    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/delete/:id', async (req, res) => {

    //validate user
    if (!req.params.id) return res.status(400).json({ message: 'Id param required...' })

    try {
        //delete  user
        const result = await User.findOneAndDelete(req.param.id)
        if (result) {
            return res.status(200).json({ message: "User deleted..." })
        } else {
            return res.status(501).json({ message: "User does not exist..." })
        }

    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/update/:id', async (req, res) => {

    //validate user
    if (!req.params.id) return res.status(400).json({ message: 'Id param required...' })

    // find user and update 
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true })
        return res.status(201).json(updatedUser)
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router

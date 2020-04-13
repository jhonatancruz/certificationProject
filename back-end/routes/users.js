const express = require('express')
const router = express.Router()

const auth = require('../middlewares/auth')
const User = require('../models/User')

router.use(auth)

// get all users
router.get('/', (req,res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err))
})

// find one by id
router.get('/:id', (req, res) =>
{
    const { id } = req.params

    User.findById(id)
        .then(user => {
            if (user){
                res.json(user.generateUserPublicObject())
            } else{
                res.status(404).json({
                    msg: 'User not found'
                })
            }
        })
        .catch(err => res.status(400).json(err))
})

// add a new user
router.post('/', (req,res) => {
    const { name, email, username, password } = req.body
    const user = new User()

    user.name = name
    user.email = email
    user.username = username
    user.generatePasswordHash(password)

    user.save()
        .then(newUser =>{
            res.json(newUser.generateUserPublicObject())
        })
        .catch(err => res.status(400).json(err))
})


// delete an user by id
router.delete('/:id', (req,res) =>
{
    const {id} = req.params

    User.findByIdAndDelete(id)
        .then(deletedUser => res.json(deletedUser.generateUserPublicObject()))
        .catch(err => res.status(400).json(err))
})

// update by id
router.put('/:id', (req,res) =>
{
    const {id} = req.params
    const { name, email, username, password } = req.body
    
    const data = {
        name : name,
        email : email,
        username : username,
        password : password
    }
    
    User.findByIdAndUpdate(id, data)
        .then(updatedUser => res.json(updatedUser.generateUserPublicObject()))
        .catch(err => res.status(400).json(err))
})




module.exports = router

const router = require('express').Router()
var User = require('../model/User')
const Joi = require('@hapi/joi')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerValidation,loginValidation} = require('../validation')

const schema = Joi.object({
    name:Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required()
})

router.post('/register',async (req,res)=>{
 // Validation 
  const {error} =  registerValidation(req.body)  
  if(error) return res.status(400).send(error.details[0].message)

  //email exists 
  const emailexists = await User.findOne({email:req.body.email});
  if(emailexists) return res.status(400).send('Email already exists')
 //Hashing passswords 




    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    try{
        const usersaved = await user.save()
        res.send({user:user._id})
    }
    catch(err){
         res.status(400).send(err)
    }
})

router.post('/login', async (req,res)=>{

    // Validation 
  const {error} =  loginValidation(req.body)  
  if(error) return res.status(400).send(error.details[0].message)

  //email exists 
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.status(400).send('Email doesnt exists exists')
 //Hashing passswords 

   const validPass = await User.findOne({password:req.body.password});
   if(!validPass) return res.status(400).send('Password is incorrect')
     const token = jwt.sign({_id:user._id},'dfhdkjsdjkfhds')
     res.header('auth-token',token).send(token);
    
})

module.exports = router
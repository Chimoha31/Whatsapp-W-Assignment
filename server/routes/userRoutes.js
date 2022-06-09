const router = require('express').Router();
const User = require('../models/User');

// Create User = Signupする時
router.post('/', async(req, res) => {
  try{
    const {name, email, password, picture} = req.body;
    console.log(req.body);
    const newUser = {
      name,
      email,
      password,
      picture
    }
    // const user = await User.create({name, email, password, picture});
    const user = await new User(newUser);
    res.status(201).json({
      message: "Successfully created a user",
      user: user
    })
  }catch(err) {
    let msg;
    if(err.code === 11000){
      msg = "User already exists"
    }else{
      msg = err.message
    }
    console.log(e);
    res.status(400).json(msg);
  }
})

// login User
router.post('login', async(req, res) => {
  try{
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(201).json(user);
  }catch(err) {
    res.status(400).json(err.message)
  }
})
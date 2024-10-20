const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//create a user using: POST "/api/auth/createuser". no login required
router.post('/createuser' ,
  [
    body("email", 'enter a valid email').isEmail(),
    body("name", 'enter a valid name').isLength({ min: 3 }),
    body("password", 'password must be atleast 5 characters').isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors return bad req, and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    //check whether the user with same email exists already
    try{

    
    let user = await User.findOne({email: req.body.email});
    console.log(user)
    if(user){
      return res.status(400).json({error: "Sorry a user with this email already exists."})
    }
    //create a new user
      user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }) 
    
    // .then(user => res.json(user))
    // .catch(err=> console.log(err))
    // res.json({error: 'Please enter unique value for email.'})
    res.json[{user}]
  }     catch (error){
    console.log(error.message);
    res.status(500).send("some error occured");
  }

  })

module.exports = router;

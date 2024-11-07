const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'Mohit$Sen';

// ROUTE 1: create a user using: POST "/api/auth/createuser". no login required
router.post(
  "/createuser",
  [
    body("email", "enter a valid email").isEmail(),
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("password", "password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    //if there are errors return bad req, and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    //check whether the user with same email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "Sorry a user with this email already exists." });
      }

      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);

      //create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      // .then(user => res.json(user))
      // .catch(err=> console.log(err))
      // res.json({error: 'Please enter unique value for email.'})
      
      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      
      // res.json(user)
      success = true;
      res.json({success, authtoken})

    } catch (error) {
      console.log(error.message);
      res.status(500).send("Inrternal Server Error");
    }
  }
);

//ROUTE 2:  Authenticate a user using: POST "/api/auth/createuser". no login required
router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    //if there are errors return bad req, and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try{
      let user = await User.findOne({email});
      if(!user){
        success = false;
        return res.status(400).json({success, error: "Please try to login with correct credentials"});
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        success = false;
        return res.status(400).json({success, error: "Please try to login with correct credentials"});
      }

      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken })


    }catch (error){
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  })


//ROUTE 3:  Authenticate a user using: POST "/api/auth/getuser". Login required
router.post(
  "/getuser", fetchuser,  async (req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
  }  
})

module.exports = router;

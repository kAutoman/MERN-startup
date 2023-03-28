const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const MAX = 673897;
const MIN = 134156;
const backlist = [
  'contact',
  'help',
  'order'
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  check('username', 'Username is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username , email, password } = req.body;
    try {
      let user_email = await User.findOne({ email });
      if (user_email) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      let user_username = await User.findOne({ username });
      if (user_username) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Username already exists' }] });
      }

      // Username blacklist check
      for(let item of backlist){
        if(username == item){
          return res
            .status(400)
              .json({ errors: [{ msg: 'This username is not allowed to use' }] });
        }
      }
      let user = await User.findOne({email});

      const username_created = username + getRandomInt(MIN , MAX);
      user = new User({
        username : username_created,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      //finish register user
      await user.save();

      //start insert profile record

      let profileModel = new Profile({
          user : user.id,
          title : 'Please input title',
          bio : '',
          avatar : 'default.png',
          kp : ''
      });

      await profileModel.save();
      

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token, succss : true, username : user.username});
        }
      );
    
      // }
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);



module.exports = router;

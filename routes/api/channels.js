const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth')
const User = require('../../models/User');
const Channels = require('../../models/Channels');

// Image upload section
// @route    GET api/channels/
// @desc     Get channels list
// @access   Private

router.get('/', auth, async (req, res) => {
  try {
    const channels = await Channels.find({});
    res.json(channels);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
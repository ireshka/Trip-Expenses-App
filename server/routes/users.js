const _ = require('lodash');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { User, validateUser, validateUserOnLogin } = require('../models/user');
const { checkAuthenticated } = require('../middleware/auth');

// User GET route
router.get('/:id', checkAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('username trips');
    res.json(user);
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
});

// Display all trips for user
// for test can use User id: 5e0fc8800785ca060578b375
router.get('/:id/trips', checkAuthenticated, async (req, res) => {
  try {
    const { trips: tripsFromDatabase } = await User.findOne({ _id: req.params.id }).populate(
      'trips',
    );
    return res.status(200).json({ trips: tripsFromDatabase });
  } catch (error) {
    const errorObject = error;
    return res.status(404).json({
      message: errorObject.message,
    });
  }
});

// User login
router.post('/login', async (req, res) => {
  // Todo: better destructuring
  const { error } = validateUserOnLogin(req.body);
  // Todo: correct error handling - development/production
  if (error) return res.status(400).json({ error: error.details[0].message });

  var user = await User.findOne({ username: req.body.username });
  // Todo: change here - there is propably user name only error
  if (!user) return res.status(400).json({ error: `We didn't find user with given username` });

  try {
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: `Invalid password` });
  } catch (err) {
    res.status(400).json('Error: ' + error);
  }

  const token = user.generateAuthToken();
  return res.status(200).header('x-auth-token', token).json({ userId: user._id });
});

// Register new user
// it return error object with message, type, key & value keys
router.post('/', async (req, res, next) => {
  try {
    const { error } = validateUser(req.body);

    if (error) {
      const { details } = error;
      console.log(details);
      const arrayOfErrors = details.map(({ message, type, context }) => {
        const { key, value } = context;
        return {
          message,
          type,
          key,
          value,
        };
      });
      return res.status(400).json({ errorList: arrayOfErrors });
    }

    let user = await User.findOne({
      username: req.body.username,
    });

    if (user) {
      // create errorCreator for post
      return res
        .status(400)
        .json({ errorList: [{ message: 'User already registered', key: 'username' }] });
    }

    let newUser = new User(_.pick(req.body, ['username', 'password']));
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    await newUser.save();
    res.json(_.pick(newUser, ['_id', 'username']));
  } catch (err) {
    next(err);
  }
});

module.exports = router;

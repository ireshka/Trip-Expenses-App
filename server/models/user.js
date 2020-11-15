require('dotenv').config();
const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

// Create schema
const userSchema = new mongoose.Schema({
  username: {
    // todo: Restrict later to alphanumeric
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20,
    trim: true,
    unique: true,
  },
  // email: {
  //   type: String,
  //   required: [true, 'Email is required'],
  //   unique: true,
  //   match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Not a valid email address'],
  //   lowercase: true,
  //   trim: true,
  // },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 500,
    trim: true,
  },
  trips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip',
    },
  ],
});

// Generate webtoken

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.JWT_PRIVATEKEY,
  );
  return token;
};

// Compile schema to a model
const User = mongoose.model('User', userSchema);

const userGeneralSchema = Joi.object({
  // add regexp later
  username: Joi.string().min(4).max(20).messages({
    'any.required': `"username" is a required field`,
    'string.min': `"username" should have minimum length of 4 chars`,
    'string.max': `"username" should have maximal length of 20 chars`,
  }),
  password: Joi.string()
    .min(8)
    .max(24)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&]).{8,1024}$/)
    .messages({
      'any.required': `"password" is a required field`,
      'string.min': `"password" should have minimum length of 8 chars`,
      'string.max': `"password" should have maximum length of 24 chars`,
      'string.pattern.base': `"password" should contain at least one capital, letter, one number, one small letter and one special sign from accepted: ?=.*[!@%#$^&`,
    }), // regex for number/lowercase/capital/special !@#$%^&
}).min(1);

const createUserSchema = userGeneralSchema.options({ presence: 'required' });

// Function will return object with value key and error key (if there is an error)
function validateUser(user) {
  return createUserSchema.validate(user, {
    abortEarly: false,
  });
}

function validateUserOptional(user) {
  return userGeneralSchema.validate(user, {
    abortEarly: false,
  });
}

// User validation for authorization process
// Function will return object with value key and error key (if there is an error)

module.exports = {
  User,
  validateUser,
  validateUserOptional,
};

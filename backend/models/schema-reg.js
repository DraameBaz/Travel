const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

// Method to generate JWT token
userSchema.methods.generateToken = function() {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not set in environment variables");
  }
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        admin: this.admin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d", // Token expiration
        issuer: "your-app-name", // Optional, but useful for claims
        iat: Math.floor(Date.now() / 1000), // Issue time claim
      }
    );
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};

// Method to compare passwords
userSchema.methods.comparePassword = async function(password) {
  try {
   
    return await bcrypt.compare(password, this.password);
   
  } catch (error) {
    console.error("Error comparing password:", error);
    return false;
  }
};

// Middleware to hash the password before saving
userSchema.pre('save', async function(next) {
  const user = this;
  
  if (!user.isModified('password')) {
    return next();
  }

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    
    next();
  } catch (error) {
    console.error("Error hashing password:", error);
    next(error);
  }
});

// Handling unique email errors
userSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('Email already exists, please choose another.'));
  } else {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

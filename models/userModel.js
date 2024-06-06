const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const validator = require("validator")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [0, "Name should have more than 0 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [1, "Password should be greater than 1 characters"],
    select: false,
  }
})

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, 'jwt_secret', {
    expiresIn: 1 * 24 * 60 * 60 * 1000,
  })
}

module.exports = mongoose.model("User", userSchema)
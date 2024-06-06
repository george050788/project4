const User = require("../models/userModel")
const sendToken = require("../utils/JWT")


exports.registerUser = async (req, res, next) => {
  console.log('register : ', req)
  const { name, email, password } = req.body

  const user = await User.create({
    name,
    email,
    password
  })
  console.log('register user : ', user)
  sendToken(user, 201, res)
}

// Login User
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body
  console.log('loginUser user : ', { email, password })
  const user = await User.findOne({ email }).select("+password")
  console.log('loginUser user : ', user)
  if (user) {
    sendToken(user, 200, res)
  }
  else {
    res.json({
      success: false,
      user: 'login information is not found',
    })
  }
}

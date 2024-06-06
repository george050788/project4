const mongoose = require("mongoose")
let EmailSchema = new mongoose.Schema({
  name: String,
  message: String,
  avatar: String,
  personal: Boolean,
  company: Boolean,
  important: Boolean,
  private: Boolean,
  time: String,
})


module.exports = mongoose.model("email", EmailSchema)
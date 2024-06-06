const mongoose = require("mongoose")
const uri = "mongodb+srv://chu0507:Aa0931238018@cluster0.ijc1qlh.mongodb.net/?retryWrites=true&w=majority"

const connectDatabase = () => {
  mongoose
    .connect(uri)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`)
    }).catch((err) => {
      console.log(err.message)
    })
}
module.exports = connectDatabase
const express = require("express")
const cors = require('cors')
const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const Email = require('./routers/emailRoute')
const errorMiddleware = require("./middleware/error")

// cors解决跨域问题
app.use(cors())
app.use(express.json())
// cookieParser handle cookie
app.use(cookieParser())
// bodyParser handle form data
app.use(bodyParser.urlencoded({ extended: true }))

const user = require("./routers/userRoute")
app.use("/api", user)
app.use("/email", Email)
// Middleware for Errors
app.use(errorMiddleware)

module.exports = app
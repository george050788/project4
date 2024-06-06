const app = require("./app")
const connectDatabase = require("./db/config")
const EmailData = require('./controllers/emailController')
// Connecting to database
connectDatabase()
EmailData()

const server = app.listen(8777, () => {
  console.log(`Server is working on http://localhost:8777`)
})
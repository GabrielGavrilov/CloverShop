const config = require("./config")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()

const adminRoutes = require("./routes/admin.routes")
const apiRoutes = require("./routes/api.routes")

mongoose.connect(config.DB_URI)
.then(function() {
    console.log(`[CloverShop]: Successfully connected to the database.`)
})
.catch(function(error) {
    throw new error
})

app.use(cors({
    credentials: true,
    origin: ["http://localhost:8080"]
}))
app.use(express.json())
app.use(cookieParser())

app.use("/admin", adminRoutes)
app.use("/api", apiRoutes)

app.listen(config.PORT, function() {
    console.log(`[CloverShop]: listening on port ${config.PORT}.`)
})
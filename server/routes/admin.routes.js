const express = require("express")
const router = express.Router()
const controller = require("../controllers/admin.controller")

router.post("/category/new", controller.addNewCategory)

module.exports = router
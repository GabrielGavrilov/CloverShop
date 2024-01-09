const express = require("express")
const router = express.Router()
const controller = require("../controllers/api.controller")

router.get("/categories", controller.getAllCategories)

module.exports = router
const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    categoryName: String,
})

const categoryModel = new mongoose.model("category", categorySchema)
module.exports = categoryModel
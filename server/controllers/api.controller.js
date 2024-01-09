const Category = require("../models/category.model")

async function getAllCategories(req, res) {
    const categories = await Category.find({})
    return res.json(categories)
}

module.exports = {
    getAllCategories
}
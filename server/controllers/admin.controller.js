const Category = require("../models/category.model")

async function addNewCategory(req, res) {
    const categoryName = req.body.categoryName
    const categoryExists = await Category.findOne({"categoryName": categoryName})

    if(!categoryExists) {
        const category = new Category({
            categoryName: categoryName
        })

        await category.save()
        .then(function() {
            console.log(`[CloverShop]: Categroy '${categoryName}' has been created.`)
            return res.json({response: `Categroy '${categoryName}' has been created.`})
        })
        .catch(function(err) {
            console.log(err)
            return res.json({response: "There has been an issue creating the category."})
        })
    }

    else {
        return res.json({response: `Category already exists with the name '${categoryName}'`})
    }
}

module.exports = {
    addNewCategory
}


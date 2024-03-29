const express = require("express")
const router = express.Router()
const controller = require("../controllers/admin.controller")
const multer = require("multer")
const path = require("path")

const uploadStorage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, "../client/src/assets/")
    },
    filename: (req, file, cb)=> {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: uploadStorage})

/**
 * Admin POST routes
 */

router.post("/category/new", controller.createNewCategory)
router.post("/category/update", controller.updateCategory)
router.post("/subcategory/new", controller.createNewSubcategory)
router.post("/subcategory/update", controller.updateSubcategory)
router.post("/product/new", upload.single("file"), controller.createNewProduct)
router.post("/product/update", controller.updateProduct)

module.exports = router
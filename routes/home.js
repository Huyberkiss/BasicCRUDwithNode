const express = require('express')
const router = express.Router()
const HomeController = require('../controller/HomeController')

router.get('/', HomeController.index)

router.post('/', HomeController.addNewProduct)

router.get('/add-product', HomeController.addProduct)

router.get('/update-product/:productId', HomeController.updateProduct)

router.put('/:productId', HomeController.update)

router.delete('/:productId', HomeController.delete)




module.exports = router
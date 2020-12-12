
const productModel = require('../models/HomeModel')

class HomeController {

    // [GET] /
    index(req, res) {
        productModel.find()
            .then(product => res.render('index', {
                product: product
            }))
            .catch(err => res.sendStatus(400))
    }

    // [GET] /update-product
    updateProduct(req, res) {
        productModel.findById(req.params.productId)
            .then(product => res.render('update-product', {
                product: product
            }))
    }

    //[GET] //add-product


    addProduct(req, res) {
        res.render('add-product')
    }

    // [POST] /add-product

    async addNewProduct(req, res) {
        try {
            const newProduct = await new productModel({
                name: req.body.name,
                type: req.body.type
            }).save()
            res.redirect('/')
        } catch (error) {
            throw error
        }

    }

    // [POST] /:id
    update(req, res) {
        productModel.updateOne({ _id: req.params.productId }, {
            name: req.body.name,
            type: req.body.type
        })
            .then(doc => res.redirect('/'))
    }


    delete(req, res) {
        productModel.deleteOne({ _id: req.params.productId })
            .then(doc => res.json())
            .catch(err => console.log(err))
    }



}

module.exports = new HomeController()
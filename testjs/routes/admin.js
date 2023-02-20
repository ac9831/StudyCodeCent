const path = require('path')
const express = require('express')
const paroductsController = require('../controllers/products')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', paroductsController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', paroductsController.postAddProduct)

module.exports = router
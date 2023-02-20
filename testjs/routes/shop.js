const path = require('path')

const express = require('express')
const productysController = require('../controllers/products')

const router = express.Router()

router.get('/', productysController.getProducts)

module.exports = router
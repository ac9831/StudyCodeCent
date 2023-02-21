const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCss: true
    })
  })
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCss: true
    })
  })
}

exports.getCart = (req, res, next) => {
  Product.fetchAll(products => {
    res.render()
  })
}
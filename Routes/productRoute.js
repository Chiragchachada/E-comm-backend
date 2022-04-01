const express = require('express');
const { getAllProducts, createProduct, deleteProduct } = require('../Controller/product');

const router = express.Router();


router.route('/')
.get(getAllProducts)
.post(createProduct)

router.route('/:id')
.delete(deleteProduct)

module.exports = router


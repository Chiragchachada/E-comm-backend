const express = require('express');
const { getCartItems, addToCart, deleteItem } = require('../Controller/cart');

const router = express.Router();



router.route('/create')
    .post(addToCart)
    
router.route('/user')
     .post(getCartItems)

router.route('/:id')
    .delete(deleteItem)

module.exports = router


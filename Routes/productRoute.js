const express = require('express');
const { getAllProducts, createProduct, deleteProduct } = require('../Controller/product');
const { authorizeRoles, isAuthenticatedUser } = require('../Middleware/auth');

const router = express.Router();


router.route('/')
    .get(getAllProducts)
    .post([isAuthenticatedUser,authorizeRoles("admin")],createProduct)

router.route('/:id')
    .delete([isAuthenticatedUser,authorizeRoles("admin")], deleteProduct)



module.exports = router


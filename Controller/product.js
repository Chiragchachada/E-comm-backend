const Product = require('../Models/productModel')
const asyncHandler = require('express-async-handler')


<<<<<<< HEAD
exports.getAllProducts =asyncHandler( async (req, res, next) => {
=======
exports.getAllProducts = asyncHandler(async (req, res, next) => {
>>>>>>> 62a9ebe0fe8ca094a23fb6a966ffb7c59a65a1fc

    console.log('getting.. ');

    const products = await Product.find();
    console.log(
        'products',
    );


    res.status(200).json({
        success: true,
        data: products
    })

<<<<<<< HEAD
})

=======
}
)
>>>>>>> 62a9ebe0fe8ca094a23fb6a966ffb7c59a65a1fc
exports.createProduct = asyncHandler(async (req, res, next) => {

    console.log('creating.. ');
    const product = await Product.create(req.body);
    //    res.json(products)

    res.status(200).json({
        success: true,
        data: product
    })

})


exports.deleteProduct = asyncHandler(async (req, res, next) => {
<<<<<<< HEAD
    console.log('Del..')
=======
    console.log('De..')
>>>>>>> 62a9ebe0fe8ca094a23fb6a966ffb7c59a65a1fc
    const products = await Product.findByIdAndDelete(req.params.id, req.body)

    res.status(204).json({
        success: true
    })
<<<<<<< HEAD
})

=======
}
)
>>>>>>> 62a9ebe0fe8ca094a23fb6a966ffb7c59a65a1fc

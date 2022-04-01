const Product = require('../Models/productModel')


exports.getAllProducts = async (req, res, next) => {

    console.log('getting.. ');

    const products = await Product.find();
    console.log(
        'products',
    );
    res.json(products)

    res.status(200).json({
        success: true,
        data: products
    })

}

exports.createProduct = async (req, res, next) => {

    console.log('creating.. ');
    const product = await Product.create(req.body);
    //    res.json(products)

    res.status(200).json({
        success: true,
        data: product
    })

}


exports.deleteProduct = async (req, res, next) => {
    console.log('De..')
    const products = await Product.findByIdAndDelete(req.params.id, req.body)

    res.status(204).json({
        success: true
    })
}

exports.createCartItem = async (req, res, next) => {
    console.log('creating.. ');
    const product = await Product.create(req.body);
    //    res.json(products)

    res.status(200).json({
        success: true,
        data: product
    })

}

exports.getCartItems = async (req, res, next) => {
    console.log('getting.. ');

    const products = await Product.find();
    console.log(
        'products',
    );
    res.json(products)

    res.status(200).json({
        success: true,
        data: products
    })

}

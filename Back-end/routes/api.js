const express = require('express');
const router = express.Router();

const product = require('../controller/Products');


router.get('/listProduct', product.list_all_Products);
router.get('/productDetail', product.read_a_product);
router.get('/listFeatureProduct', product.list_all_FeatureProducts);
router.post('/InsertProduct', product.create_a_product);
router.post('/UpdateProduct', product.update_a_product);
router.post('/DeleteProduct', product.delete_a_product);




module.exports = router;
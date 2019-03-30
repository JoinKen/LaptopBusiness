const express = require('express');
const router = express.Router();

const product = require('../controller/ProductManage');
const employee = require('../controller/EmployeeManage');
const account = require('../controller/AccountManage');

router.get('/listProduct',product.listProduct);
router.post('/InsertProduct',product.InserProduct);
router.post('/UpdateProduct',product.UpdateProduct);
router.post('/DeleteProduct',product.DeleteProduct);

router.get('/listEmployee',employee.listEmployee);
router.post('/InsertEmployee',employee.InsertEmployee);
router.post('/UpdateEmployee',employee.UpdateEmployee);
router.post('/DeleteEmployee',employee.DeleteEmployee);


router.get('/ListAccount',account.ListAccount)
router.post('/RegisterAccount',account.RegisterAccount);
router.post('/DeleteAccount',account.DeleteAccount);


module.exports = router;
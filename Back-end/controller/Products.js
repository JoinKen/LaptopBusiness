var Products = require("../model/ProductM.js");
var mysql = require("../dbconnection.js");

exports.list_all_Products = function (req, res) {
  Products.getAllProduct(function (err, Products) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", Products);
    res.send(Products);

  });
};
exports.get_Comment = function (req, res) {
  Products.Comentproduct(function (err, Products) {
    if (err) res.send(err);
    res.send(Products);
  })
}

exports.create_a_product = function (req, res) {
  var new_product = new Products(req.body);
  console.log("newproduct -----------------", new_product);
  Products.createProduct(new_product, function (err, product) {
    if (err) res.send(err);
    console.log("RES", res);
    res.json(product);
  })
}

exports.read_a_product = function (req, res) {
  console.log("IT1006-req", req.idProduct);
  Products.getProductById(req.query.idProduct, function (err, product) {
    if (err) res.send(err);
    res.json(product);
    console.log(res);
  });
};

exports.update_a_product = function (req, res) {
  // Phải truyền vào như v kh thì dăn lỗi ...
  Products.updateById(req.body.product.idProduct, new Products(req.body.product), function (err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.delete_a_product = function (req, res) {
  mysql.query("DELETE FROM news.Products WHERE idproduct = ?", req.body.idProduct, function (
    err,
    result
  ) {
    if (err) {
      console.log("error: ", err);
      // result(err,null);
      res.send(err);
    } else {
      console.log("DELETE", result);
      //result(null, res);
      res.send(result);
    }
  });
  // Products.remove(req.body.idproduct, function(err, product) {
  //   if (err) res.send(err);
  //   //res.json(product);
  //   res.send(product.idproduct);
  //  //res.json({ message: "DELETE successfully deleted" });
  // });
};



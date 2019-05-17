var Products = require("../model/ProductM.js");
var mysql = require("../dbconnection.js");


exports.list_all_FeatureProducts = function (req, res) {
  //statementType: [FEATURE, ONSALE, BESTRATED, DEAL, or 'null']
  Products.getDealFeatureProduct(req.query.statementType, function (err, Products) {
    if (err) res.send(err);
    res.send(Products);
    console.log(Products);
  });
};

/**LẤy tất cả sản phẩm */
exports.list_all_Products = function (req, res) {
  Products.getAllProduct(function (err, Products) {
    if (err) res.send(err);
    res.send(Products);

  });
};

/**Lấy comment của sản phẩm */
exports.get_Comment = function (req, res) {
  Products.Comentproduct(function (err, Products) {
    if (err) res.send(err);
    res.send(Products);
  })
}

/**Tạo một product và gửi vào body của req */
exports.create_a_product = function (req, res) {
  var new_product = new Products(req.body);
  Products.createProduct(new_product, function (err, product) {
    if (err) res.send(err);
    res.json(product);
  })
}

exports.read_a_product = function (req, res) {
  Products.getProductById(req.query.idProduct, function (err, product) {
    if (err) res.send(err);
    res.json(product);
    console.log(res);
  });
};

exports.update_a_product = function (req, res) {
  // Phải truyền vào như v kh thì dăn lỗi ...
  console.log(req.query.idProduct);
  Products.updateById(req.query.idProduct, new Products(req.body), function (err, product) {
    if (err) res.send(err);
    res.json(product);
    console.log(product);
  });
};

exports.delete_a_product = function (req, res) {
  mysql.query("DELETE FROM laptopbusiness.Products WHERE idProduct = ?", req.query.idProduct, function (
    err,
    result
  ) {
    if (err) {
      console.log("error: ", err);
      res.send(err);
    } else {
      console.log("DELETE", result);
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



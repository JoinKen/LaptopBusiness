var mysql = require("../dbconnection.js");

//Task object constructor
var Products = function (product) {
  this.idProduct = product.idProduct
  this.nameProduct = product.nameProduct;
  this.priceEntered = product.priceEntered;
  this.salePrice = product.salePrice;
  this.dateAdded = product.dateAdded;
  this.amount = product.amount;
  this.describe = product.describe;
  this.type = product.type;
  this.title = product.title;
  this.value = product.value;
  this.soRate = product.soRate;
};

Products.getDealFeatureProduct = function (statementType, result) {
  mysql.query("call laptopbusiness.sp_loadFeatureProcuct(?); ", [statementType], function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res[0]);
    }
  });
};

Products.getAllProduct = function (result) {
  mysql.query("SELECT * FROM laptopbusiness.Product;", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Products.createProduct = function (newproduct, result) {
  var idProduct = newproduct.idProduct;
  var nameProduct = newproduct.nameProduct;
  var priceEntered = newproduct.priceEntered;
  var salePrice = newproduct.salePrice;
  var amount = newproduct.amount;
  var describe = newproduct.describe;
  mysql.query("INSERT INTO `laptopbusiness`.`Product` (`nameProduct`, `priceEntered`, `salePrice`, `amount`, `describe`)   VALUES('" + nameProduct + "', '" + priceEntered + "', '" + salePrice + "', '" + amount + "', '" + describe + "'); ", function (
    err,
    res
  ) {
    if (err) {
      result(err, null);
    }
    else {
      let idProduct = res.insertId;
      mysql.query("SELECT * FROM laptopbusiness.Product WHERE idProduct = ? ;", [idProduct], function (
        error,
        kq
      ) {
        if (error) {
          result(error, null);
        } else {
          result(null, kq);
        }
      });

    }
  });
};

Products.getProductById = function (idProduct, result) {
  mysql.query("SELECT * FROM laptopbusiness.Product WHERE idProduct = ? ;", [idProduct], function (
    err,
    res
  ) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Products.updateById = function (id, product, result) {
  mysql.query(
    "UPDATE laptopbusiness.product SET ? WHERE (idProduct = ?);",
    [product, id],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Products.remove = function (idProduct, result) {
  mysql.query("DELETE FROM laptopbusiness.Product WHERE idProduct = ?", [idProduct], function (
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Products.ComentProduct = function (result) {
  mysql.query("CALL countCommentproduct()", function (err, res) {
    if (err) {
      result(null, err);
    }
    else {
      result(null, res[0]);
    }
  })

}
module.exports = Products;    

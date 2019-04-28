var mysql = require("../dbconnection.js");

//Task object constructor
var Products = function (product) {
  this.nameProduct = product.nameProduct;
  this.priceEntered = product.priceEntered;
  this.salePrice = product.salePrice;
  this.dateAdded = product.dateAdded;
  this.amount = product.amount;
  this.describe = product.describe;
};
Products.getAllProduct = function (result) {
  mysql.query("SELECT * FROM laptopbusiness.Products;", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Products : ", res);
      result(null, res);
    }
  });
};

Products.createProduct = function (newproduct, result) {
  var nameProduct = newproduct.nameProduct;
  var priceEntered = newproduct.priceEntered;
  var salePrice = newproduct.salePrice;
  var amount = newproduct.amount;
  var describe = newproduct.describe;
  mysql.query("INSERT INTO `laptopbusiness`.`Products` (`nameProduct`, `priceEntered`, `salePrice`, `amount`, `describe`)   VALUES('" + nameProduct + "', '" + priceEntered + "', '" + salePrice + "', '" + amount + "', '" + describe + "'); ", function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log("Success");
      let idproduct = res.insertId;
      mysql.query("SELECT * FROM laptopbusiness.Products WHERE idproduct = ? ;", [idproduct], function (
        error,
        kq
      ) {
        if (error) {
          console.log("error: ", error);
          result(error, null);
        } else {
          console.log('aad');
          console.log(kq);
          result(null, kq);
        }
      });

    }
  });
};

Products.getProductById = function (idproduct, result) {
  mysql.query("SELECT * FROM laptopbusiness.Products WHERE idproduct = ? ;", [idproduct], function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);

    }
  });
};
Products.updateById = function (id, product, result) {
  mysql.query(
    "UPDATE laptopbusiness.Products SET ? WHERE (idproduct = ?);",
    [product, id],
    function (err, res) {
      // console.log("IT1006", product);
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Products.remove = function (idproduct, result) {
  mysql.query("DELETE FROM laptopbusiness.Products WHERE idproduct = ?", [idproduct], function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("DELETE", res);
      result(null, res);
    }
  });
};
Products.ComentProduct = function (result) {
  mysql.query("CALL countCommentproduct()", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log("comment : ", res[0]);
      result(null, res[0]);
    }
  })

}
module.exports = Products;    

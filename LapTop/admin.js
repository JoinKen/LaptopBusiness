var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3001);

var mysql = require('mysql');

var config = {
	user: 'root',
	database: 'laptopbusiness',
	password: '123456',
	host: 'localhost',
	port: '3306'
};

var bodyParser = require('body-parser');
var connection = new mysql.createConnection(config); //Kh?i t?o connecttion

app.use(bodyParser.json());
//Quan Ly tai khoan

app.get("/listProduct", function (req, res) {
//Query xu?ng thôi
	connection.query("SELECT * FROM laptopbusiness.product;", function (err, result) {
		if (err) {
//L?i thì tr? ra
			res.end();
			return console.error('error running query', err);
		}
		res.render("products_list.ejs", { sps: result }); //không thì render cho product_list.ejs bi?n sps v?i giá tr? là result(dây là danh saschlasay lên t? mySQL

	});
});

app.post("/themSP", function (req, res) {
	var nameproduct = req.body.txtTenSP;
	var priceenter = req.body.txtpriceenter;
	var saleprice = req.body.txtsaleprice;
	var amount = req.body.txtamount;
	var dateadd = req.body.dateNgayThem;
	var describe = req.body.txtnote_input;
//L?y request t? body - và gán vào  các giá tr?, ? dây chua có d?y d? các thu?c tính c?n thi?t
//C?n ph?i có câu query khác d? insert 2 ho?c 3 b?ng cùng lúc ngan cách nhau b?i d?u ';' là du?c
	connection.query("insert into product ( nameproduct, priceenter, saleprice, amount, dateadd, describe) values ('" + nameproduct + "', '" + priceenter + "', '" + saleprice + "','" + amount + "','" + dateadd + "', '" + describe + "')", function (err, result) {
		if (err) {
			res.end();
			return console.error('error running query', err);
		}
		res.redirect("../listProduct");//chuy?n hu?ng t?i trang pro_list
	});
});




















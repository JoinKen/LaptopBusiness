
const sql = require('mssql')
const config = require('../connect')

exports.listProduct = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`execute [dbo].[All_Product]`)
    }).then(result =>{
        let rows = result.recordset
        res.setHeader('Access-Control-Allow-Origin','*')
        res.status(200).json(rows);
        sql.close();

    }).catch(err =>{
        res.status(200).send({message:`${err}`});
        sql.close();
    })
}
exports.InserProduct = function(req,res,next){
   new sql.ConnectionPool(config).connect().then(pool =>{
       return pool.request().query(`
        execute [dbo].[InsertProduct]
        @_nameProduct = '${req.body.nameProduct}',
        @_priceEntered ='${req.body.priceEntered}',
        @_salePrice = '${req.body.salePrice}',
        @_amount ='${req.body.amount}',
        @_dateAdded='${req.body.dateAdded}',
        @_describe = '${req.body.describe}',
        @_img = '${req.body.img}' 
       `)
   }).then(result =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send({res:true,code: 'Them Thanh Cong',value:{
        nameProduct : req.body.nameProduct,
        priceEntered : req.body.priceEntered,
        salePrice : req.body.salePrice,
        amount : req.body.amount,
        dateAdded : req.body.dateAdded,
        describe : req.body.describe,
        img : req.body.img
     }
    });
   sql.close();
   })
   .catch(err =>{
       console.log(err);
       res.status(200).send({message:`${err}`});
        sql.close();
   })
}
exports.DeleteProduct = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.query(`
        execute [dbo].[DeleteProduct]
        @idProduct = '${req.body.idProduct}'
        `).then(result =>{
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).send({code:'ok',value:{
                idProduct : req.body.idProduct
            }});
            sql.close();
        }).catch(err =>{
            res.status(200).send({message:`${err}`})
            sql.close();
        })
    })

}
exports.UpdateProduct = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.query(`
        execute [dbo].[UpdateProduct]
        @idProduct = '${req.body.idProduct}',
        @nameProduct = '${req.body.nameProduct}',
        @priceEntered ='${req.body.priceEntered}',
        @salePrice = '${req.body.salePrice}',
        @amount ='${req.body.amount}',
        @dateAdded='${req.body.dateAdded}',
        @describe = '${req.body.describe}',
        @img = '${req.body.img}'
       `).then(result =>{
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).send({code:'ok',value:{
            idProduct : req.body.idProduct,
            nameProduct : req.body.nameProduct,
            priceEntered : req.body.priceEntered,
            salePrice : req.body.salePrice,
            amount : req.body.amount,
            dateAdded : req.body.dateAdded,
            describe : req.body.describe,
            img : req.body.img
        }})
        sql.close();
        })
        .catch(err =>{
            res.status(200).send({message:`{err}`})
            sql.close();
       })
    })
}
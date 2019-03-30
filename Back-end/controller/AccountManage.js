
const sql = require('mssql');
const config = require('../connect');
exports.ListAccount = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`select * from Account`)
    }).then(result =>{
        let rows = result.recordset;
        res.setHeader('Access-Control-Allow-Origin','*');
        res.status(200).json(rows);
        sql.close();
    }).catch(err =>{
        console.log(err);
        res.status(200).send({message:`${err}`})
        sql.close();
    })
}
exports.RegisterAccount = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`
        execute [dbo].[registerAccount]
        @phoneNumber = '${req.body.phoneNumber}',
        @email = '${req.body.email}',
        @password ='${req.body.password}',
        @role = '${req.body.role}'
        `).then(result =>{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.status(200).send({code:'ok',value:{
                phoneNumber : req.body.phoneNumber,
                email : req.body.email,
                password : req.body.password,
                role : req.body.role
            }})
            sql.close();
        }).catch(err =>{
            console.log(err);
            res.status(200).send({message:`${err}`})
        })
    })
}

exports.DeleteAccount = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`execute [dbo].[DeleteAccount]
        @idAccount = '${req.body.idAccount}'
        `).then(result =>{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.status(200).send({code:'ok',value:{
                idAccount : req.body.idAccount
            }})
            sql.close();
        }).catch(err =>{
            console.log(err);
            res.status(200).send({message:`${err}`})
        })
    })
}

exports.UpdateAccount = function(req,rest,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`
        execute [dbo].[UpdateAccount]
        @idAccount = '${req.body.idAccount}',
        @phoneNumber = '${req.body.phoneNumber}',
        @email = '${req.body.email}',
        @password ='${req.body.password}',
        @role = '${req.body.role}'
        `).then(result =>{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.status(200).send({code:'ok',value:{
                idAccount : req.body.idAccount,
                phoneNumber : req.body.phoneNumber,
                email : req.body.email,
                password : req.body.password,
                role : req.body.role
            }})
            sql.close();
        }).catch(err =>{
            console.log(err);
            res.status(200).send({message:`${err}`})
        })
    })
}
   
   

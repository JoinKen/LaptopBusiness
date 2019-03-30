

const sql = require('mssql');
const config = require('../connect');

exports.listEmployee = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`select * from Employees`)
        .then(result =>{
            let rows = result.recordset
            res.setHeader('Access-Control-Allow-Origin','*')
            res.status(200).json(rows);
            sql.close()
        }).catch(err =>{
            res.status(200).send({message:`${err}`})
            sql.close();
        })
    })
}
exports.DeleteEmployee = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`execute [dbo].[DeleteEmployee]
        @idEmployee ='${req.body.idEmployee}'
        `).then(result =>{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.status(200).send({code:'Delete Successful !', value:{
                idEmployee : req.body.idEmployee
            }})
            sql.close();
        }).catch(err =>{
            res.status(200).send({message :`${err}`})
            sql.close();
        })
       
    })
}
exports.UpdateEmployee = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`execute [dbo].[UpdateEmployee]
        @idEmployee ='${req.body.idEmployee}',
        @fullName = '${req.body.fullName}',
        @identityCard = '${req.body.identityCard}',
        @birthDay = '${req.body.birthDay}',
        @idAccount = '${req.body.idAccount}'
        `).then(result =>{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.status(200).send({code:'Update Successful!',value:{
                idEmployee : req.body.idEmployee,
                fullName : req.body.fullName,
                identityCard : req.body.identityCard,
                birthDay : req.body.birthDay,
                idAccount :req.body.idAccount
            }})
            sql.close();
            
        }).catch(err =>{
            console.log(err);
            res.status(200).send({message:`${err}`})
            sql.close();
        })
    })
}

exports.InsertEmployee = function(req,res,next){
    new sql.ConnectionPool(config).connect().then(pool =>{
        return pool.request().query(`execute [dbo].[InsertEmployee]
        @fullName = '${req.body.fullName}',
        @identityCard = '${req.body.identityCard}',
        @birthDay = '${req.body.birthDay}',
        @idAccount = '${req.body.idAccount}'
        `).then (result =>{
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).send({code:'Insert successful!',value:{
                fullName : req.body.fullName,
                identityCard : req.body.identityCard,
                birthDay : req.body.birthDay,
                idAccount :req.body.idAccount
            }})
            sql.close();
            }).catch(err =>{
                res.status(200).send({message :`${err}`})
                sql.close();
        })
    })
}
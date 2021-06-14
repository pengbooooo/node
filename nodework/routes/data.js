var mysql = require('mysql');
var data = {};

data.queryParam = function(sql,param,callback){
    var con = mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"123456",
        database:"nodeproject",
        debug:true
    });
    con.query(sql,param,(err,results) =>{
        callback(err,results);
    });
}
data.query = function(sql,callback){
    var con = mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"123456",
        database:"nodeproject",
        debug:true
    });
    con.query(sql,(err,results) =>{
        callback(err,results);
    });
}
module.exports = data;
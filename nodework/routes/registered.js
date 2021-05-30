var express = require('express');
var router = express.Router();
var mysql = require("mysql");
router.get('/', function (req, res) {
    res.render('registered');
});
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "nodeproject"
});
connection.connect();
router.post('/', (req, res) => {
    var insertSql = 'insert into registered(Name,Password) values(?,?)';
    connection.query(insertSql, [req.body.Name, req.body.Password], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.redirect('/login');
        }
    });
});
module.exports = router;
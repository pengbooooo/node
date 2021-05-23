var express = require('express');
var router = express.Router();
// var Usermessage = require('./bean/userMessage');
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


    // var useMessage = new Usermessage(req.body.phone, req.body.password);
    // console.log(useMessage);
    // req.session.userMessage = userMessage;
    // res.redirect('/sign');


    // req.session.Username = req.body.Name;
    // req.session.password = req.body.Password;
    // console.log(req.session.Username);
    // console.log(req.session.password);
    // res.redirect('/login');
    // res.redirect('http://www.baidu.com');
    // 跳转到百度
    var insertSql = 'insert into registered(Name,Password) values(?,?)';
    connection.query(insertSql, [req.body.Name, req.body.Password], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            // return res.redirect('/sign');
            res.redirect('/login');
        }
    });
});
module.exports = router;
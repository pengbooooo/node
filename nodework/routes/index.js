var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
let data = Array();
let pid;
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "nodeproject"
});
connection.connect();
router.get('/', function (req, res, next) {
    var sql = 'select * from connection order by id desc';
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else { res.render('index', { list: result }); }
    });
})
router.get('/del/:id', function (req, res, next) {
    delete data[req.params.id];
    res.redirect('/');
})
router.get('/mod/:id', (req, res) => {
    console.log(data);
    res.render('mod', {obj: data[req.params.id]});
    pid = req.params.id;
    // res.redirect('/');
})
router.post('/mod', (req, res) => {
    let obj = {
        name: req.body.name,
        ch: req.body.ch,
        ma: req.body.ma,
        en: req.body.en,
        am: Number(parseInt(req.body.ch) + parseInt(req.body.ma) + parseInt(req.body.en))
    }
    data[pid] = obj;
    res.redirect('/');
})
router.post('/', (req, res) => {
    var insql = 'insert into admin(name,ch,ma,en) values(?,?,?,?)';
    connection.query(insql, [req.body.name, req.body.ch, req.body.ma, req.body.en], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('index', { list: result });
            res.redirect('/');
        }
    });
})
router.post("/nextPage",(req,res)=>{})
module.exports = router;
// const { text } = require('express');
// var express = require('express');
// var router = express.Router();
// var db = require('./db/db');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     db.sql("select * from admin_table ",(err,rows) =>{
//       // res.render('index',{data:rows})
//       console.log(err);
//       console.log(rows);
//     })
//     res.render(text);
// });

// module.exports = router;
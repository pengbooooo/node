var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var db = require('./db/db');
var data = require('./data');


router.get('/',function(req,res,next){
  data.query("select * from comment_table order by id desc",(err,result) =>{
      res.render('blog2',{data:result});
  });
});
router.post('/',(req,res) =>{
  data.queryParam("insert into comment_table(name,time,detail) value(?,?,?)",[req.body.name,req.body.time,req.body.detail],(err,result) =>{
      res.redirect('/blog2');
  })
})
// router.post('/blog2',(req,res) =>{
//   data.queryParam("insert into comment_table(id,name,time,detail) value(?,?,?,?)",[req.body.id,req.body.name,req.body.time,req.body.detail],(err,result) =>{
//       res.render('article',{data:result});
//   });
// });
// })
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "nodeproject"
// });
// connection.connect();
// router.post('/', (req, res) => {
//     var insertSql = 'insert into comment_table(name,detail,time) values(?,?,?)';
//     connection.query(insertSql, [req.body.name, req.body.detail,req.body.time], function (err, result, fields) {
//         if (err) {
//             console.log('err', err);
//             return;
//         } else {
//             res.redirect('/blog2');
//         }
//     });
// });
// router.get('/blog2', function(req, res, next) {
//   db.sqlParam('select * from article_table order by id desc',(err,rows) =>{
//     res.render('article',{data:rows});
//   })
// });
module.exports = router;
var express = require('express');
var router = express.Router();
var db = require('./db/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  db.sql('select * from admin_table order by id desc',(err,rows) =>{
    res.render('text',{data:rows});
  })
});
router.get('/add',(req,res)=>{
  if(req.query.id !=undefined){
        db.sqlParam("select * from admin_table where id = ?",[req.query.id],(err,row) =>{
          res.render('add',{row:row[0]});
        })
  }else{
        res.render('add');
  }
});
router.post('/add',(req,res) =>{
  db.sqlParam("insert into admin_table(name,ch,ma,en) values(?,?,?,?)",[
    req.body.name,
    req.body.ch,
    req.body.ma,
    req.body.en,
  ],(err,rows) =>{
    // console.log(err);
    // console.log(rows);
    res.redirect("/text");
  })
})
module.exports = router;
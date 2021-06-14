var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var data = require('./data');


/* GET home page. */
router.get('/',function(req,res,next){
  data.query("select * from article_table order by id desc",(err,result) =>{
      res.render('blog',{data:result});
  });
});
router.post('/',(req,res) =>{
  data.queryParam("select * from article_table where userName=?",[req.body.userName],(err,result) =>{
      res.render('blog',{data:result});
  });
});
module.exports = router;
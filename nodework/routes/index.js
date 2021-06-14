
var express = require('express');
var router = express.Router();
var data = require('./data');

router.get('/',function(req,res,next){
    data.query("select * from article_table",(err,result) =>{
        res.render('article',{data:result});
    });
});

router.post('/',(req,res) =>{
    data.queryParam("select * from article_table where id=? or yourarticle=? or userName=?",[req.body.search,req.body.search,req.body.search],(err,result) =>{
        res.render('article',{data:result});
    });
});

router.get('/add_art',(req,res) => {
    res.render('add_art');
})

router.post('/article/add_art',(req,res) =>{
    data.queryParam("insert into article_table(id,userName,yourarticle) value(?,?,?)",[req.body.id,req.body.userName,req.body.yourarticle],(err,result) =>{
        res.redirect('/article');
    })
})
router.get('/add_com',(req,res) => {
    res.render('add_com');
  })
  
  router.post('/comment/add_com',(req,res) =>{
    data.queryParam("insert into comment_table(id,name,time,detail) value(?,?,?,?)",[req.body.id,req.body.name,req.body.time,req.body.detail],(err,result) =>{
        res.redirect('/comment');
    })
  })
module.exports = router;
var express = require('express');
var router = express.Router();
var db = require('./db/db');
var data = require('./data');

router.get('/',function(req,res,next){
    data.query("select * from article_table order by id desc",(err,result) =>{
        res.render('article',{data:result});
    });
});

router.post('/',(req,res) =>{
    data.queryParam("select * from article_table where id=? or yourarticle=? or userName=?",[req.body.id,req.body.userName,req.body.yourarticle],(err,result) =>{
        res.render('article',{data:result});
    });
});
router.get('/update/:id',(req,res)=>{
  data.queryParam("select * from article_table where id = ?",[req.params.id],(err,result)=>{
    res.render('update',{obj:result[0]});
  })
})
router.post('/update',(req,res) =>{
  data.queryParam("update article_table set userName=? , yourarticle=? where id = ?",[req.body.userName,req.body.yourarticle,req.body.id],(err,result)=>{
    res.redirect('/article');
  })
})
router.get('/:id',(req,res)=>{
  data.queryParam("delete from article_table where id = ?",[req.params.id],(err,result)=>{
    res.redirect('/article')
  })
})
// router.get('/article',(req,res)=>{
//   if(req.query.id !=undefined){
//         // db.sqlParam("select * from admin_table where id = ?",[req.query.id],(err,row) =>{
//           db.sqlParam("select * from article_table where id = ?",[req.query.id],(err,row) =>{

//           res.render('article',{row:row[0]});
//         })
//   }else{
//         res.render('article');
//   }
// });
// router.post('/article',(req,res) =>{
//   // db.sqlParam("insert into admin_table(name,ch,ma,en) values(?,?,?,?)",[
//     db.sqlParam("insert into article_table(name,img,time,detail) values(?,?,?,?)",[
//     req.body.name,
//     req.body.img,
//     req.body.time,
//     req.body.detail
//   ],(err,rows) =>{
//     // console.log(err);
//     // console.log(rows);
//     res.redirect("/article");
//   })
// })
module.exports = router;
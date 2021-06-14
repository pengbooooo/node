var express = require('express');
var router = express.Router();
var db = require('./db/db');
var data = require('./data');

/* GET home page. */
router.get('/',function(req,res,next){
  data.query("select * from comment_table order by id desc",(err,result) =>{
      res.render('comment',{data:result});
  });
});

router.post('/',(req,res) =>{
  data.queryParam("select * from comment_table where id=? or name=? or detail=? or time=?",[req.body.id,req.body.name,req.body.detail,req.body.time],(err,result) =>{
      res.render('comment',{data:result});
  });
});
router.get('/update_com/:id',(req,res)=>{
  data.queryParam("select * from comment_table where id = ?",[req.params.id],(err,result)=>{
    res.render('update_com',{object:result[0]});
  })
})
router.post('/update_com',(req,res) =>{
  data.queryParam("update comment_table set name=? , detail=?,time=? where id = ?",[req.body.name,req.body.detail,req.body.time,req.body.id],(err,result)=>{
    res.redirect('/comment');
  })
})
router.get('/:id',(req,res)=>{
  data.queryParam("delete from comment_table where id = ?",[req.params.id],(err,result)=>{
    res.redirect('/comment')
  })
})
// router.get('/comment',(req,res)=>{
//   if(req.query.id !=undefined){
//         // db.sqlParam("select * from admin_table where id = ?",[req.query.id],(err,row) =>{
//           db.sqlParam("select * from comment_table where id = ?",[req.query.id],(err,row) =>{

//           res.render('comment',{row:row[0]});
//         })
//   }else{
//         res.render('comment');
//   }
// });
// router.post('/comment',(req,res) =>{
//   // db.sqlParam("insert into admin_table(name,ch,ma,en) values(?,?,?,?)",[
//     db.sqlParam("insert into comment_table(name,img,time,detail) values(?,?,?,?)",[
//     req.body.name,
//     req.body.img,
//     req.body.time,
//     req.body.detail
//   ],(err,rows) =>{
//     // console.log(err);
//     // console.log(rows);
//     res.redirect("/comment");
//   })
// })
module.exports = router;
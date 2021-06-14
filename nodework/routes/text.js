var express = require('express');
var router = express.Router();
var db = require('./db/db');
var data = require('./data');

/* GET home page. */
router.get('/',function(req,res,next){
  data.query("select * from registered order by id desc",(err,result) =>{
      res.render('text',{data:result});
  });
});

router.post('/',(req,res) =>{
  data.queryParam("select * from registered where id=? or name=? or password=?",[req.body.id,req.body.name,req.body.password],(err,result) =>{
      res.render('text',{data:result});
  });
});
// ------------------------------------------------------------------------
router.get('/update_text/:id',(req,res)=>{
  data.queryParam("select * from registered where id = ?",[req.params.id],(err,result)=>{
    res.render('update_text',{obj:result[0]});
  })
})
router.post('/update_text',(req,res) =>{
  data.queryParam("update registered set name=? , password=? where id = ?",[req.body.name,req.body.password,req.body.id],(err,result)=>{
    res.redirect('/text');
  })
})
// ---------------------------------------------------------------------------------
router.get('/:id',(req,res)=>{
  data.queryParam("delete from registered where id = ?",[req.params.id],(err,result)=>{
    res.redirect('/text')
  })
})
// router.get('/delete',(req,res)=>{
//   if(req.query.id !=undefined){
//         // db.sqlParam("select * from admin_table where id = ?",[req.query.id],(err,row) =>{
//           db.sqlParam("select * from registered where id = ?",[req.query.id],(err,row) =>{

//           res.render('delete',{row:row[0]});
//         })
//   }else{
//         res.render('delete');
//   }
// });
// router.post('/delete',(req,res) =>{
//   // db.sqlParam("insert into admin_table(name,ch,ma,en) values(?,?,?,?)",[
//     db.sqlParam("delete from registered WHERE id=?;",[
//     req.body.id,

//   ],(err,rows) =>{
//     // console.log(err);
//     // console.log(rows);
//     res.redirect("/text");
//   })
// })
module.exports = router;
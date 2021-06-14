var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "Nodeproject"
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', (req, res) => {


  // var loginPhone = req.body.loginPhone;
  // var loginPassword = req.body.loginPassword;
  // if (req.session.user != undefined
  //     && loginPhone == req.session.useMessage.phone
  //     && loginPassword == req.session.useMessage.password) {
  //     res.send("登录成功")
  // } else {
  //     res.send('手机号或密码错误，登录失败')
  // }

  // if (req.body.Name == req.session.Username && req.body.Password == req.session.password) {
  //     // res.send("登录成功")
  //     res.send('用户名或密码错误，登录失败');
  // } else {
  //     res.render('home');
  // }
  // console.log(req.body.Name);
  // console.log(req.body.Password);
  var selectSQL = "select name,password from registered where name = '" + req.body.name + "' and password = " +"'"+ req.body.password + "'";
  connection.query(selectSQL, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
      } else {
          // results = JSON.stringify(result);
          if (result == '') {
              res.send('登录失败');
          }
          else {
              res.render('home')
          }
      }
  });
});
module.exports = router;
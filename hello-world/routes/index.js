var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/*model出口的user*/
//var user = require('../models/user').user;
//
var Schema = mongoose.Schema;
var userScheMa = new Schema({ //数据属性模型：定义数据结构,无法直接操作数据库
    userid: String,
    password: String
},{
    versionKey: false //不要版本key
});
var User = mongoose.model('users', userScheMa);
//
mongoose.connect('mongodb://localhost/hello-world');
//检验连接
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
  console.log('connection ok');
 /* var User = new user({
    userid:'test-hello',
    password:'123456'
  });
  User.save(function(err){
        if(err){
          console.log(err);
        }
  });*/
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '首页' });
});

/*login*/
router.get('/login', function(req, res) {
  res.render('login', { title: '登录' });
});

/*logout*/
router.get('/logout', function(req, res) {
  res.render('logout', { title: '登出' });
});
/*router.get('/homepage', function(req, res) {
  res.render('homepage', { title: '登出' });
});*/
/*提交表单到hompage*/
router.post('/homepage', function(req, res) {
  var query_doc = {userid: req.body.userid, password: req.body.password};
  (function(){
    /*user即前面Model的user*/
    /*操作数据库前必须先实例化一个Model的user*/
      //var User = new user();
    /*返回符合条件的文档数。 Model.count(conditions, callback);*/

    User.count(query_doc, function(err, doc){
      if(doc == 1){//找到输入的用户记录进入homepage
        console.log(query_doc.userid + ": login success in " + new Date());
        res.render('homepage', { title: '主页' });
      }else{
        console.log(query_doc.userid + ": login failed in " + new Date());
        res.redirect('/');
      }
    });
  })(query_doc);
});

module.exports = router;
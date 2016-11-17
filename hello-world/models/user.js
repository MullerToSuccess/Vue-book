/*mongoose：mongoDB的对象模型工具*/
/*三个属性：Schema, Model, Entity*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userScheMa = new Schema({ //数据属性模型：定义数据结构,无法直接操作数据库
    userid: String,
    password: String
},{
    versionKey: false //不要版本key
});
exports.user = mongoose.model('users', userScheMa);//由Schema构造生成的模型，对数据库进行操作

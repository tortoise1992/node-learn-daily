/**
 * Created by Administrator on 2017/3/16.
 */
var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blog');
// var db=mongoose.connection;
// var Schema=mongoose.Schema;
// var objId=Schema.ObjectId;
// var UserSchema=new Schema({
//     user:objId,
//     name:String,
//     age:Number,
//     desc:String
// })

// var dbInfo=mongoose.connection;
// dbInfo.on('connected',function () {
//     console.log('数据库链接成功');
// })
//
var Schema=mongoose.Schema;
var testSchema=new Schema({
    username:String,
    userpwd:String,
    userage:Number,
    lastlogin:Date
})

var User=mongoose.model('User',testSchema);

// var a=new User({
//     username:'ahui',
//     userpwd:'123456',
//     userage:24,
//     lastlogin:new Date()
// })
//
// a.save(function (err,res) {
//     if(err) throw err;
//     console.log(res);
// })

// 修改数据库
// User.update({username:'ahui'},{userpwd:'abcdef'},function (err) {
//     console.log('修改成功')
// })
// for(var i=0;i<10;i++){
//     var temp=new User({
//         username:'fkalkfahhf',
//         userpwd:Math.random()*i,
//         userage:i,
//         lastlogin:new Date()
//     })
//     temp.save(function (err) {
//         if(err) throw err;
//         console.log('保存完毕')
//     })
// }

// 条件查询判断并显示密码字段，不显示id字段
// User.find({userage:5},{userpwd:1,_id:0},function (err,res) {
//     console.log(res)
// })


// User.find({userage:{$gte:2,$lte:7}},function (err,res) {
//    console.log(res)
// })

// 空白对象传入查询全部数据
// User.count({},function (err,res) {
//     console.log(res)
// })
// User.find({},function (err,res) {
//     console.log(res)
// })

// 分页查询
function getByPager(){

    var pageSize = 5;                   //一页多少条
    var currentPage = 1;                //当前第几页
    var sort = {'logindate':-1};        //排序（按登录时间倒序）
    var condition = {};                 //条件
    var skipnum = (currentPage - 1) * pageSize;   //跳过数

    User.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
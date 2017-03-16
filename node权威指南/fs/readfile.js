/**
 * Created by Administrator on 2017/3/16.
 */
var fs=require('fs');
// fs.readFile('./test.txt','utf-8',function (err,data) {
//     if(err) console.log('读取文件错误')
//     console.log(data)
// })

// var buf=new Buffer('zai lai yi tiao');
// var options={
//     flag:'a'
// }
// fs.writeFile('./message.txt',buf,options,function (err) {
//     console.log('写入成功')
// })

// // 复制一张图片
// fs.readFile('./1.jpg',function (err,data) {
//     if(err) throw err;
//     fs.writeFile('./test.png',data,function (err) {
//         if(err) throw err;
//         console.log('图片复制成功');
//     })
// })

// 创建目录
// fs.mkdir('./test',function (err) {
//     console.log('创建目录成功')
// })

// fs.readdir(__dirname,function (err,files) {
//     fs.stat(__dirname+'/'+files[0],function (err,stat) {
//         console.log(stat)
//     })
// })

// 流读取文件
var file=fs.createReadStream('./1.jpg');
file.on('open',function (fd) {
    console.log('开始读取文件')
})
file.on('data',function (data) {
    console.log('有数据读取了')
})

file.on('end',function () {
    console.log('读取完毕')
})
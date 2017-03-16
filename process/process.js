/**
 * Created by Administrator on 2017/3/15.
 */
// var fs=require('fs');
// var stream=fs.createReadStream('./a.txt');
// var str='';
// stream.on('data',function (chunk) {
//     str+=chunk;
//     console.log(str);
// })
// stream.on('end',function () {
//     console.log('end');
// })

var fs=require('fs');
var files=fs.readdirSync(__dirname);
files.forEach(function (file) {
    if(/.css$/.test(file)){
        fs.watchFile(__dirname+'/'+file,function () {
            console.log('---'+file+'changed')
        })
    }
})
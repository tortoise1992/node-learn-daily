/**
 * Created by Administrator on 2017/3/15.
 */
var fs=require('fs');
var path=require('path');
var pathName=process.cwd();
var stdOut=process.stdout;
var stdIn=process.stdin;

fs.readdir(pathName,function (err,files) {
    list(files);
    stdIn.on('data',function (data) {
        var num=Number(data.toString());
        console.log('正在为你打开文件...');
        // console.log(pathName+'/'+files[num])
        fs.readFile(path.join(pathName,files[num]),function (err,data) {
            if (err) throw err
            console.log(data.toString())
        })

    })
})

function list(files) {
    if(!files.length){
        console.log('当前目录为空')
    }else {
        console.log('请选择要查看的文件:')
    }
    files.forEach(function (filename,index) {
        // console.log(index+'---->'+filename);
        fs.stat(pathName+'/'+filename,function (err,stat) {
            if(stat.isDirectory()){
                console.log(index+'---->/'+filename);
            }else {
                console.log(index+'---->'+filename);
            }
        })
    })
}

// 判断延迟加载的函数
// function isLoad(ele) {
//     var st = $(this).scrollTop();
//     var win = $(this).height();
//     $(ele).each(function() {
//         var ot = $(this).offset().top;
//         if(ot <= (st + win)) {
//             if(!(typeof $(this).find('img').attr('lay-src')==='undefined')) {
//                 var imgurl = $(this).find('img').attr('lay-src');
//                 $(this).find('img').removeAttr('lay-src');
//                 $(this).find('img').attr('src', imgurl);
//             } else {
//
//             }
//
//         } else {
//             return false;
//         }
//     })

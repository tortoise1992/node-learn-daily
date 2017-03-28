/**
 * Created by Administrator on 2017/3/28.
 */
// function fact(n) {
//     if(n==1){
//         return 1;
//     }else {
//         return n*fact(n-1);
//     }
// }
//
// console.log(fact(6))
var fs=require('fs');
var path=require('path');
function travel(dir,cb) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname=path.resolve(dir,file);
        if(fs.statSync(pathname).isDirectory()){
            // console.log(pathname+'is a dir')
            travel(pathname,cb)
        }else {
            cb(pathname);
        }
    })
}

travel(__dirname,function (pathname) {
    console.log(pathname)
})
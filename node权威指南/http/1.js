/**
 * Created by Administrator on 2017/3/16.
 */
var http=require('http');
var fs=require('fs');
var server=http.createServer(function (req,res) {
    // console.log(req.url)

    // 判断需要加括号包起来
    if(!(req.url == '/favicon.ico')){
        // var out=fs.createWriteStream('info.log');
        // out.write('客户端打开的方法是'+req.method);
        // out.write('客户端打开的url是'+req.url);
        // out.write('客户端的请求头是'+JSON.stringify(req.headers));
        // out.end('完毕');

        req.on('data',function (data) {
            console.log(data)
        })
        req.on('end',function (err) {
            console.log('文件接收完毕')
        })
    }

    res.end();
})

server.listen(3000);
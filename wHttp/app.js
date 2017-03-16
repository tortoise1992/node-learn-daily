/**
 * Created by Administrator on 2017/3/15.
 */
var http=require('http');
var server=http.createServer(function (req,res) {
    res.writeHead(200);
    res.end('hello world')
})
server.listen(4000);


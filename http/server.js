/**
 * Created by Administrator on 2017/3/14.
 */
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var server=http.createServer(function (req,res) {
    var pathname=req.url;
    res.setHeader('content-type',mime.lookup(__dirname+req.url));
    fs.readFile(__dirname+req.url,function (err,data) {
        if(err) throw err;
        res.end(data);
    })


});

server.listen(3000);


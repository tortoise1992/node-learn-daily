/**
 * Created by Administrator on 2017/3/15.
 */
var http=require('http');
var server=http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<form method="post" action="/url">' +
        '<p>请输入你的名字：</p>' +
        '<input type="text" name="name">' +
        '<p><button>提交</button></p>' +
        '</form>')
})

server.listen(3000);
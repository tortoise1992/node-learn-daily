/**
 * Created by ahui on 2017/3/28.
 */
var express=require('express');
var superagent=require('superagent');
var cheerio=require('cheerio');
var app=express();

app.get('/',function (req,res,next) {
    superagent.get('https://cnodejs.org/').end(function (err,sres) {
        if(err) return next(err);
        var $=cheerio.load(sres.text);
        var items=[];
        $('#topic_list .cell').each(function (index,ele) {
            var $ele=$(ele);
            items.push({
                title:$ele.find('.topic_title').text(),
                author:$ele.find('.put_top').text()
            })
        })
        res.send(items);
    })
});

app.listen(3000,function () {
    console.log('server is runing')
})
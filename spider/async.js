/**
 * Created by ahui on 2017/3/28.
 */
var express=require('express');
var superagent=require('superagent');
var cheerio=require('cheerio');
var url=require('url');
var app=express();
var eventproxy=require('eventproxy');
var ep=new eventproxy();
var async=require('async');
var cnodeUrl='https://cnodejs.org/';
app.get('/',function (req,res,next) {
    superagent.get(cnodeUrl).end(function (err,sres) {
        if(err) return next(err);
        var $=cheerio.load(sres.text);
        var topicUrls=[];
        $('#topic_list .topic_title').each(function (index,ele) {
            var $ele=$(ele);
            var href = url.resolve(cnodeUrl, $ele.attr('href'));
            topicUrls.push(href);
        })
        console.log(topicUrls);
        async.mapLimit(topicUrls,5,function (url,cp) {
            fetchUrl(url,cp)
        },function (err,ssres) {
            // console.log('查询完毕了'+ssres)
            res.send(ssres);
        })
    })
});

app.listen(3000,function () {
    console.log('server is runing')
})

function fetchUrl(myurl,callback) {
    var fetchStart = new Date().getTime();
    superagent.get(myurl).end(function(err, ssres) {
        if (err) {
            callback(err, myurl + ' error happened!');
        }
        var time = new Date().getTime() - fetchStart;
        console.log('抓取 ' + myurl + ' 成功', '，耗时' + time + '毫秒');
        // concurrencyCount--;

        var $ = cheerio.load(ssres.text);
        var reslut = {
            title: $('.topic_full_title').text().trim()

        };
        callback(null, reslut);

    })
}

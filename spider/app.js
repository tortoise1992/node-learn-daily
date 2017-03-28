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
        ep.after('topic',topicUrls.length,function (topics) {
            topics=topics.map(function (pair) {
                var topicUrl = pair[0];
                var topicHtml = pair[1];
                var $ = cheerio.load(topicHtml);
                return ({
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    comment1: $('.reply_content').eq(0).text().trim(),
                });
            })
            console.log('final:');
            console.log(topics);
            res.send(topics);
        })

        topicUrls.forEach(function (topicUrl) {
            superagent.get(topicUrl)
            .end(function (err, res) {
                console.log('fetch ' + topicUrl + ' successful');
                ep.emit('topic', [topicUrl, res.text]);
            });
        });
    })
});

app.listen(3000,function () {
    console.log('server is runing')
})
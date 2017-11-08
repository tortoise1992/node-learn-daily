/**
 * Created by Administrator on 2017/11/8.
 */
var cheerio=require('cheerio')
var http=require('http')
var fs=require('fs')
var path=require('path')
function downLoad(url,cb) {
    http.get(url,function (res) {
        res.setEncoding('binary')
        var data="";
        res.on('data',function (chunk) {
            data +=chunk
        })

        res.on('end',function () {
            cb(data)
        })
    }).on('error',function () {
        cb(null)
    })
}

function savePic(url) {
    var index=url.lastIndexOf('/');
    var filename=url.substring(index+1)+'.jpg'
    downLoad(url,function (data) {
        console.log(filename+'下载中')
        fs.writeFileSync('./download/'+filename,data,"binary")
        console.log(filename+'下载完毕')
    })
}

var baseUrl='http://list.youku.com/category/show/c_97_g_%E6%AD%A6%E4%BE%A0_s_1_d_1.html?spm=a2htv.20009910.m_86809.5~5~5!2~1~3!2~A';

downLoad(baseUrl,function (data) {
    if(data){
        var $=cheerio.load(data)
        $('.box-series .yk-col4').each(function () {
            var url=$(this).find('.quic').attr('_src')
            // console.log(url)
            savePic(url)
        })

        console.log('done')
    }else {
        console.log('error')
    }
})


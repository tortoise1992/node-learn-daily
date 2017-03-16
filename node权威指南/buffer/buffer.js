/**
 * Created by Administrator on 2017/3/16.
 */
var buf=new Buffer(30);
console.log(buf)
buf.fill(1,10)
console.log(buf)
buf.fill(2,20,30)
console.log(buf)
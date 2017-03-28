/**
 * Created by Administrator on 2017/3/16.
 */
var EventEmitter=require('events').EventEmitter;
var ee=new EventEmitter();
// console.log(ee)

ee.on('test',function (name) {
    console.log('事件监听开始了'+name);
})

console.log('第一轮')
ee.emit('test','ahui')

console.log('第二轮')
ee.emit('test','zhouqinghui')
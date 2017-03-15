/**
 * Created by ahui on 2017/3/15.
 */
function Event() {
    this._enents={};
}

Event.prototype.on=function (eventname,listener) {
    if(this._enents[eventname]){

    }else {
        this._enents[eventname]=[listener];
    }
}

Event.prototype.emit=function (eventname) {
    var len=this._enents[eventname].length;
    for(var i=0;i<len;i++){
        this
    }
}
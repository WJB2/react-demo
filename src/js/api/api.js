/**
 * Created by MACHENIKE on 2017/2/19.
 */



let Products = [
        {id:1,name:'ipad',price:2000,num:2},
        {id:2,name:'ipad2',price:3000,num:1},
        {id:3,name:'ipad3',price:4000,num:4},
        {id:4,name:'ipad4',price:5000,num:6},
    ]






export default {
    getProducts(){
        return new Promise((resolve,rejected)=>{
            setTimeout(function(){
                let  a = JSON.parse(JSON.stringify(Products));
                resolve(a)
            },1000)
        })


    }

}



Object.prototype.clone = function () {
    var o = {};
    for (var i in this) {
        o[i] = this[i];
    }
    return o;
};
Array.prototype.clone = function () {
    var arr = [];
    for (var i = 0; i < this.length; i++)
        if (typeof this[i] !== 'object') {
            arr.push(this[i]);
        } else {
            arr.push(this[i].clone());
        }
    return arr;
};

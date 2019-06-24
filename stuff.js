var counter = function(Arr){
    return 'there are '+ Arr.length+' elements in this array';

}

var adder=function(a,b){
    return `the sum of two numbers is ${a+b}`;
}
var pi =3.142;

module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;
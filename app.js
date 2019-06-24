//var stuff = require('./stuff');
//console.log(stuff.counter(['manu','sharma','shivam']));
//console.log(stuff.adder(5,4));
//console.log(stuff.adder(stuff.pi,3));

// var events = require('events');
// var myemitter = new events.EventEmitter();

// myemitter.on('some event', function(msg){
//      console.log(msg);
// });

// myemitter.emit('some event', 'hi my name is manu');
var events = require('events');
var util = require('util');

var person= function(name){
    this.name=name;
}

util.inherits(person,events.EventEmitter);
 var manu = new person('manu');
 var sharma = new person('sharma');
 var cristiano = new person('cristiano');
 var people = [manu,sharma,cristiano];

 people.forEach(function(person){
     person.on('speak',function(msg){
         console.log(person.name+' said: '+msg)
     });
 });

 manu.emit('speak','hi my name is manu');
 sharma.emit('speak','hi my name is sharma');
 cristiano.emit('speak','hi my name is cristiano');


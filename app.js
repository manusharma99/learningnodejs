/*######module######*/
//var stuff = require('./stuff');
//console.log(stuff.counter(['manu','sharma','shivam']));
//console.log(stuff.adder(5,4));
//console.log(stuff.adder(stuff.pi,3));

/*######event emitter######*/
// var events = require('events');
// var myemitter = new events.EventEmitter();

// myemitter.on('some event', function(msg){
//      console.log(msg);
// });

// myemitter.emit('some event', 'hi my name is manu');
// var events = require('events');
// var util = require('util');

/*######util module######*/
// var person= function(name){
//     this.name=name;
// }
// util.inherits(person,events.EventEmitter);
//  var manu = new person('manu');
//  var sharma = new person('sharma');
//  var cristiano = new person('cristiano');
//  var people = [manu,sharma,cristiano];

//  people.forEach(function(person){
//      person.on('speak',function(msg){
//          console.log(person.name+' said: '+msg)
//      });
//  });

//  manu.emit('speak','hi my name is manu');
//  sharma.emit('speak','hi my name is sharma');
//  cristiano.emit('speak','hi my name is cristiano');

/*######read and write file######*/
// var fs = require('fs');

//  var readme = fs.readFileSync('readme.txt','utf8');
// console.log(readme);
// fs.writeFileSync('writefile.txt', readme);

// var fs = require('fs');
// fs.readFile('readme.txt','utf8', function(err,dt)
// {
//     fs.writeFile('filewritten.txt', dt, function(err,rseult){
//         if (err)
//         {
//             console.log('error',err)
//         }
//     });
// });

/*######delete and create directories######*/
// var fs = require('fs');
// fs.unlink('filewritten.txt',function(err,result){
//     if (err)
//     {
//         console.log('error',err);
//     }
// });

//var fs = require('fs');

// fs.mkdir ('stuff',function(err,result){
//          if (err)
//          {
//              console.log('error',err);
//          }});

// 
// fs.mkdir ('stuff',function(err,result){
//     if (err)
//     {
//         console.log('error',err);
//     }});       

//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

// fs.mkdir('stuff',function(){
//     fs.readFile('readme.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writtenme.txt',data,function(err,result){
//             if (err)
//             {
//                 console.log('error',err);
//             }
//         });
//     });
// });

// fs.unlink('./stuff/writtenme.txt',function(){
//     fs.rmdir('stuff',function(err,data){
//         if (err)
//         {
//             console.log('error',err);
//         }
//     })
// });

/*######creating server######*/
// var http = require('http');

// var server = http.createServer(function(req,res){
//     console.log('request was made: '+req.url);
//     res.writeHead(200,{'content-Type':'text/plain'})
//     res.end('hey manu');
// });

// server.listen(3000,'127.0.0.1');
// console.log('yo imma listening');

/*######readable stream#####*/
//var fs = require('fs');
//var http = require('http');
// var mystreamread = fs.createReadStream(__dirname + '/readme.txt','utf8');

// mystreamread.on('data',function(chunk){
// console.log('new chunk recieved: ');
// console.log(chunk);
// });

/*#######writable stream ######*/

// var fs = require('fs');
// var http = require('http');
//  var mystreamread = fs.createReadStream(__dirname + '/readme.txt','utf8');
// var mywritestream = fs.createWriteStream(__dirname + '/write.txt');
//  mystreamread.on('data',function(chunk){
//  console.log('new chunk recieved: ');
//  mywritestream.write(chunk);
// });

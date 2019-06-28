/*###### template engine#######*/ 
var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/profile/:name', function(req,res){
    var data= ({age:29 ,surname:'sharma', hobbies :['working','eating','sleeping','repeat']});
    res.render('profile', {person: req.params.name , data : data });
});
app.listen(3000);
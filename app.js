var express=require('express');
var exphbs=require('express-handlebars');
var routes=require('./routes/route.js');

var app=express();

app.use(express.static(__dirname + '/public'));

//set handlebars as view engine
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout:'main'}));

//route for home
app.get('/',routes.home);

//route for city
app.get('/:city',routes.city);

//run on port 8080
var port = process.env.PORT || 4000;

//spin up the server
var server=app.listen(port,function(req,res){
    console.log('Server running at http://localhost:'+port);
});

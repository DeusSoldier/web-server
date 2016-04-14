var express = require('express');
var app=express();
var port=3000;

var middleware = {
	requireAuthentification: function (req,res,next) {
		console.log('private route');
		next();
	},
	logger: function (req,res,next) {
		console.log(req.method+ ' ' + req.originalUrl);
		next();
	}
}

app.use(middleware.logger);



app.get('/about',middleware.requireAuthentification,function(req,res){
	res.send('about');
})

app.use(express.static(__dirname+'/public'));

app.listen(port,function(){
	console.log("server starter")
});
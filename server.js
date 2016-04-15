var express = require('express');
var app=express();
var port=3000;
var middleware=require('./middleware.js');

var todos=[{
	id: 1,
	description: 'dfdsadghhhh',
	completed: false
}, {
	id: 2,
	description: 'fdsfsdf',
	completed: false
}]

app.use(middleware.logger);

app.get('/todos',function(req,res){
	res.json(todos);
});

app.get('/todos/:id',function(req,res){
	var todoid = parseInt(req.params.id,10);
	var match;

	todos.forEach(function(todo){
		if(todo.id===todoid)
			match = todo;
	});
		if(match)
			res.json(match);
		else
			res.send('couldnt find todo whit id '+ todoid);
	
});

app.get('/about',middleware.requireAuthentification,function(req,res){

	res.send('about');
});

app.use(express.static(__dirname+'/public'));

app.listen(port,function(){
	console.log("server starter")
});
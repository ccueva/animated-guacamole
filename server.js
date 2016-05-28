const http = require ("http");
const express = require ("express");

const app = new express();

app.get("/",function(request,response){
	response.send("Gotcha, bitch!")
});

app.listen(3333,function(error){
	if(error){
		console.log(error);
	} else {
		console.log("Fuck your shit.")
	}
});

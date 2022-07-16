function test(){
	var a=10;
var b=20;
console.log('output '+ (a+b));
}
test();

function sum(a, b){
	return a+b;
}
console.log(sum(5,10));

var add= function(a, b){
	return a+b;
}
console.log(add(15,15));

function complexFun(add){
	console.log(add(20,15));
}
complexFun(add);

complexFun(function(a, b){
	return a-b;
});

var http = require('http');
http.createServer(function(req, res){
res.write('Hello from node js');
res.end();
}).listen(5000);
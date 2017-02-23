var http = require('http');
var https = require('https');
var router = require('./router.js');
var utils = require('./utils.js');

https.createServer(function(req,res){

  var path = req.method +' '+ req.url;

  try{
    router[path](req,res);
  }catch(err){
    console.log('Error'+err);
    res.end('Error Occured');
  }
}).listen(process.env.PORT || 8079, function(){
  console.log('Listen 8079');
});

var http = require('http');
var router = require('./router.js');
var utils = require('./utils.js');

http.createServer(function(req,res){

  var path = req.method +' '+ req.url;
  console.log(path);

  try{
    router[path](req,res);
        console.log('PATH'+path);
  }catch(err){
    console.log('Error'+err);
    console.log('PATH'+path);
    res.end('Error Occured');
  }
}).listen(process.env.PORT || 8079, function(){
  console.log('Listen 8079');
});

var fs = require('fs');



var search = fs.readFileSync(__dirname+'/../views/search.html','utf8');
var file = fs.readFileSync(__dirname+'/../DB/words.txt','utf8');
var db = file.split("\n");




module.exports = function(req,res){

res.end(search);

}

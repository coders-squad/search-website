var fs = require('fs');



var search = fs.readFileSync(__dirname+'/../views/search.html','utf8');



module.exports = function(req,res){
res.end(search);

}

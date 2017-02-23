var fs = require('fs');
module.exports = {
  'GET /':require('./app/roots.js'),
  'GET /style.css':function (req, res) {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('./views/css/style.css', {encoding: 'utf8'});
    res.write(fileContents);
    res.end();
  },
  'GET /search.js':function(req,res){
    res.writeHead(200, {'Content-type' : 'text/javascript'});
    var fileContents = fs.readFileSync('./app/search.js', {encoding: 'utf8'});
    res.write(fileContents);
    res.end();
  },

  'GET /test.js':function(req,res){
    res.writeHead(200, {'Content-type' : 'text/javascript'});
    var fileContents = fs.readFileSync('./app/test.js', {encoding: 'utf8'});
    res.write(fileContents);
    res.end();
  },

  'POST /auto':require('./app/autocomplete.js')
}

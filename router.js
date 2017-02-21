var fs = require('fs');
module.exports = {
  'GET /':require('./app/roots.js'),
  'GET /style.css':function (req, res) {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('./views/css/style.css', {encoding: 'utf8'});
    res.write(fileContents);
    res.end();
  }

}

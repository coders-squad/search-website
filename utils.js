var qs = require('querystring');

function parseBody(req,callback) {
  var body = '';
  req.on('data', function(data) {
    body += data;
  });
  req.on('end', function() {
<<<<<<< HEAD
    callback(undefined,qs.parse(body));
=======

    callback(undefined,body);
>>>>>>> 6ab908e183041b435b5c942d145cad1b1bd3527c
  });
}

module.exports = {
  parseBody  : parseBody
}

// var shot = require('shot');
// var test = require('tape');
// var rootHandler = require('../app/roots.js');
// var autocompleteHandler = require('../app/autocomplete.js');
// var request = {
//     method: 'POST',
//     url: '/auto',
//     payload: "l"}

// test('GET /: should return form html', function(t) {
//     shot.inject(rootHandler, {
//         method: 'GET',
//         url: '/'
//     }, function(res) {
//         var indexOf = res.payload.indexOf('form');
//         t.notEqual(indexOf, -1, 'got form somewhere in the html');
//         t.equal(res.statusCode, 200, 'got 200 status code');
//         t.end();
//     });
// });

// test('POST /search should return string', function(t) {
//     shot.inject(autocompleteHandler, request,function(res) {
//       t.deepEqual(res.payload,'["l","la","laager","laang","lab","labara","labarum","labba","labber","labdacism"]');
//           t.end();
//       });
//   });

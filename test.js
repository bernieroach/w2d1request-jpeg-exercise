var request = require('request');
var fs = require('fs');

request('https://sytantris.github.io/http-examples/', function(err, response, body){
  if(err){
    throw err;
  }
    console.log('Response Status Code', response.statusCode);

});

 request.get('https://sytantris.github.io/http-examples')
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
       })
        .pipe(fs.createWriteStream('./downloaded.html'))



var request = require('request');
var fs = require('fs');

var httpString = "https://sytantris.github.io/http-examples/future.jpg";


request.get(httpString).on('data',function(data){ /*console.log("DATA", data)*/})
                        .on('response', function(response){
                          console.log('response status', response.statusCode);
                          console.log(response.headers['content-type']);
                          console.log("downloading", httpString);
                        })
                        .on('error', function(err){
                          throw err;
                        })
                        .on("end", function(){
                            console.log("I am at the end");
                            console.log("downloaded", httpString);
                        })
                        .pipe(fs.createWriteStream("./future.jpg"));
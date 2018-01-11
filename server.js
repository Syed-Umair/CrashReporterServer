var http = require("http");
var request = require("request");
var formidable = require('formidable');
var FormData = require('form-data');
var server = http.createServer(function(req, response) {
  if (req && req.url.indexOf('/crashreporter') !== -1) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      console.log("JSON:", JSON.stringify({
          fields: fields,
          files: files
      }));
    });
  }
});
server.listen(8080);
console.log("Server is listening");
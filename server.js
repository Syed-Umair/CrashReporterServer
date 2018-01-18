var http = require("http");
var request = require("request");
var formidable = require('formidable');
var FormData = require('form-data');
var server = http.createServer(function(req, response) {
  if (req && req.url.indexOf('/crashreporter') !== -1) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log("New Crash Reported::");
      console.log("\tUserName: ",fields.userName);
      console.log("\tEmail: ",fields.email);
      console.log("\tCompany:",fields._companyName);
      console.log("\tProductName: ",fields._productName);
      console.log("\tVersion: ",fields._version);
      console.log("\tElectron Engine Version: ",fields.ver);
      console.log("\tMode: ",fields.mode);
      console.log("\tOS: ",fields.os);
      console.log("\tArchitecture: ",fields.platform);
      console.log("\tCrashed Process Type: ",fields.process_type);            
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    });
  }
});
server.listen(8080);
console.log("Server is listening");
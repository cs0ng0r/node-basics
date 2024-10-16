var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    fs.readFile('./page.html', function(err, data) {
        if(err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });

}).listen(8080);

console.log('Server running at http://localhost:8080/');

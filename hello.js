var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello travis CI from file')
}).listen(1337, '127.0.0.1');
console.log('server is running');
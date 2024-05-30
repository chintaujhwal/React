const http = require('http');

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');;
        res.end('<h1>Hello</h1>');
    }
);

server.listen(8888, 'localhost', () => console.log('Server running'));
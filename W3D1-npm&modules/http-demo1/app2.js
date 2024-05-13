const http = require('http');

http.createServer((req, res)=> {
    res.end('Hi~~~~');
}).listen(3000, () => console.log('Server is running on 3000'));
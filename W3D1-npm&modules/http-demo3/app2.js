const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            res.end(data);
        });
    } else if (req.url === '/login' && req.method === "POST") {
        const body = [];
        req.on('data', chunk => {
            // console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const result = Buffer.concat(body).toString();
            console.log(result);
        })
        res.end('Login Successfully!');
    } else {
        res.end('404 Page NOT FOUND');
    }
}).listen(3000, () => console.log('running on 3000'));
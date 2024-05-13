const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            res.end(data);
        });
    } else if (req.url === '/login' && req.method === "POST") {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            console.log(body);
            const [usernamestr, passwordstr] = body.split('&');
            const username = usernamestr.split("=")[1];
            const [, password] = passwordstr.split('=');
            if (username === 'john' && password === '123') {
                res.end('Login Successfully!');
            } else {
                res.end('Incorrect username or password');
            }
        })

    } else {
        res.end('404 Page NOT FOUND');
    }
}).listen(3000, () => console.log('running on 3000'));
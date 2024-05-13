const http = require('http');
const fs = require('fs');

http.createServer(function(request, response){
    // let html = fs.readFileSync('index.html', 'utf-8');
    // html = html.replace('{username}', 'John');
    // response.end(html);

    console.log(request.url, request.method);
    console.log(request.headers);
    fs.createReadStream('index.html').pipe(response);
}).listen(3000);
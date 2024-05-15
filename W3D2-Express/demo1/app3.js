const express = require('express');
const util = require('./util');

//2. instantiation
const app = express();

// 3. configuration
// app.enable('case sensitive routing');
app.set('case sensitive routing', true);
app.set('env', 'development');
console.log('port: ', process.env.PORT, process.env.NODE_ENV);

// 4. middleware
// apply express built-in middleware for POST body
app.use(express.urlencoded());
app.use(util.urlencoded());

app.use('/loginForm', (req, res, next) => {
    console.log(req.method);
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/login" method="post">
            <div>Username: <input name="username"></div>
            <div>Password: <input type="password" name="password" ></div>
            <div>Age: <input name="age" ></div>
            <button>Submit</button>
        </form>
    </body>
    </html>
    `);
});


app.use('/login', (req, res, next) => {
    console.log(req.body);
    const { username, password } = req.body;
    if (username === 'john' && password === '123') {
        res.end('login successfully!');
    } else {
        res.end('incorrect username or password');
    }
});



// 7. Bootup
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
});
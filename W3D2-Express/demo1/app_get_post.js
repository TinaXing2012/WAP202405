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
// app.use(express.urlencoded());
// app.use(util.urlencoded());
// app.use(express.json());

app.use('/search', (req, res) => {
    console.log(req.query);
    res.send('200', 'Result is ***');
});

app.use('/users/:uid/posts/:pid/comments', (req, res) => {
    // {uid: XXX, pid: XXX}
    console.log(req.params);
    res.end('Here are the comments: ');
})

app.get('/login', (req, res, next) => {
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


app.post('/login', express.urlencoded(), (req, res, next) => {
    console.log(req.body);
    const { username, password } = req.body;
    if (username === 'john' && password === '123') {
        res.end('login successfully!');
    } else {
        res.end('incorrect username or password');
    }
});

// restful APIs - save a user
app.use('/users', express.json(), (req, res, next) => {
    console.log('inside user....', req.body);
    // JSON.stringify(obj);
    req.body.id = Math.random();
    res.status(201).json(req.body); //200
});



// 7. Bootup
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
});
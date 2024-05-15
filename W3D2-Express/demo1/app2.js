const express = require('express');

//2. instantiation
const app = express();

// 3. configuration
// app.enable('case sensitive routing');
app.set('case sensitive routing', true);
app.set('env', 'development');
console.log('port: ', process.env.PORT, process.env.NODE_ENV);

// 4. middleware

app.use((req, res, next) => {
    console.log('2.....');
    res.end('hello world again!');
});

app.use((req, res, next) => {
    console.log('1.....');
    next(); //delgate to next available middleware
});



// 7. Bootup
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
});
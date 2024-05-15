const express = require('express');

//2. instantiation
const app = express();

// 3. configuration
// app.enable('case sensitive routing');
app.set('case sensitive routing', true);
app.set('env', 'development');
console.log('port: ', process.env.PORT, process.env.NODE_ENV);

// 4. middleware
// if we don't provide a path, matches all URLs
// app.use(function(req, res, next) {
//     console.log('inside app.use .... 1');
//     res.end('hello World');
// });

// /user -> /user/*/*/*
app.use('/user', (req, res) => {
    console.log('inside app.use .... 2');
    res.end('hello User');
});



// 7. Bootup
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
});
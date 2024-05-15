const express = require('express');
const util = require('./util');

//2. instantiation
const app = express();

// app.use, /search => /search/*/*
// app.all, /search => /search, must have path
app.all('/user', (req, res) => {
    console.log(req.query);
    res.send('200', 'Result is ***');
});





// 7. Bootup
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
});
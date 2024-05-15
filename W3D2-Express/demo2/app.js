const express = require('express');
const path = require('path');

const app = express();

//middlewares

app.get('/user', (req, res, next) => {
    console.log('1');
    next('route');
}, (req, res, next) => {
    console.log('2...............');
    next();
}, (req, res, next) => {
    console.log('3');
    next();
});

app.use((req, res, next) => {
    console.log('4');
    res.send('Hi~~~Again');
})




// 404 handler
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

// 6. Error handler
app.use((err, req, res, next) => {
    res.status(500).send('Whooops~~~~');
});

app.listen(3000,  () => console.log('listen on 3000'));
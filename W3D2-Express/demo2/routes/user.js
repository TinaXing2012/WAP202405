const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add', (req, res, next) => {
    console.log(abc);
    // throw new Error('Whoops!!!');
    // next('222222232323');
});

module.exports = router;
const path = require('path');
const fs = require('fs');

const readable = fs.createReadStream(path.join('.', '2.jpg'), {highWaterMark: 16 * 1024});
const writeable = fs.createWriteStream(path.join('.', 'images', 'bg.jpg'));
readable.on('data', function(chunk){
    console.log(chunk.length);
    writeable.write(chunk);
})
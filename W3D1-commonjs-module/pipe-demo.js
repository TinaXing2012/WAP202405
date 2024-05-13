const fs = require('fs');
const path = require('path');
const readable = fs.createReadStream(path.join('.', '2.jpg'), {highWaterMark: 16 * 1024});
const writeable = fs.createWriteStream(path.join('.', 'images', 'bg2.jpg'));
readable.pipe(writeable);

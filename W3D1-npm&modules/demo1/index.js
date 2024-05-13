const dayjs = require('dayjs');
const result = dayjs(Date.now()).format('{YYYY} MM-DD');
console.log(result);
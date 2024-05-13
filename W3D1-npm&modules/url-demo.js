const myURL =
new URL('https://user:pass@sub.host.com:8080/p/a/t/h?course1=nodejs&course2=angular#hash');
const serach = myURL.searchParams;
console.log(serach.get('course1'), serach.get('course2'))
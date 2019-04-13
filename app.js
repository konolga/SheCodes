const http = require('http');
const func = require('./elementary/5_Secret_Message')

const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  //res.write(func);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
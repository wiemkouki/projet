const http = require('http');


const server = http.createServer((req, res) => {
res.end('my first resp');
});

server.listen(process.env.PORT || 3000);

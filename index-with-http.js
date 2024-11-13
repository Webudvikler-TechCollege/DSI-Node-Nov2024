import http from 'http';

const port = 4000

http.createServer((request,response) => {
	console.log(`Webserver is running now on http://localhost:${port}`);
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write('Hello World!!!');
	response.end();
}).listen(port);
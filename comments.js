// Create a web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  if (pathname === '/comments' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else if (pathname === '/comments' && method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const comment = JSON.parse(body);
      comments.push(comment);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(comment));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
// The comments.js file exports an array of comments. The server reads comments from the file and sends them back to the client when the client makes a GET request to /comments. When the client sends a POST request to /comments, the server reads the request body, parses it, and adds the new comment to the comments array. Finally, the server sends the new comment back to the client.

// Run the server using node comments.js and test it using a tool like Postman. You can make GET requests to /comments to read comments and POST requests to /comments to add new comments.

// Conclusion
// In this article, you learned how to create a simple web server using Node.js. You also learned how to handle different types of HTTP requests (GET, POST, etc.) and send responses to clients. You can use this knowledge to build more complex web servers that serve static files, handle form submissions, authenticate users, and more. I hope this article helps you get started with Node.js web development!
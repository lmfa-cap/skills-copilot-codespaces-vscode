// Create a web server
// Create a route /comments that returns a list of comments
// Create a route /comments/:id that returns a single comment
// Create a route /comments/new that allows the user to add a new comment
// Create a route /comments/delete that allows the user to delete a comment
// Create a route /comments/edit that allows the user to edit a comment
// Create a route /comments/like that allows the user to like a comment
// Create a route /comments/dislike that allows the user to dislike a comment

const express = require('express');
const app = express();
app.use(express.json());

const comments = [
  { id: 1, author: 'John Doe', comment: 'Hello, world!', likes: 0, dislikes: 0 },
  { id: 2, author: 'Jane Doe', comment: 'Goodbye, world!', likes: 0, dislikes: 0 }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found');
  res.json(comment);
});

app.post('/comments/new', (req, res) => {
  const comment = {
    id: comments.length + 1 }});
// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id

// Import the express module
const express = require('express');

// Import the comment model
const Comment = require('../models/comment');

// Create a new router
const router = express.Router();

// 2. Create a route for GET /comments
router.get('/', (req, res) => {
  // Get all the comments from the database
  Comment.find()
    .then(comments => {
      // Return the comments as json
      res.json(comments);
    })
    .catch(err => {
      // If there was an error, send server error
      res.status(500).send(err);
    });
});

// 3. Create a route for GET /comments/:id
router.get('/:id', (req, res) => {
  // Get the comment id from the request
  const id = req.params.id;

  // Find the comment in the database
  Comment.findById(id)
    .then(comment => {
      // If no comment was found
      if (!comment) {
        // Send a not found status code
        res.sendStatus(404);
      } else {
        // Return the comment as json
        res.json(comment);
      }
    })
    .catch(err => {
      // If there was an error, send server error
      res.status(500).send(err);
    });
});

// 4. Create a route for POST /comments
router.post('/', (req, res) => {
  // Get the comment data from the request
  const data = req.body;

  // Create a new comment with the data
  const comment = new Comment(data);

  // Save the comment to the database
  comment
    .save()
    .then(() => {
      // Return the new comment as json
      res.json(comment);
    })
    .catch(err => {
      // If there was an error, send it
      res.status(400).send(err);
    });
});

// 5. Create a route for PUT /comments/:id
router.put('/:id', (req, res) => {
  //

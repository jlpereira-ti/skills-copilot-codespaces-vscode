// Create web server
const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create GET route
router.get('/create', (req, res) => {
  res.send('Create Get Request');
});

// Create POST route
router.post('/create', (req, res) => {
  res.send('Create Post Request');
});

// Delete route
router.get('/:id/delete', (req, res) => {
  res.send('Delete Request, ID: ' + req.params.id);
});

module.exports = router;

require('dotenv').config()
const { posts } = require('./routes/posts');
const compression = require('compression')
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(compression());
app.use(express.json());

// Routes
app.use('/', express.static('dist'));
app.use('/api/posts', posts);

app.listen(port, () => {
  console.log(`Web Server listening on port ${port}`);
});

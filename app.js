const express = require('express');
const app = express();
const morgan = require('morgan');

//port
const PORT = 8080;

//routes
const {getPosts} = require('./routes.post');

//middleware
app.use(morgan('dev'));

app.use('/', getPosts);

app.listen(port, () => {
    console.log(`App is listening on port ${PORT}`);
})
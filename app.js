const express = require('express');
const app = express();
const morgan = require('morgan');

//routes
const {getPosts} = require('./routes.post');

//middleware
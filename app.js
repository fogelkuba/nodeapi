const express = require('express');
const app = express();
const morgan = require('morgan');

//port
const PORT = 8080;


//routes
const postRoutes = require('./routes/post');


//middleware
app.use(morgan('dev'));


app.use('/', postRoutes);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})


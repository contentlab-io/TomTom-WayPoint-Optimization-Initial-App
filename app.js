const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

require('dotenv').config();

//import routes 
const waypoints = require('./routes/waypoints');
//app
const app = express();


//middleware 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
//routes middleware

app.use('/api',waypoints);
//routes

const port = 8000

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
});


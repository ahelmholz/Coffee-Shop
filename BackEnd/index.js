const app = require('express')();
const port = 3000;

// Mongo / Mongoose
const mongoose = require('mongoose');
const mongoUsername = "admin";
const mongoPassword = 'abc123';
const mongooseUrl = `mongodb://${mongoUsername}:${mongoPassword}@ds239797.mlab.com:39797/coffe_shop`;


const menu = require('./routes/menu');


const queryParser = require('express-query-parser');
const bodyParser = require('body-parser');

// MiddleWare
app.use(bodyParser.json());
app.use(queryParser({
     parseNull: true,
     parseBoolean: true
}));


// Routes
app.use('/api/menu', menu);




mongoose.connect(mongooseUrl, {useNewUrlParser: true}).then(()=>{
    console.log("connected to mlab");
    app.listen(port, ()=>{
        console.log("server started");
    });
});
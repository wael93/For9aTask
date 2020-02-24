const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Import Routes
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },
() => {
    console.log('Connected to DB');
});

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);
app.use('/dashboard', dashboardRoute);

app.listen(process.env.HTTP_PORT, () => console.log("Server start"));
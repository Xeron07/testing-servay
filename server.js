//modules
const express = require('express');
const authApi = require('./config/key');
const mongoose = require('mongoose');

//main router object
const app = express();

//passport authentication
require('./services/passport');
require('./auth/authRouter')(app);

//models for mongodb database
require('./models/User');

app.get('/', (req, res) => {
	res.send('hello there');
});

mongoose.connect(authApi.dbConn.connectionString);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(authApi.googleApi.apiId);
});

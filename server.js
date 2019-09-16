const express = require('express');
const authApi = require('./config/key');
const mongoose = require('mongoose');
require('./services/passport');
const app = express();
require('./auth/authRouter')(app);

app.get('/', (req, res) => {
	res.send('hello there');
});

mongoose.connect(authApi.dbConn.connectionString);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(authApi.googleApi.apiId);
});

//modules
const express = require('express');
const authApi = require('./config/key');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

//models for mongodb database
require('./models/User');

//main router object
const app = express();

//passport authentication
require('./services/passport');
require('./auth/authRouter')(app);

app.get('/', (req, res) => {
	res.send('hello there');
});

mongoose.connect(authApi.dbConn.connectionString);

app.use(
	cookieSession({
		keydata: authApi.cookie.gingersnap,
		keys: [ authApi.cookie.chocolate ]
	})
);
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(authApi.googleApi.apiId);
});

const express = require('express');
const authApi = require('./config/key');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

app.get('/', (req, res) => {
	res.send('hello there');
});

passport.use(
	new GoogleStrategy(
		{
			clientID: authApi.googleApi.apiId,
			clientSecret: authApi.googleApi.secretId,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(accessToken);
			console.log(profile);
		}
	)
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(authApi.googleApi.apiId);
});

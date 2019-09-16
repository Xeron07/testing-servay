const passport = require('passport');
const authApi = require('../config/key');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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

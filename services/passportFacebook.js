const passport = require('passport');
const authApi = require('../config/key');
const mongoos = require('mongoose');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = mongoos.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new FacebookStrategy(
		{
			clientID: authApi.facebookApi.apiId,
			clientSecret: authApi.facebookApi.secretId,
			callbackURL: '/auth/facebook/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const userExit = await User.findOne({ userId: profile.id });
			if (userExit) {
				console.log(userExit);
				done(null, userExit);
			} else {
				const userData = await new User({
					userId: profile.id,
					name: profile.displayName
					//img: profile.photos[0].value,
					//	gallery: profile.photos
				}).save();
				done(null, userData);
				//console.log(profile.photos[0].value);
			}

			console.log(profile.id);

			//console.log(profile);
		}
	)
);

const passport = require('passport');
module.exports = (app) => {
	app.get(
		'/auth/facebook',
		passport.authenticate('facebook', {
			scope: 'email'
		})
	);

	app.get('/auth/facebook/callback', passport.authenticate('facebook'));

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};

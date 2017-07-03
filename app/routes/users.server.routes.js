// Load the module dependencies
const passport = require('passport');

// Define the routes module' method
module.exports = function(app) {
	// Set up the Twitter OAuth routes
	app.get('/oauth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}));
	app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));
};

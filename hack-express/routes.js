
var Registration = require('./routes/Registration'),
	Login = require('./routes/Login'),
	Scoreboard = require('./routes/Scoreboard'),
	Submissions = require('./routes/Submissions'),
	Logout = require('./routes/Logout'),
	auth = require('./auth');
	cache = require('./cache')

module.exports = function(app) {
	app.get('/', function (req, res) {
  		res.redirect('Scoreboard');
	});

	app.get('/registration', cache.cacheSetHeader, Registration.show);
	app.post('/registration/submit', Registration.submit);
	app.get('/login', cache.cacheSetHeader, Login.show);
	app.post('/login/submit', Login.submit);
	app.get('/scoreboard', cache.cacheSetHeader, Scoreboard.show);
	app.get('/submissions', auth.requiresLogin, cache.cacheSetHeader, Submissions.show);
	app.post('/submissions/submit', auth.requiresLogin, Submissions.submit);
	app.get('/logout', cache.cacheSetHeader, Logout.show);
}

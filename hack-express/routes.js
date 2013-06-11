
var Registration = require('./routes/Registration'),
	Login = require('./routes/Login'),
	Scoreboard = require('./routes/Scoreboard'),
	Submissions = require('./routes/Submissions'),
	Logout = require('./routes/Logout'),
	auth = require('./auth'),
	cache = require('./cache')
	Teams = require('./routes/teams_controller');

module.exports = function(app) {
	app.get('/', cache.setHeaderPublic, function (req, res) {
  		res.redirect('Scoreboard');
	});

	app.get('/registration', cache.setHeaderPublic, Registration.show);
	app.post('/registration/submit', Registration.submit);
	app.get('/login', cache.setHeaderPublic, Login.show);
	app.post('/login/submit', Login.submit);
	app.get('/scoreboard', cache.setHeaderPublic, Scoreboard.show);
	app.get('/submissions', auth.requiresLogin, Submissions.show);
	app.post('/submissions/submit', auth.requiresLogin, Submissions.submit);
	app.get('/logout', Logout.show);

	// Team routes.
	app.get('/teams.:format?', Teams.index);
	app.post('/teams.:format?', Teams.create);
	app.get('/teams/new.:format?', Teams.new);
	app.get('/teams/:id.:format?', Teams.show);
	app.get('/teams/:id/edit', Teams.edit);
	app.put('/teams/:id.:format?', Teams.update);
	app.delete('/teams/:id.:format?', Teams.destroy);
}

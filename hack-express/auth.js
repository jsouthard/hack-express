var bcrypt = require('bcrypt');

module.exports.authenticate = function(username, password, callback) {
  hack_db.view('users', 'by_username', {key: username}, function(err, body) {
    
    if (err) {
      console.log(err.reason);
    }

    user = body.rows[0].value;
    
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        callback(user);
      } else {
        callback(null);
      }
    } else {
      callback(null);
    }
  });
}

/**
 * Function to enforce login on routes requiring protection.
 */
module.exports.requiresLogin = function(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login?redir=' + req.url);
  }
}



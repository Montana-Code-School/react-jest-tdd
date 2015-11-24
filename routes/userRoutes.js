var githubRoutes = require('./github');

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/');
}

module.exports = function main(app, passport) {
  // normal routes ===============================================================
  // show the home page (will also have our login links)
  app.get('/', function index(req, res) {
    res.render('index.ejs');
  });

    // PROFILE SECTION =========================
  app.get('/profile', isLoggedIn, function profile(req, res) {
    res.render('profile.ejs', {
      user: req.user,
    });
  });

  app.get('/add', isLoggedIn, function add(req, res) {
    res.render('add.ejs', {
      user: req.user,
    });
  });

    // LOGOUT ==============================
  app.get('/logout', function logout(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.use('/api/github', githubRoutes);

  // AUTHENTICATE (FIRST LOGIN) ==================================================

  // LOGIN ===============================
  app.get('/login', function login(req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true, // allow flash messages
  }));

  // SIGNUP =================================
  app.get('/signup', function signup(req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true, // allow flash messages
  }));

  // AUTHORIZE (ALREADY LOGGED IN)
  app.get('/connect/local', function connectLocal(req, res) {
    res.render('connect-local.ejs', { message: req.flash('loginMessage') });
  });
  app.post('/connect/local', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
    failureFlash: true, // allow flash messages
  }));
};

const authController = require('../controllers/authcontroller2.js');
const bodyParser = require('body-parser');

module.exports = function(app, passport) {

  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post('/signup', passport.authenticate('local', {

      successRedirect: '/dashboard',
      failureRedirect: '/signup'
    }
  ), function (req, res) {
    console.log('fun after passauth');
  });
};
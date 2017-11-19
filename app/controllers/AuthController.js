const Auth = require(`../models/Auth`);
const bCrypt = require('bcrypt-nodejs');
const UserController = require(`../controllers/UserController`);
const user = new UserController;

class AuthController {

  constructor(){
    this.currentUser = {};
  }

  static checkAccount(req, res, next) {

    return Auth.findAll({where: {token: req.params.token}}).then(result => {

      if (result.length !== 0) {
        req.param.auth = true;
        //this.currentUser = user.getUserById(result[0].userId, res);
        next();

      } else {
        req.param.auth = false;
        console.log(req.params.auth);
        next();
        // res.redirect('/login');
      }
    });
  }

  static addAccount(req, res) {

    const secret = process.env.SECRET;
    const hash = bCrypt.hashSync(req.body.password, bCrypt.genSaltSync(8), null);
    const token = bCrypt.hashSync(`${req.body.login}${secret}`, bCrypt.genSaltSync(8), null);
    const user =
      {
        login: req.body.login,
        password: hash,
        token,
      };

    return Auth.create(user).then(() => {

      res.status(201);
      res.send(({success: true, token: user.token}));
    });
  }
}

module.exports = AuthController;
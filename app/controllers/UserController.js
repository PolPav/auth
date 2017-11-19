const User = require(`../models/Users`);
const DailyStats = require(`../models/DailyStats`);
const HourlyStats = require(`../models/HourlyStats`);
const MonthlyStats = require(`../models/MonthlyStats`);

class UserController{

  getUsers(res) {

    return  User.findAll(
      {
        where: { trash: 0 },
        include:[{model: DailyStats}, {model: HourlyStats}, {model: MonthlyStats}]
      }

      ).then(users => {

      res.status(200);
      res.send({success: true, data: users});
    });
  }

  getUserById(id, res){

    return User.findAll(
      {
        where: { id, trash: 0 },
        include:[{model: DailyStats}, {model: HourlyStats}, {model: MonthlyStats}]
      }

      ).then(result => {

      let status = 200;
      let data = {};

        if(result.length !== 0){
          data = {success: true, data: result};

        } else {
          status = 404;
          data = {success: false};
        }

        res.status(status);
        res.send(data);
      });
  }

  addUser(req, res){

    const user =
      {
        name: req.body.name,
        surname: req.body.surname,
        pending: req.body.pending,
        categoryId: req.body.categoryId,
        calculateRating: req.body.calculateRating
      };

    return User.create(user).then(() => {

      res.status(201);
      res.send(({success: true}));
    });
  }

  updateUser(req, res){

    const user =
      {
        name: req.body.name,
        surname: req.body.surname,
        pending: req.body.pending,
        categoryId: req.body.categoryId
      };

    return User.update(user, { where: { id: req.params.id } }).then(() => {

      res.status(200);
      res.send({success: true});
    });
  }

  deleteUser(req, res){

    return User.update({trash: 1}, { where: { id: req.params.id } }).then(() => {

      res.status(200);
      res.send(({success: true}));
    });
  }
}

module.exports = UserController;

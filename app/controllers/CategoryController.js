const Categories = require(`../models/Categories`);

class CategoryController{

  getCategories(res) {

    return  Categories.findAll( {where: { trash: 0 } } ).then(categories => {

      res.status(200);
      res.send({success: true, data: categories});
    });
  }

  getCategoryById(req, res){

    return Categories.findAll({where: { trash: 0, id: req.params.id } } ).then(result => {

      let status = 200;
      let data = {};

      if(result.length !== 0){
        data = {success: true, data: result}

      } else {
        status = 404;
        data = {success: false};
      }

      res.status(status);
      res.send(data);
    });
  }

  addCategory(req, res){

    const category =
      {
        name: req.body.name,
        pending: req.body.pending,
      };

    return Categories.create(category).then(() => {

      res.status(201);
      res.send(({success: true}));
    });
  }

  updateCategory(req, res){

    const category =
      {
        name: req.body.name,
        pending: req.body.pending,
      };

    return Categories.update(category, { where: { id: req.params.id } } ).then(() => {

      res.status(200);
      res.send({success: true});
    });
  }

  deleteCategory(req, res){

    return Categories.update( {trash: 1}, { where: { id: req.params.id } } ).then(() => {

      res.status(200);
      res.send(({success: true}));
    });
  }
}

module.exports = CategoryController;

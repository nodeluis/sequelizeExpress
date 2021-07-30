const controller = require('../../controllers/userEvent');
const router = require('express').Router();

//CRUD
router
  .get('/', controller.getAll)
  .post('/', controller.createOne)

module.exports = router;
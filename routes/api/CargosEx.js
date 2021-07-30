const controller = require('../../controllers/CargosEx');
const router = require('express').Router();

//CRUD
router
  .get('/', controller.getAll)
  .get('/insertable', controller.insertTable)

module.exports = router;
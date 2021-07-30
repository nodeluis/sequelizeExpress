const UserEv = require('../models/UserEventually');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await UserEv.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.createOne = async (req, res, next) => {
  try {
    const USER_MODEL = {
      keyempleado: req.body.keyempleado,
      login: req.body.login,
      pass: req.body.pass,
      keyusuarioexterno: req.body.keyusuarioexterno=='null'?null:req.body.keyusuarioexterno,
      keyusuarioev: req.body.keyusuarioev,
      cite2: req.body.cite2,
    };
    try {
      const user = await UserEv.create(USER_MODEL);
      console.log('User crerated');
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
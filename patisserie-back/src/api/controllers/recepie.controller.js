const Recepie = require('../models/recepie.model');
const logger = require('../../config/logger');

/*
* Create a new recepie
* @public
*/
exports.CreateRecepie = async (req, res, next) => {
  logger.info('Attempting to createa a new recepie');
  logger.debug(req.body);
  await Recepie.create(req.body).then((newRecepie) => {
    logger.info(`Created a new recepie ${newRecepie}`);
    return res.status(200).json({ newRecepie });
  }).catch((error) => {
    logger.error(error);
    return res.status(500).json({ error });
  });
};

/*
* Query all recepies
* @public
*/
exports.GetAllRecepies = async (req, res, next) => {
  logger.info('requested for all recepies');
  const recepies = await Recepie.find({});
  res.status(200).json({ recepies });
};

const Recepie = require('../models/recepie.model');
const logger = require('../../config/logger');

/*
* Create a new recepie
* @public
*/
exports.CreateRecepie = async (req, res, next) => {
  logger.info('Attempting to createa a new recepie');
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
  try {
    const recepies = await Recepie.find({});
    res.status(200).json({ recepies });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error });
  }
};

/*
* Query a single recepie using it's id
* @public
*/
exports.GetRecepieByID = async (req, res, next) => {
  logger.info('Requesting recepie by id');
  const { ID } = req.params;
  logger.info(`Requested recepie id is ${ID}`);
  try {
    const recepie = await Recepie.find({ _id: ID });
    if (recepie) {
      res.status(200).json(recepie);
    } else {
      res.status(404).json({ msg: 'Recepie not found' });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

/*
* Delete a single recepie
* @public
*/
exports.deleteRecepie = async (req, res, next) => {
  logger.info('requested for deleting a recepie');
  const { ID } = req.params;
  try {
    await Recepie.deleteOne({ _id: ID });
    logger.info(`deleted recepie with id of ${ID}`);
    res.status(200).json({ msg: 'succesfully deleted the recepie' });
  } catch (error) {
    logger.error(error);
    res.status(500).json(error);
  }
};

exports.updateRecepie = async (req, res, next) => {
  logger.info('updating a recepie');
  const { ID } = req.params;
  console.log(req.body);
  try {
    await Recepie.replaceOne({ _id: ID }, req.body);
    res.status(200).json({ msg: 'updated recepie successfully' });
  } catch (error) {
    logger.error(error);
    res.status(500).json(error);
  }
};

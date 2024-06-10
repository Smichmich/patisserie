const express = require('express');
const controller = require('../../controllers/recepie.controller');

const router = express.Router();

router.route('/add').post(controller.CreateRecepie);
router.route('/').get(controller.GetAllRecepies);
router.route('/recepie/:ID').get(controller.GetRecepieByID);

module.exports = router;

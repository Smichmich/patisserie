const express = require('express');
const controller = require('../../controllers/recepie.controller');

const router = express.Router();

router.route('/add').post(controller.CreateRecepie);
router.route('/').get(controller.GetAllRecepies);
router.route('/:ID').get(controller.GetRecepieByID);
router.route('/:ID').delete(controller.deleteRecepie);

module.exports = router;

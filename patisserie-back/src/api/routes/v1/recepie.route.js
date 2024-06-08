const express = require('express');
const controller = require('../../controllers/recepie.controller');

const router = express.Router();

router.route('/add').post(controller.CreateRecepie);
router.route('/').get(controller.GetAllRecepies);

module.exports = router;

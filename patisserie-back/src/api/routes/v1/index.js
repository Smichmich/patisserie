const express = require('express');
const recepieRoutes = require('./recepie.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.use('/recepies', recepieRoutes);

module.exports = router;

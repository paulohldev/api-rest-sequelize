const router = require('express').Router();
const tokenController = require('../controllers/TokenController');

router.post('/', tokenController.store);

module.exports = router;

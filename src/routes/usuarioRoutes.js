const router = require('express').Router();
const usuarioController = require('../controllers/UsuarioController');

router.get('/', usuarioController.index);
router.post('/', usuarioController.store);

module.exports = router;

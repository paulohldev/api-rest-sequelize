const router = require('express').Router();
const usuarioController = require('../controllers/UsuarioController');
const loginRequired = require('../middlewares/loginRequired');

router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);
router.post('/criar', usuarioController.store);
router.delete('/', loginRequired, usuarioController.delete);
router.put('/', loginRequired, usuarioController.update);

module.exports = router;

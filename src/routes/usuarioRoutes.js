const router = require('express').Router();
const usuarioController = require('../controllers/UsuarioController');
const loginRequired = require('../middlewares/loginRequired');

router.get('/', loginRequired, usuarioController.index);
router.post('/criar', usuarioController.store);
router.get('/:id', usuarioController.show);
router.delete('/:id', usuarioController.delete);
router.put('/:id', usuarioController.update);

module.exports = router;

const router = require('express').Router();
const usuarioController = require('../controllers/UsuarioController');

router.get('/', usuarioController.index);
router.post('/criar', usuarioController.store);
router.get('/:id', usuarioController.show);
router.delete('/:id', usuarioController.delete);
router.put('/:id', usuarioController.update);

module.exports = router;

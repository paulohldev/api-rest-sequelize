const express = require('express');
const postController = require('../controllers/PostController');
const loginRequired = require('../middlewares/loginRequired');

const router = express.Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', loginRequired, postController.store);
router.put('/:id', loginRequired, postController.update);
router.delete('/:id', loginRequired, postController.delete);

module.exports = router;

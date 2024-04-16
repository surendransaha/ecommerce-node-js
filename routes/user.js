const express = require('express');
const router = express.Router();

const { authenticationVerifier } = require('../middlewares/verifyToken');
const { UserController } = require('../controllers');

router.get('/', authenticationVerifier, UserController.get_users);
router.get('/:id', authenticationVerifier, UserController.get_user);
router.put('/:id', authenticationVerifier, UserController.update_user);
router.delete('/:id', authenticationVerifier, UserController.delete_user);

module.exports = router;
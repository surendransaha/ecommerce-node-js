const express = require('express');
const router = express.Router();

const { CartController } = require('../controllers');
const { authenticationVerifier } = require('../middlewares/verifyToken');

router.get('/:userId', authenticationVerifier, CartController.get_cart)
router.post('/', authenticationVerifier, CartController.create_cart);
router.put('/:id', authenticationVerifier, CartController.update_cart);
router.delete('/:id', authenticationVerifier, CartController.delete_cart);

module.exports = router;
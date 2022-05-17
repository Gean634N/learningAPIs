const { Router } = require('express');
const UserController = require('../controllers/users.controller');

const router = Router();

router.get('/', (_req, res) => {
  return res.json({ message: 'hello world' });
});

// CRUD
router.post('/users', UserController.create); // C: Create
router.get('/users', UserController.findAll); // R: Reade
router.get('/users/:id', UserController.findOne); // R: Reade One
router.put('/users/:id', UserController.update); // U: Update
router.delete('/users/:id', UserController.destroy); // D: Delete

module.exports = router;

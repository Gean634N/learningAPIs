const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

// CRUD
router.post('/users', async () => {}); // C: Create
router.get('/users', async () => {}); // R: Reade
router.get('/users/:userId', async () => {}); // R: Reade One
router.put('/users/:userId', async () => {}); // U: Update
router.delete('/users/:userId', async () => {}); // D: Delete

module.exports = router;

const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('Welcome to the Roost!'));
router.get('/birds', controllers.getAllBirds);
router.post('/birds', controllers.createBird);
router.get('/birds/id/:id', controllers.getBirdById);
router.get('/birds/type/:type', controllers.getBirdByType);
router.get('/birds/city/:city', controllers.getBirdByCity);
router.put('/birds/id/:id', controllers.updateBird);
router.delete('/birds/id/:id', controllers.deleteBird);

module.exports = router;
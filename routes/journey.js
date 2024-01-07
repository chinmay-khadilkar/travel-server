const express = require('express');
const router = express.Router();
const JourneyController = require('../controllers/JourneyController');
const upload = require('../middleware/upload.js');
const authenticate = require('../middleware/authenticate');
router.get('/', authenticate, JourneyController.index);
router.post('/update', authenticate, JourneyController.update);
router.post('/delete', authenticate, JourneyController.destroy);
router.post('/show', authenticate, JourneyController.show);
router.post('/store', authenticate, upload.single('file'), JourneyController.store);





module.exports = router;
const express = require('express');
const router = express.Router();
const JourneyController = require('../controllers/JourneyController');
const upload = require('../middleware/upload.js');
router.get('/', JourneyController.index);
router.post('/update', JourneyController.update);
router.post('/delete', JourneyController.destroy);
router.post('/show', JourneyController.show);
router.post('/store', upload.single('file'), JourneyController.store);





module.exports = router;
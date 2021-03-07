const express = require('express');
const router = express.Router();
const {videoStream} = require('../../controllers/videoController')


router.get('/videoStream', videoStream);


module.exports = router;
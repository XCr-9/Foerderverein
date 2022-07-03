const express = require('express');
const router = express.Router();

const sendMessage = require('./send-message');

router.use('/send-message', sendMessage);

module.exports = router;

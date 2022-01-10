const express = require('express');
let router = express.Router();
const userEndpoint = require('./user/user')

router.use('/user',userEndpoint)

module.exports = router;
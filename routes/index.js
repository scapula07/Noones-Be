const express = require('express');
const router = express.Router();
const {getAccessToken}=require("../controller/index")

router.route('/get-token').get(getAccessToken);


module.exports = router;
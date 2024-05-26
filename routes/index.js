const express = require('express');
const router = express.Router();
const {getAccessToken,recentTrades,getTrade,getChat,sendChat}=require("../controller/index")

router.route('/get-token').get(getAccessToken);
router.route('/get-trades').post(recentTrades);
router.route('/get-trade').post(getTrade);



router.route('/get-chat').post(getChat);
router.route('/send-chat').post(sendChat);



module.exports = router;
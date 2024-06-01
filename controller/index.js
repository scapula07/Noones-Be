const dotenv = require('dotenv').config()
const axios = require("axios")

// 0CPUcaqyIlIfoCr7YObWcBQxs4FQcXA0
exports.getAccessToken= async (req, res, next) => {
       try{
            axios.post('https://auth.noones.com/oauth2/token', {
              grant_type: 'client_credentials',
              client_id: 'mkuJ7NuNB5g2qQzZpjDP6WqH4aE7ruUIFB6Oetg2gqg1VFDW',
              client_secret: 'lhANHUecFq5L9hCFplMnbWVBj0RJ1LeFOb8ztEhCcpRrmJUu'
          }, {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          })
          .then(response => {
              console.log('Access Token:', response.data.access_token);
              res.status(200).json({
                status: 'success',
                data:response.data
             });
          })
          .catch(error => {
              console.error('Error:', error);
          });






        }catch(e){
            console.log(e)
        }
}

exports.recentTrades= async (req, res, next) => {
         const {token} = req.body
         console.log(req.body,"ttttt")
        try{
          axios.post('https://api.noones.com/noones/v1/trade/list',{}, {
            headers: {
                   'Content-Type': 'application/x-www-form-urlencoded',
                   'Authorization' : `Bearer ${token} `
                 }
             })
        .then(response => {
            console.log('Access Token:', response.data);
            res.status(200).json({
              status: 'success',
              data:response.data?.data?.trades
          });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(400).json({
              status: 'error',
              data:error?.data
           });
        });






      }catch(e){
          console.log(e)
      }

}







exports.recentTrades= async (req, res, next) => {
  const {token} = req.body
  console.log(req.body,"ttttt")
 try{
   axios.post('https://api.noones.com/noones/v1/trade/list',{}, {
     headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Bearer ${token} `
          }
      })
 .then(response => {
     console.log('Access Token:', response.data);
     res.status(200).json({
       status: 'success',
       data:response.data?.data?.trades
   });
 })
 .catch(error => {
     console.error('Error:', error);
     res.status(401).json({
      status: 'error',
      data:error?.data
   });
 });






}catch(e){
   console.log(e)
}

}




exports.getTrade= async (req, res, next) => {
  const {token,hash} = req.body
  console.log(req.body,"ttttt")
 try{
   axios.post('https://api.noones.com/noones/v1/trade/get',{trade_hash:hash}, {
     headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Bearer ${token} `
          }
      })
 .then(response => {
     console.log('Access Token:', response.data);
     res.status(200).json({
       status: 'success',
       data:response.data?.data
   });
 })
 .catch(error => {
     console.error('Error:', error);
 });






}catch(e){
   console.log(e)
}

}





exports.release= async (req, res, next) => {
  const {token,hash} = req.body
  console.log(req.body,"ttttt")
 try{
   axios.post('https://api.noones.com/noones/v1/trade/release',{trade_hash:hash}, {
     headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Bearer ${token} `
          }
      })
 .then(response => {
     console.log('Access Token:', response.data);
     res.status(200).json({
       status: 'success',
       data:response.data
   });
 })
 .catch(error => {
     console.error('Error:', error);
 });






}catch(e){
   console.log(e)
}

}




exports.cancel= async (req, res, next) => {
  const {token,hash} = req.body
  console.log(req.body,"ttttt")
 try{
   axios.post('https://api.noones.com/noones/v1/trade/list',{}, {
     headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Bearer ${token} `
          }
      })
 .then(response => {
     console.log('Access Token:', response.data);
     res.status(200).json({
       status: 'success',
       data:response.data
   });
 })
 .catch(error => {
     console.error('Error:', error);
 });






}catch(e){
   console.log(e)
}

}




//////// . ChatAPi





exports.getChat= async (req, res, next) => {
  const {token,hash} = req.body
  console.log(req.body,"ttttt")
 try{
   axios.post('https://api.noones.com/noones/v1/trade-chat/get',{trade_hash:hash}, {
     headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Bearer ${token} `
          }
      })
 .then(response => {
     console.log('Access Token:', response.data);
     res.status(200).json({
       status: 'success',
       data:response.data?.data?.messages
   });
 })
 .catch(error => {
     console.error('Error:', error);
 });






}catch(e){
   console.log(e)
}

}




exports.sendChat= async (req, res, next) => {
  const {token,hash,msg} = req.body
  console.log(req.body,"ttttt")
 try{
   axios.post('https://api.noones.com/noones/v1/trade-chat/post',{message:msg,trade_hash:hash}, {
     headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Bearer ${token} `
          }
      })
 .then(response => {
     console.log('Access Token:', response.data);
     res.status(200).json({
       status: 'success',
       data:response.data
   });
 })
 .catch(error => {
     console.error('Error:', error);
 });






}catch(e){
   console.log(e)
}

}








exports.getImage= async (req, res, next) => {
  const {token,hash,msg} = req.body
  console.log(req.body,"ttttt")
 try{
   axios.post('https://api.noones.com/noones/v1/trade-chat/post',{message:msg,trade_hash:hash}, {
     headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Bearer ${token} `
          }
      })
 .then(response => {
     console.log('Access Token:', response.data);
     res.status(200).json({
       status: 'success',
       data:response.data
   });
 })
 .catch(error => {
     console.error('Error:', error);
 });






}catch(e){
   console.log(e)
}

}



exports.getUser= async (req, res, next) => {
  const {token} = req.body
  console.log(req.body,"ttttt")
 try{
   axios.post('https://api.noones.com/noones/v1/user/wallet-balances',{}, {
     headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Bearer ${token} `
          }
      })
 .then(response => {
     console.log('Access Token:', response.data);
     res.status(200).json({
       status: 'success',
       data:response.data
   });
 })
 .catch(error => {
     console.error('Error:', error);
 });






}catch(e){
   console.log(e)
}

}
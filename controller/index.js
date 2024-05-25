const dotenv = require('dotenv').config()
const axios = require("axios")
exports.getAccessToken= async (req, res, next) => {
       try{
            axios.post('https://auth.noones.com/oauth2/token', {
              grant_type: 'client_credentials',
              client_id: 'gMHASTiOhmUKqIq0J8QatGVfNN0sZE4IJIOT6l9JOky4tKgm',
              client_secret: 'BhWw8UtJG1PYVhde6crAssFnEweE5MhpQ5rh8MTiX7KBcbBH'
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

}
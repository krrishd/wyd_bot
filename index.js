const Twit = require('twit')
require('dotenv').config()

const T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60 * 1000,
});

T.post(
  'statuses/update',
  { status: 'what did you do today that aligned with your values, with the person you would like to be?' },
  (err, data, response) => {
    console.log(err, data, response);
  }
);

console.log('tweeted!');
const T = require('./T');

T.post(
  'statuses/update',
  { status: 'what did you do today that aligned with your values, with the person you would like to be?' },
  (err, data, response) => {
    console.log(err, data, response);
  }
);

console.log('tweeted!');
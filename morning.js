const T = require('./T');

const today = new Date();

if (today.getDay() == 1) { // monday
  T.post(
    'statuses/update',
    { status: 'big or small, what are you afraid of this week?\n\nwhat advice and/or encouragement do you have for the folks in the replies?' },
    (err, data, response) => {
      console.log(err, data, response);
    }
  ); 
  console.log('tweeted monday morning!');
}

/*else {
  T.post(
    'statuses/update',
    { status: 'what are your hopes for today?' },
    (err, data, response) => {
      console.log(err, data, response);
    }
  );  
}*/

var api_key = 'key-e62dea4237cc45b2a5c968737823befc';
var domain = 'sandbox07d92b9d748d4a2ba4b13da790c4a733.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Rumah Cumi <postmaster@sandbox07d92b9d748d4a2ba4b13da790c4a733.mailgun.org>',
  to: 'isumi.karina72@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});

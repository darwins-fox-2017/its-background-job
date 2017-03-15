var kue = require('kue')
  , queue = kue.createQueue();

var api_key = 'key-e62dea4237cc45b2a5c968737823befc';
var domain = 'sandbox07d92b9d748d4a2ba4b13da790c4a733.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

queue.process('email', function(job, done){
  email(job.data, done);
});

function email(data, done) {
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
  // email send stuff...
  done();
}

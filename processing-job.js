var api_key = 'key-cddf40bad2028edcedeb169309a8d1b6';
var domain = 'sandboxa050a73cd5f2428c832e8d6d9649a1c8.mailgun.org';
var mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain
});

var kue = require('kue')
var queue = kue.createQueue();
console.log(`process job is running`);

queue.process('sendEmail', function (job, done) {
    kirimEmail(job.data, done);
});

function kirimEmail(data, done) {
    mailgun.messages()
        .send(data, function (error, body) {
            console.log(body);
        });
    done();
}



// var data = {
//     from: 'Kucing Beli Sabun <kucing@belisabun.com>',
//     to: '7ofpentacles@gmail.com',
//     subject: 'Hello',
//     text: 'Hello, thanks for register. Have a nice day'
// };

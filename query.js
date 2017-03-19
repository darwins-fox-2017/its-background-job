var kue = require('kue')
var queue = kue.createQueue();

var job = queue.create('sendEmail', {
        from: 'Kucing Beli Sabun <kucing@belisabun.com>',
        to: '7ofpentacles@gmail.com',
        subject: 'Hello',
        text: 'Hello, thanks for register. Have a nice day'
    })
    .save(function (err) {
        if (!err) console.log(job.id);
    });

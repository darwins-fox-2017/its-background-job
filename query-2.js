var kue = require('kue')
var queue = kue.createQueue();

var job = queue.create('sendEmail', {
        from: 'dfiozgjifdxgjfdoigiodfxgifdgifigfd <kucing@belisabun.com>',
        to: '7ofpentacles@gmail.com',
        subject: 'Hello',
        text: 'fdiogfsdigjfidgjifsigfsigfijgfjidgfijgidfsigfij'
    })
    .save(function (err) {
        if (!err) console.log(job.id);
    });

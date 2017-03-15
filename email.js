var kue     = require('kue')
  , queue   = kue.createQueue();
var CronJob = require('node-cron')

  CronJob.schedule('*/12 * * * * *', function() {
      var job = queue.create('email', {
          from: 'Rumah Cumi <postmaster@sandbox07d92b9d748d4a2ba4b13da790c4a733.mailgun.org>',
          to: 'isumi.karina72@gmail.com',
          subject: 'Hello Again',
          text: 'Testing some Mailgun awesomeness!'
          }).save( function(err){
             if( !err ) console.log( job.id );
      });
  })
  
// queue.process('email', function(job, done){
//   email(job.data.to, done);
// });

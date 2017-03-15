var express = require('express');
var router = express.Router();
var kue     = require('kue')
  , queue   = kue.createQueue();
var CronJob = require('node-cron')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  CronJob.schedule('*/12 * * * * *', function() {
      var job = queue.create('email', {
          from: 'Rumah Cumi <postmaster@sandbox07d92b9d748d4a2ba4b13da790c4a733.mailgun.org>',
          to: 'isumi.karina72@gmail.com',
          subject: 'Hello Again',
          text: 'Testing some Mailgun awesomeness!'
          }).save( function(err){
             if( !err ) console.log( job.id );
             res.redirect('/')
      });
  })
});

module.exports = router;

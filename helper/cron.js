var CronJob = require('cron').CronJob;
var email = require('../controller/emailController')

var job = new CronJob({
  cronTime: '* * 0 * * *',
  onTick: function() {
    email('didietsuryadi@gmail.com','admin@youralarm.com','eat')
  },
  start: false
});
job.start();

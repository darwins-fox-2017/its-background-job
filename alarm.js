var CronJob = require('cron').CronJob;
new CronJob('3 * * * * *', function() {
  console.log('You will see this message every 3 second');
}, null, true, 'America/Los_Angeles');

const CronJob = require('cron').CronJob
const job = new CronJob('* * * * * *', () => {
  console.log("generate backup")
}, null, true, 'America/Fortaleza')

'use strict'

const kue = require('kue')
const queue = kue.createQueue()
require('dotenv').config()

const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)

queue.process('email', (job, done) => {
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [{
        to: [{
          email: job.data.to
        }],
        subject: job.data.content
      }],
      from: {
        email: 'send_grid@example.com'
      },
      content: [{
        type: 'text/plain',
        value: job.data.content
      }]
    }
  })

  sg.API(request)
    .then(response => {
      console.log(response.statusCode)
      console.log(response.body)
      console.log(response.headers)
      done()
    })
    .catch(error => {
      // error is an instance of SendGridError
      // The full response is attached to error.response
      console.log(error.response.statusCode)
    })
})

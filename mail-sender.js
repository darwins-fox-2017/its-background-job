'use strict'

const kue = require('kue')
const queue = kue.createQueue()

let jobEmail = queue.create('email', {
  to: 'eryirawan91@gmail.com',
  subject: 'test',
  content: 'Hello sendGrid'
}).save(function (err, title) {
  if (err) console.log(err)
})

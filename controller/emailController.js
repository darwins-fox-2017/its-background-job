require('dotenv').config()

function email(to,from,subjectEmail){

    var helper = require('sendgrid').mail;
    var from_email = new helper.Email(from);
    var to_email = new helper.Email(to);
    var subject = subjectEmail;
    var content = new helper.Content('text/plain', 'Youh Should Have '+subjectEmail);
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SECRET);
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    })

  }


module.exports = email

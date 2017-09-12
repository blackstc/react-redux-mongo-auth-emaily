const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.export = app => {
  app.post('/api/surveys', requrieLogin, requireCredits, (req, res) => {
    const { title, body, subject, recipients } = req.body;

    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};

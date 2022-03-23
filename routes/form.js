const indexRouter = require('./index');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('form', { title: 'New message' });
});

router.post('/', (req, res, next) => {
  indexRouter.messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: '78',
  });
  res.redirect('/');
});

module.exports = router;

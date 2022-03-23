const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: '30',
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: '12',
  },
];

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = { router, messages };

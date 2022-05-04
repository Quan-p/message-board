var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', (req, res, next) => {
  user = req.body.title;
  description = req.body.description;
  
  messages.push({text: description, user: user, added: new Date()});
  res.redirect('/');
});

module.exports = router;

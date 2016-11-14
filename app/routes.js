// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our home page
router.get('/', function(req, res) {

  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    {name: 'Holly', email:'holly@scotch.io', avatar: 'http://placekitten.com/300/300'},
    {name: 'Chris', email:'chris@scotch.io', avatar: 'http://placekitten.com/450/450'},
    {name: 'Ado', email:'ado@scotch.io', avatar: 'http://placekitten.com/500/500'},
    {name: 'Samantha', email:'samantha@scotch.io', avatar: 'http://placekitten.com/700/700'}
  ]
  res.render('pages/about', {users: users});
});

// routes for our contact page
router.get('/contact', function(req, res) {
  var message = false;
  res.render('pages/contact', {message: message});
});
router.post('/contact', function(req, res) {
  var message = 'Thanks for contacting us, ' + req.body.name + '! We will respond shortly!';
  res.render('pages/contact', {message: message});
});

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render('index')
});

app.get('/about', function(req, res) {
    res.render('about')
  });

app.listen(3000);
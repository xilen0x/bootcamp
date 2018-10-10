const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

const bodyParser = require('body-parser');
app.use(bodyParser({extended:true}));


app.get('/', function(req,res) {
  res.send('Hello There!');
})


app.listen(3000);
console.log('Started');
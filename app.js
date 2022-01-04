require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT

//hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Middlewares
app.use(express.static('public'))


app.get('/', function (req, res) {
  res.render('home',{
    nombre:'Rodrigo Contreras',
    titulo:'Practicando Node'
  }); // si tengo que mandar un archivo se usa el sendfile
})

app.get('/generic', function (req, res) {
  res.render('generics',{
    nombre:'Rodrigo Contreras',
    titulo:'Practicando Node'
  }) // si tengo que mandar un archivo se usa el sendfile
})


app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre:'Rodrigo Contreras',
    titulo:'Practicando Node'
  }) // si tengo que mandar un archivo se usa el sendfile
})


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/rutaDeError/index.html') // si tengo que mandar un archivo se usa el sendfile
})



app.listen(port)
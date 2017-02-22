
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.get('/blog', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.get('/projects', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.get('/about', function(request, response){
  response.sendFile('index.html', {root: './public'});
});


app.listen(PORT, function(){
  console.log('Blog being server from PORT' + PORT);
});


const express = require('express');
const requestProxy = require('express-request-proxy');
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

app.get('/github/*', githubProxy);

function githubProxy(request, response){
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}


app.listen(PORT, function(){
  console.log('Blog being server from PORT' + PORT);
});

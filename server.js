
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));

app.get('*', function(request, response){
  response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function(){
  console.log('Blog being server from PORT' + PORT);
});

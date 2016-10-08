var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});
app.use(express.static('public'));

app.listen(port, function(){
  console.log('Magic happens at port: ' + port);
});

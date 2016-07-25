var express = require('express');
var time = require('./time.js');
var app = express();
var path  = require('path');

app.set('port', (process.env.PORT || 5000));


app.get('/', function (req, res) {

var file = path.join(__dirname,'index.html');

res.sendFile(file, function(error){
   if(error){
          console.log(error);
      }
      else{

      console.log('Sent homepage.');
      }
});


  });
app.use(express.static('public'));

app.get('/:timestamp',function(req,res){

var timestamp = req.params.timestamp;

res.send(time(timestamp));
  console.log('Timestamp sent.')
})

app.listen(app.get('port'), function () {
  console.log('Listening on '+  app.get('port'));
});

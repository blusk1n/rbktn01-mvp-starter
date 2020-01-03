var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo');
 var crypto = require('crypto');


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });
app.post("/input",(req,res)=>{
  //getting the request from the client
  let myData = req.body.data
  console.log(myData)
  //crypt the request
  let mykey = crypto.createCipher('aes-128-cbc', 'mydata');
  let mystr = mykey.update(myData, 'utf8', 'hex')
  mystr += mykey.final('hex');

  //now i want to send data to the client
  app.get("/input",(req,res)=>{
    res.send(mystr)
  })

  //this is to save in data base
  let myDataBase = new items.Item({data:myData ,cryptedData:mystr})
  myDataBase.save(function (err ) {
    if (err) return console.error(err);
  })

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


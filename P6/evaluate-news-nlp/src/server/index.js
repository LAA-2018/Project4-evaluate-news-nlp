var path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
var AYLIENTextAPI = require('aylien_textapi')
const dotenv = require('dotenv');
dotenv.config();

var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname)
app.use(cors());
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.post('/api', function (req, res) {
  textapi.sentiment( 
    {url: req.body.data}
  , function(error, response) {
    if (error === null) {
      console.log(response)
      res.json(response);
    }else{
      console.log(response);
    }
    
  });
})


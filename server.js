var express = require('express');
var app = express();


// enable CORS 
// so that your API is remotely testable by FCC 
var cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204


app.use(express.static('public'));




app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/current-date", function(req, res) {
	let newDate = new Date();
	
	res.json(newDate);
});


app.get("/api/:date", function(req, res) {
	const dateString = req.params.date;
	console.log(dateString);
	
	res.json({ "error" : "Invalid Date" });
});




const port = 5000;
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});









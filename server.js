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

app.get("/api", function(req, res) {
	let nowDate = new Date();
	console.log("Current date: ", nowDate);
	
	res.json({
		"unix": nowDate.getTime(),
		"utc": nowDate.toUTCString()
	});
});


app.get("/api/:date", function(req, res) {
	const dateParam = req.params.date;
	console.log(dateParam);
	
	let passedInValue;
	if (parseInt(dateParam) > 10000) {
		let unixTime = parseInt(dateParam);
		
		passedInValue = new Date(unixTime);
	} else {
		passedInValue = new Date(dateParam);
	}
	
	// {"unix": date.getTime(), "utc": date.toUTCString() }
	// { "unix": 1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT" }
	
	if (passedInValue == "Invalid Date") {
		res.json({ "error" : "Invalid Date" });
	} else {
		res.json({ "unix": passedInValue.getTime(), "utc": passedInValue.toUTCString() });
	}
	
});




const port = 5000;
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});









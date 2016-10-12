var PORT = 3330;

function start(app, http) {
	app.get('/', function(req, res) {
	    res.sendFile(__dirname + "/client/index.html")
	});

	app.get('/0.localStream', function(req, res) {
	    res.sendFile(__dirname + "/client/padTutorial/index.html")
	});

	http.listen(PORT, function(){
	  console.log('Listen on ',PORT);
	});
}

exports.start = start;
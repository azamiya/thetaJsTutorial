var PORT = 3330;

function start(app, http) {
	app.get('/', function(req, res) {
	    res.sendFile(__dirname + "/docs/index.html")
	});

	app.get('/0.localStream', function(req, res) {
	    res.sendFile(__dirname + "/docs/0.360movieLocalStream/index.html")
	});

	app.get('/1.panoramaViewer', function(req, res) {
	    res.sendFile(__dirname + "/docs/1.panoramaPictureSample/index.html")
	});

	app.get('/2.360panoramaViewer', function(req, res) {
	    res.sendFile(__dirname + "/docs/2.panoramaMovieSample/index.html")
	});

	http.listen(PORT, function(){
	  console.log('Listen on ',PORT);
	});
}

exports.start = start;
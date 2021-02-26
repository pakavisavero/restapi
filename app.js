
var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : ' ',
		database : 'pengembangan_web'
	});
	res.locals.connection.connect();
	next();
});

app.use('/api/v1/users', users);

router.get('/', function(req, res, next) {
	res.locals.connection.query('SELECT * from mahasiswa', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
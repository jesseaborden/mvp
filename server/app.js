const app = require('express')();
const bodyParser = require('body-parser');
const marvelRouter = require('./router').marvelRouter;
const port = 3000;

app.use(bodyParser.json());

app.use('/api/', marvelRouter);

app.listen(port, function(){
	console.log("Server listening on " + port);
});

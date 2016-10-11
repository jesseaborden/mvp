const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const marvelRouter = require('./router').marvelRouter;
require('./database');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + '../client/index.html'));
app.use('/api/', marvelRouter);

app.listen(port, function(){
	console.log("Server listening on " + port);
});

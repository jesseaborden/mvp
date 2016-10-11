const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const marvelRouter = require('./router').marvelRouter;
require('./database');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static('./client/'));

app.use('/api/', marvelRouter);

app.route('/*').get((req,res) )

app.listen(port, function(){
	console.log("Server listening on " + port);
});

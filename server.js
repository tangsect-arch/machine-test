const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./app/v1/models");
db.sequelize.sync();
var _ = require('lodash');
app.use('/public',express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {	
	res.sendFile(__dirname+"/app/v2/public/index.html",{req:req});	
});

require("./app/v1/routes/user.routes")(app);

// set port, listen for requests
const PORT =  8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
const { json } = require("body-parser");
var cors = require('cors');
var userroute = require("./routes/user-route");

app.set("port", 8000);
app.use(cors());

app.listen(app.get("port"), function () {
  console.log("app is running on port " + app.get("port"));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoClient.connect("mongodb://localhost:27017/appstone", function (err, database) {

  userroute.configure(app, database);

});


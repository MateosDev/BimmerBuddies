// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");


// var app = express();
// var PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:"application/vnd.api*json"}));

// app.use(express.static("app/public"));

// require("./app/routing/api-routes")(app);
// require("./app/routing/html-routes")(app);

// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
//modified and leveraged from class activities
// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/app/public/"));

// ================================================================================
// ROUTER
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
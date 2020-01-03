

//modified and leveraged from class activities
// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require("path");
// was originally getting an error asking to definite dirname, changed order of some functions and no longer getthem then. 

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../data/friends.js"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
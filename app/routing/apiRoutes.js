// 

// modified and leveraged code from class activities
// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // console.log(req.body);

    var bestMatch = {
      Username: "",
      photo: "",
      friendDifference: Infinity
    };

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference;
    //thanks for the help on the logic for this one TA's I have the es6 I was trying to do commented out below
    for (var i = 0; i < friendsData.length; i++) {
      var currentFriend = friendsData[i];
      totalDifference = 0;
      // console.log(currentFriend.Usernames);

      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(
          parseInt(currentUserScore) - parseInt(currentFriendScore)
        );
      }

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.Username = currentFriend.Username;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    friendsData.push(userData);

    res.json(bestMatch);
  });
};

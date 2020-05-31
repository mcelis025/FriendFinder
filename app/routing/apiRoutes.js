var friends = require("../data/friends.js");

// Function to export functions from here
module.exports = function (app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends 
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
    app.post("/api/friends", function (req, res) {

        var points = [];
        var ind = 0;
        var low = points[0];

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < friends[i].score.length; j++) {
                totalDifference += Math.abs(req.body.score[j] - friends[i].score[j]);
            }
            points.push(totalDifference);
        }

        for (var k = 1; k < scores.length; k++) {
            if (points[k] < low) {
                ind = k;
                low = points[k];
            }
        }

        friends.push(req.body);

        res.send(friends[ind]);
    });

};
const path = require("path");

// Function to export functions from here
module.exports = function (app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends 
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        if (reservations.length) {
            reservations.push(newReservation);

            res.json(newReservation);
            console.log('added to reservations');
        }

        console.log(newReservation);
    });

};
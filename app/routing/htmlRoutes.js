const path = require("path");

// Function to export functions from here
module.exports = function (app) {

    // A GET Route to /survey which should display the survey page 
    app.get("/survey", function (req, res) {
        res.send(path.join(__dirname, "../public/survey.html"));
    });

    // A default, catch-all route that leads to home.html which displays the home page
    app.get("/*", function (req, res) {
        res.send(path.join(__dirname, "../public/home.html"));
    });

};
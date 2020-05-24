app.get("/survey", function(req, res) {
    res.json(path.join(__dirname, "../public/survey.html"));
  });
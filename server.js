const express = require('express');

const app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

//require('./routes/apiRoutes')(app);
//require('./routes/htmlRoutes')(app);

   
app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
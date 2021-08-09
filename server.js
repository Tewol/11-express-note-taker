const express = require('express');
const fs = require('fs');
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js"); 

const app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

// ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);




app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
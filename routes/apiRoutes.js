const fs = require("fs");
const notesData = require('../data/notesData');

// ROUTING
module.exports = (app) => {
  
  app.get('/api/notes', (req, res) => res.json(notesData));
  
  //app.get('/api/waitlist', (req, res) => res.json(waitListData));

  app.get("/api/notes/:id", (req, res) => {
    
    res.json(data[Number(req.parms.id)]);

  });
  
  app.post('/api/notes', (req, res) => {
    
    if (notesData.length < 2) {
      notesData.push(req.body);
      res.json(true);
    } else {
      res.json(false);
    }
  });

};

const fs = require("fs");
//const notesData = require('../data/notesData');

// ROUTING
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      notesData = JSON.parse(data);
      res.send(notesData);
    });
  });

  app.post("/api/notes", (req, res) => {
    const notes = req.body;
    //console.log(notes);

    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      notesData = JSON.parse(data);
      notesData.push(notes);
      
      let noteID = 1;
      //loops through each note
      notesData.forEach((note, index) => {
        note.id = noteID;
        noteID++;
        return notesData;
      });

      jsonfile = JSON.stringify(notesData);

      fs.writeFile("./db/db.json", jsonfile, (err, data) => {
        if (err) throw err;
      });
    });

    res.send(" Notes posted ");
  });

  // app.delete("/api/notes", (req, res) => {
  //   const deleteNote = req.parms.id;

  //   fs.readFile("./db/db.json", (err, data) => {
  //     if (err) throw err;
  //     notesData = JSON.parse(data);

  //     //loops through each note and return.
  //     notesData.forEach((note, index) => {
  //       note.id = noteID;
  //       noteID++;
  //     });

  //     jsonfile = JSON.stringify(notesData);

  //     fs.writeFile("./db/db.json", jsonfile, (err, data) => {
  //       if (err) throw err;
  //     });
  //   });


  // });
};

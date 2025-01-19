const mongoose = require('mongoose');
const Petition = require("./petition.js");
const fs = require('fs');

// THIS LETS YOU TAKE A JSON FILE AND UPLOAD ITS CONTENT TO A SPECIFC SCHEMA
// THIS WAS JUST A TEST NOT VERY IMPORTANT

mongoose.connect('mongodb+srv://shadmansohel04:8Pn4mZAV4SJswCXt@cluster0.crj3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');

    fs.readFile('final.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        return;
      }

      try {
        const jsonArray = JSON.parse(data);

        jsonArray.forEach(async (item) => {
          try {
            await Petition.create({
              "members": item.members,
              "petitionNumber": item.no,
              "title": item.title
            });
            console.log(`Petition ${item.no} created successfully.`);
          } catch (createErr) {
            console.error(`Error creating petition with number ${item.no}:`, createErr);
          }
        });

      } catch (parseErr) {
        console.error('Error parsing JSON data:', parseErr);
      }
    });

  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

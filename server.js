// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');

// generate a new express app and call it 'app'
var app = express();

// REQUIRE THE MODELS DIRECTORY IN SERVER.JS
var db = require('./models'); //SPRINT 1 STEP 5.A

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// require bodyparser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

/************
 * DATABASE *
 ************/

/* hard-coded data */
// var albums = []; //BLOCKING OUT DATA BUT MOVING IT TO SEED.JS SPRINT 1 STEP 4.A
// albums.push({
//               _id: 132,
//               artistName: 'the Old Kanye',
//               name: 'The College Dropout',
//               releaseDate: '2004, February 10',
//               genres: [ 'rap', 'hip hop' ]
//             });
// albums.push({
//               _id: 133,
//               artistName: 'the New Kanye',
//               name: 'The Life of Pablo',
//               releaseDate: '2016, Febraury 14',
//               genres: [ 'hip hop' ]
//             });
// albums.push({
//               _id: 134,
//               artistName: 'the always rude Kanye',
//               name: 'My Beautiful Dark Twisted Fantasy',
//               releaseDate: '2010, November 22',
//               genres: [ 'rap', 'hip hop' ]
//             });
// albums.push({
//               _id: 135,
//               artistName: 'the sweet Kanye',
//               name: '808s & Heartbreak',
//               releaseDate: '2008, November 24',
//               genres: [ 'r&b', 'electropop', 'synthpop' ]
//             });



/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/albums', function (req, res) { //SPRINT 1 STEP 2.B 
  console.log('heres albums');
  
  // REFERENCING THE DB FOR INFO 
  db.Album.find({}, function(err, docs) {
  console.log('Here are my db results'); //CHECKING for db results in console SPRINT 1 STEP 5
  console.log(docs); //consoling the docs SPRINT 1 STEP 5
  res.json(docs); 
  });
  // res.json(albums) //COMMENTED OUT FROM EARLIER
});

app.post('/api/albums', function album_create (req, res) {
  var newAlbum = db.Album ({ //CREATING A NEW ALBUM IN THE DB

    name: req.body.name, //LINING UP WITH THE DB FORM FIELDS
    artistName: req.body.artistName,
    releaseDate: req.body.releaseDate,
    genres: req.body.genres
  
  });

newAlbum.save (function(err, Album) { //SAVING THE VARIABLE newAlbum to the db
    if (err) {
      return console.log('There is an error');

      }
      res.json(Album);
    
    });
    res.send(req.body);

});




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

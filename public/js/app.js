/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var sampleAlbums = []; //COMMENTED OUT HARD CODED DATA FOR SPRINT 1 STEP 2.A
// sampleAlbums.push({
//              artistName: 'Ladyhawke',
//              name: 'Ladyhawke',
//              releaseDate: '2008, November 18',
//              genres: [ 'new wave', 'indie rock', 'synth pop' ]
//            });
// sampleAlbums.push({
//              artistName: 'The Knife',
//              name: 'Silent Shout',
//              releaseDate: '2006, February 17',
//              genres: [ 'synth pop', 'electronica', 'experimental' ]
//            });
// sampleAlbums.push({
//              artistName: 'Juno Reactor',
//              name: 'Shango',
//              releaseDate: '2000, October 9',
//              genres: [ 'electronic', 'goa trance', 'tribal house' ]
//            });
// sampleAlbums.push({
//              artistName: 'Philip Wesley',
//              name: 'Dark Night of the Soul',
//              releaseDate: '2008, September 12',
//              genres: [ 'piano' ]
//            });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');
  // renderAlbum(sampleAlbums[0]); SPRINT 1 STEP 1.C
// Grabbing info from the sampleAlbums array 
// sampleAlbums.forEach(function(album) { //Referenceing the hardcoded sampleAlbums info SPRINT 1 STEP 1.D
//   renderAlbum(album);
//   });

// get data from /api/albums, then render it using renderAlbum function
  $.get('/api/albums', function(albums) { //SPRINT 1 STEP 1.A
  console.log('heres my albums');
  

  albums.forEach(function (oneAlbum) {
    // Add a new row for each element of the response
    renderAlbum(oneAlbum);
  });
  // console.log(albums);
  });
  


// SPRINT 2 STEP 2

// $('#newAlbumForm').on('submit', function (event) {
//   event.preventDefault();

//   // Take the data from the form and serialize it SPRINT 2 STEP 2
//   var formData = $(this).serialize();
//   console.log('form data is ' + $(this).serialize());

//   // send the serialized data to the server
//   $.post('/api/album', formData, function(response) {
//     console.log('form submitted successfully');
  
//   });

// });
$('form').submit(function(e) {
  e.preventDefault();

var formData = $(this).serialize();

$(this).trigger('reset');

  $.ajax ({
    url: '/api/albums',
    type: 'POST',
    data: formData,
    dataType: 'string'
  }).done(function (data) {

    });

  });

});
// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);

  var albumHtml =
  "        <!-- one album -->" +
  "        <div class='row album' data-album-id='" + "HARDCODED ALBUM ID" + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 album-art'>" +
  "                     <img class='img-fluid' src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name:</h4>" +
  "                        <span class='album-name'>" + album.name + "</span>" + //modified the hard data with album.name SPRINT 1
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" +  album.artistName + "</span>" + //modified the hard data with album.artistName SPRINT 1
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + album.releaseDate + "</span>" + //modified the hard data with album.releaseDate SPRINT 1
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +
  "          </div>" +
  "          <!-- end one album -->";

  // render to the page with jQuery
  $('#albums').append(albumHtml); //Sprint 1 to render the albums info with the .append STEP 1.B
}

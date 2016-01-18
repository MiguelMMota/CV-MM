
//Name and Role
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2>%data%</h2>'; // what does <hr> really do? ---> faz uma linha
var HTMLbioPic = '<img src = "%data%" alt = "Photo" class="biopic">' //como configurar o elemento em css e não aqui? #photo?
//var HTMLbioPic = '<img src="%data%" class="biopic">';

//About me
var HTMLaboutMe = '<p>%data%</p>';

//Get in touch with me
var HTMLaddressText = '<p class="contact-text">Address:&nbsp</p>';
var HTMLaddress = '<p>%data%</p><br>';

var HTMLemailAddressText = '<p class="contact-text">Email:&nbsp</p>';
var HTMLemailAddress = '<p>%data%</p><br>';

var HTMLmobileText = '<p class="contact-text">Mobile:&nbsp</p>';
var HTMLmobile = '<p>%data%</p><br>';

var HTMLmobile2 = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemailAddress2 = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';

//Experience
var HTMLworkEmployer = '<h4>%data%</h4><a href="#"></a>';
var HTMLworkTitle = '<div class="title-text">%data%</div>';
var HTMLworkDates = '<p style="font-style:italic">%data%</p>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p><br>';
//var HTMLworkDescription2 = '<p>%data%</p>';

//Skills - Technical, Personal, and Language
var HTMLskill = '<p class="rightColumn-text">%data%</p>';
var HTMLskillLevel = '<p class=rightColumn-bar> %data% NAO SEI COMO FAZER ESTA BARRA</p><br>';
//var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

//Education
var HTMLeducationSchool = '<h4>%data%</h4>';
//var HTMLeducationURL = '<a href="%URL%"></a>';
var HTMLeducationSubject = '<p style="font-style:italic">%data%</p>';
//var HTMLeducationSubject = '<div class="title-text">%data%</div>';
var HTMLeducationLocation = '<div class="location-text">%data%</div>';
var HTMLeducationDates = '<p style="font-style:italic">%data%</p>';
var HTMLeducationDescription = '<p style="float:left"><br>%data%</p><br>';
var HTMLeducationLevel = '<p style="text-decoration: underline;float:right"><br>Grade: %data%</p>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

//Projects
var HTMLprojectTitle = '<h4>%data%</h4>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src = "%data%" '

var HTMLprojectImageNumber = 'alt = "Project %number% image" class = "projectPic">';

//Where I've been
var googleMap = '<div id="map"></div>';

//Awards & Achievements

//What I like to do


/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

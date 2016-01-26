
//Name and Role
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2>%data%</h2>';
var HTMLbioPic = '<img src = "%data%" alt = "Photo" class="biopic">';

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
var HTMLworkStart = '<div class = "row" id = "job%data%" style="padding:0px;padding-left:15px"><div class = "col-md-5" id = "job%data%date"></div><div class = "col-md-7" id = "job%data%text"></div></div>';
var HTMLworkEmployer = '<h4>%data%</h4><a href="#"></a>';
var HTMLworkTitle = '<div class="title-text">%data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p><br>';

//Education
var HTMLeducationStart = '<div class = "row" id = "school%data%" style="padding:0px;padding-left:15px"><div class = "col-md-5" id = "school%data%date"></div><div class = "col-md-7" id = "school%data%text"></div></div>';
var HTMLeducationSchool = '<h4>%data%</h4>';
//var HTMLeducationURL = '<a href="%URL%"></a>';
//var HTMLeducationSubject = '<p style="font-style:italic">%data%</p>';
var HTMLeducationSubject = '<div class="title-text" style = "float:none;">%data%</div>'
//var HTMLeducationSubject = '<div class="title-text">%data%</div>';
var HTMLeducationLocation = '<div class="location-text">%data%</div>';
var HTMLeducationDates = '<div class="date-text">%data%</p>';
var HTMLeducationDescription = '<p style="float:left;padding-top:20px;margin-bottom:25px">%data%</p><br>';
var HTMLeducationLevel = '<p style="text-decoration: underline;float:right;padding-top:0px;margin-bottom:0px;">Grade: %data%</p>';

var HTMLeducationOnlineCourses = '<div class = "col-md-12" style = "padding:0px;"id="courses"><h6 style = "line-height=20px;font-size:20px;font-weight=500px;">ONLINE COURSES</h6></div></div>';
var HTMLeducationCourseStart = '<div class = "row" id = "course%data%" style="padding:0px;padding-left:15px"><div class = "col-md-5" id = "course%data%date"></div><div class = "col-md-7" id = "course%data%text"></div></div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

//Projects

var HTMLprojectMessage = '<p class="date-text">Click the pictures for further information</p>'
var HTMLprojectTitle = '<h4>%data%</h4>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p style="padding-right:30px"><br>%data%</p>';
var HTMLprojectImage = '<img src = "%data%" ';
var HTMLprojectImageNumber = 'alt = "Project %number% image" class = "projectPic" data-toggle="modal" data-target="#modalProject%number%">';

//Modals
var HTMLmodalTitle = '<h4 class="modal-title" id="myModalLabel1">%data%</h4>';
var HTMLmodalImage = '<img class="projectPic" src="%data%" alt="Project Image" >';
var HTMLmodalDescription = '<p><br>%data%</p>';// style="padding-right:30px"

//Skills - Technical, Personal, and Language
var HTMLtechnicalSkillStart = '<div class = "row" id = "technicalSkill%data%" style="padding:0px;padding-left:15px"><div class = "col-md-5" id = "technicalSkill%data%text"></div><div class = "col-md-7" id = "technicalSkill%data%level"></div></div>';
var HTMLpersonalSkillStart = '<div class = "row" id = "personalSkill%data%" style="padding:0px;padding-left:15px"><div class = "col-md-5" id = "personalSkill%data%text"></div><div class = "col-md-7" id = "personalSkill%data%level"></div></div>';
var HTMLlanguageSkillStart = '<div class = "row" id = "languageSkill%data%" style="padding:0px;padding-left:15px"><div class = "col-md-5" id = "languageSkill%data%text"></div><div class = "col-md-7" id = "languageSkill%data%level"></div></div>';
var HTMLskill = '<p class="rightColumn-text">%data%</p>';
var HTMLskillBlueBar = '<div class="blueBar" style = "width:%data%px;"></div>';
var HTMLskillGreyBar = '<div class="whiteBar"></div>';

//Achievements
var HTMLachievementStart = '<div class = "row" id = "achievement%data%" style="padding:0px;padding-left:15px"><div class = "col-md-3" id = "achievement%data%date"></div><div class = "col-md-9" id = "achievement%data%text"></div></div>';
var HTMLachievementDescription = '<p style="float:left;margin-top:10px;padding-top:0px;margin-bottom:15px">%data%</p><br>';
var HTMLachievementDates = '<div class="date-text">%data%</div>';

var HTMLinterestStartRow = '<div class = "row" id = "interestRow%data%" style="padding:0px;padding-left:15px"><div class = "col-md-3" id = "interest%data%-0"></div><div class = "col-md-3" id = "interest%data%-1"></div><div class = "col-md-3" id = "interest%data%-2"></div><div class = "col-md-3" id = "interest%data%-3"></div></div>';
var HTMLinterestDescription = '<div style="text-align:center;margin-top:10px;padding-top:0px;margin-bottom:10px;color:#00242f;">%data%</div><br>';
var HTMLinterestImage = '<img class="blockImage" src="%data%" alt="Image">';

//Where I've been
var googleMap = '<div id="map"></div>';

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
/*var map;    // declares a global map variable


//Start here! initializeMap() is called when page is loaded.

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };
 
  //For the map to be displayed, the googleMap var must be
  //appended to #mapDiv in resumeBuilder.js. 
  
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  //locationFinder() returns an array of every location string from the JSONs
  //written for bio, education, and work.
  
  function locationFinder() {

    var locations = [];
   
    locations.push(bio.contacts.location);

    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    work.jobs.forEach(function(job){
      locations.push(job.location);
    }); // ESTA FUNÇÃO ESTÁ DIFERENTE!!!

    return locations;
  }

  
  //createMapMarker(placeData) reads Google Places search results to create map pins.
  //placeData is the object returned from search results containing information
  //about a single location.
  
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
      infoWindow.open(map,marker); //ISTO AQUI FOI MUDADO!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  
  //callback(results, status) makes sure the search returned results for a location.
  //If so, it creates a new map marker for that location.
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  
  //pinPoster(locations) takes in the array of locations created by locationFinder()
  //and fires off Google place searches for each location
  
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

// ESTA FUNÇÃO TAMBÉM FOI MUDADA!!!

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

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

*/

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
    disableDefaultUI: false
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    for (var contact in bio.contacts) {
      locations.push(bio.contacts[contact].location);
    }

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    locations.push ("Paris, France");
    locations.push ("Angers, France");
    locations.push ("Brussels, Belgium");

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

      infoWindow.open(map,marker);
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
    for (var place in locations) {

      // the search request object
      var request = { query: locations[place] };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
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
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
/*
TODO:
1) Estão a aparecer os contactos, mas não sei como pôr dinamicamente na mesma linha um dado a negrito, e outro sem ser a negrito (CHECK)
2) Barras horizontais/verticais amarelas
3) Espaçamento
4) Dados do work experience a aparecer corretamente (CHECK)
5) Links dos meus empregadores a funcionar
6) Alinhamento das datas com o respetivo emprego
7) URL da FEUP a funcionar
8) Education.subject a aparecer na página
9) Queries to handle divice width
*/

var bio = {
    "name": "Miguel M. Mota",
    "role": "Front-End Developer",
    "pictureURL": "images/me.png",
    "aboutMe": "I'm a front-end developer, looking to embrace a great opportunity. I accumulate my university studies in Electrical and Computer Engineering with my own personal research or online courses on front-end development tools. I've had many fulfilling experiences while living and working in several countries accross Europe. Recently settled in the United Kingdom, I'm looking to apply my skills in an exciting project",
    "contacts": {
        "address": "7, Wherstead Road, IP2 8JQ, Suffolk, UK",
        "mobile": "(+44) 79136 37670",
        "emailAddress": "mota.m.miguel@gmail.com",
        "gitHub": "none",
        "twitter": "none",
        "linkedIn": "none",
        "location": "Ipswich"
    },
    "awardsAndAchievements": ["2-year volunteer service in France and Belgium (2008-2010)", "Created and managed an A cappella group (2013-2014)", 
    						"International LDS Institute Diploma (2010-2014)", 
    						"Member of the honor board every year of high school and junior high (2002-2008)",  
    						"Interviewed by a national magazine for an article on tips for success in school (2008)", 
    						"Class president (2002, 2003, 2005)", 
    						"Several achievements in math competitions: 'Jogo do 24' school winner (2002), School Math Olympiads winner (2003)", 
    						"Regional Math Olympiads winner (2004), School “Equamat” winner (2005)"],   
    "interests": ["Music (piano, guitar, composing)", "football", "Gaming", "Reading", "Volunteering", "and most of all...", "husband"]
}

var work = {
	"jobs": [{
		"employer": "Churchill",
		"title": "Cleaning Assistant",
		"location": "Ipswich, United Kingdom",
		"dates": "Oct 2015 - PRESENT",
		"description": "Temporary cleaning job"
	}, {
		"employer": "Gressingham Foods",
		"title": "Quality Assistant",
		"location": "Woodbridge, United Kingdom",
		"dates": "Oct 2015 - Dec 2015",
		"description": "Temporary job during Christmas season, doing quality control in the food industry"
	}, {
		"employer": "Missionary Training Center",
		"title": "Teacher",
		"location": "Madrid, Spain",
		"dates": "Dec 2011 - Jul 2015",
		"description": "I worked mainly as a teacher to one or more groups of missionaries at a time, preparing them for a full-time service in portuguese, spanish, english or french speaking countries around the world. I also provided translation in these languages, delivered group presentations, and did individual tutoring"
	}, {
		"employer": "FEUP - Faculdade de Engenharia da Universidade do Porto",
		"title": "Teacher's Assistant",
		"location": "Porto, Portugal",
		"dates": "Feb 2014 - Jul 2014",
		"description": "I was offered this opportunity along with other top students in our class, to assist in teaching students in earlier years. My main responsibilites included analyzing theoretical subjects in class, introducing practical assignments, tutoring, revising and grading projects and exercises. The class I assisted in was on Automated Systems, and covered topics such as state diagrams, Grafcet, sensors and actuators, different automated system implementations for simple requirements"
	}, {
		"employer": "Telecommunications Institute",
		"title": "Researcher",
		"location": "Porto, Portugal",
		"dates": "Feb 2014 - Jul 2014",
		"description": "I assisted in code debugging, and testing application parameters, as part of a research scholarship for a project called Codestream. The scope of the project was to develop a tool to significantly reduce bandwidth consumption in packet exchange. The application resorted to an algorithm drew on packet correlation to add redundancy to the message, which, when interpreted at the receiving end, allowed for error detection, reducing the need to resend packets on error occurrence"
	}]
}

var projects = {
	"projects" : [{
		"title" : "1, 2, 3... Sold!",
		"dates" : "Feb 2014 - Jul 2014",
		"description" : "An auction platform, with many of the funcionalities of other tools such as ebay, amazon. Project developed as part of an optional university class on Database and Web Appications, focusing on database management, server communication, and front-end development. Worked with HTML, CSS, Javascript, JQuery, Bootstrap, JSON, SQL",
		"images" : ["images/placekitten.jpg"]
	},
	{
		"title" : "Java application",
		"dates" : "Feb 2013 - Jul 2013",
		"description" : "University project as part of a class on Programming. The purpose of the project was to create a 2.5D game in Java. The requirements were evocative of the popular game Minecraft, where the play would evade enemies by destroying and building blocks on the map. As our client was a primary school, additional features were implemented to allow players to answer simple questions, in order to accumulate points and gain stronger utensils. The main challenges of the project included planning the implementation of every requirement, server setup for multiplayer experience, as well as visual programming",
		"images" : ["images/fry.jpg"]
	},
	{
		"title" : "Line follower",
		"dates" : "Sep 2012 - Feb 2013",
		"description" : "University project as part of a class on Computers. The purpose of the project was to challenge the students to work with an Arduino board, both the electronic side and the programmable aspect. Main tasks included planning the electrical configuration, programming the servo and stepper motors as well as the sensors, to make the car follow both black or white lines, in any direction",
		"images" : ["images/app.png"]
	}]
}

var education = {
	"schools": [{
		"name": "FEUP - Faculdade de Engenharia da Universidade do Porto",
		"location": "Porto, Portugal",
		"subject": "Electronic and Computer Engineering",
		"dates": "2008-Present",
		"schoolURL": "www.fe.up.pt",
		"level": "17.0/20",
		"description": "asjcaosidoisjadoijO"
	}],
	"online courses": [{
		"title": ["JavaScript Crash Course","HTML, CSS, DOM", "Object-Oriented Javascript"],
		"school": "Udacity",
		"dates": "2015-2016",
		"url": ["https://www.udacity.com/course/ud804","https://www.udacity.com/course/viewer#!/c-ud304", "https://www.udacity.com/course/viewer#!/c-ud015"],
		"description": "asdoasidjoasijdoij"
	}]
}

//Grafcet, ST - 80; Matlab - 70
var skills = {
	"technicalSkills": [{"skill": "C, C++",
						"level": "90"
					}, {
						"skill": "Java",
						"level": "65"
					}, {
						"skill":"SQL",
						"level": "70"
					}, {
						"skill": "HTML, CSS, Javascript",
						"level":"90"
					}, {
						"skill": "Python",
						"level": "55"
					}, {
						"skill": "Microsoft Offce, MAC OS",
						"level": "95"
					}],
	"personalSkills": [{"skill": "Teamwork",
						"level": "80"
					}, {
						"skill": "Leadership",
						"level": "75"
					}, {
						"skill":"Organization",
						"level": "85"
					}, {
						"skill": "Motivation",
						"level":"90"
					}],
	"languageSkills": [{"skill": "English",
						"level": "100"
					}, {
						"skill": "Portuguese",
						"level": "100"
					}, {
						"skill":"Spanish",
						"level": "65"
					}, {
						"skill": "French",
						"level":"90"
					}, {
						"skill": "Mandarin",
						"level":"35"
					}]
				}				

// Header - Name, role and pic
var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
var biopic = HTMLbioPic.replace ("%data%", bio.pictureURL);

$("#nameAndRole").prepend(formattedRole);
$("#nameAndRole").prepend(formattedName);
$("#photo").append(biopic); // funciona?

//1st Row - "About me" and "Get in touch with me" 
var formattedAboutMe = HTMLaboutMe.replace ("%data%", bio.aboutMe);
$("#about").append(formattedAboutMe); // funciona?

var formattedAddress = HTMLaddress.replace ("%data%", bio.contacts.address);
var addressLine = HTMLaddressText + formattedAddress;

var formattedEmailAddress = HTMLaddress.replace ("%data%", bio.contacts.emailAddress);
var emailAddressLine = HTMLemailAddressText + formattedEmailAddress;

var formattedMobile = HTMLmobile.replace ("%data%",bio.contacts.mobile);
var mobileLine = HTMLmobileText + formattedMobile;

$("#contacts").append(addressLine);
$("#contacts").append(emailAddressLine);
$("#contacts").append(mobileLine);

//Experience
work.display = function () {
	if (work.jobs.length > 0) {
		var formattedEmployer;
		var formattedJobTitle;
		var formattedDates;
		var formatedLocation;
		var formattedWorkDescription;

		for (job in work.jobs) {
			formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
			$("#jobs:last").append(formattedEmployer);
			formattedJobTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
			$("#jobs:last").append(formattedJobTitle);

			formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$("#jobs:last").append(formattedLocation);

			formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$("#jobs:last").append(formattedWorkDescription);
			
			formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$("#dates:last").append(formattedDates);
		}
	}
}	

//Education
education.display = function () {
	if (education.schools.length > 0) {
		var formattedSchool;
		var formattedSubject;
		var formattedLocation;
		var formattedDates;
		var formattedLevel;
		var formattedDescription;

		for (school in education.schools) {

			formattedSchool = HTMLeducationSchool.replace ("%data%", education.schools[school].name);
//			formattedURL = HTMLeducationURL.replace("%URL%", education.schools[school].schoolURL);
			$("#courses:last").append(formattedSchool);

			formattedLocation = HTMLeducationLocation.replace("%data%", education.schools[school].location);
			$("#courses:last").append(formattedLocation);

			formattedDates = HTMLeducationDates.replace("%data%", education.schools[school].dates);
			$("#datesSchool:last").append(formattedDates);

			formattedDescription = HTMLeducationDescription.replace("%data%", education.schools[school].description);
			$("#courses:last").append(formattedDescription);

			formattedLevel = HTMLeducationLevel.replace("%data%", education.schools[school].level);
			$("#courses:last").append(formattedLevel);
		}
	}
}	

projects.display = function () {
	
	if (projects.projects.length > 0) {

		var formattedTitle;
		var formattedDates;
		var formattedDescription;
		var formatedImageNumber;
		var formatedImage;
		var printID;
		var projectNumberInt;
		var projectNumberString;

		for (project in projects.projects) {
			printID = "#project" + project + ":last";
			//$("#projects:last").append(printID);

			projectNumberInt = parseInt(project);
			projectNumberInt++;

			//$(printID).append(projectNumberInt);
			//$(printID).append(projectNumberInt.toString());
			projectNumberString = projectNumberInt.toString();
			
			formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
			formattedImageNumber = formattedImage + HTMLprojectImageNumber.replace("%number%", projectNumberString);
			$(printID).append(formattedImageNumber);

			//<img src = "images/placekitten.jpg" alt = "Project 1 image">
		
			formattedTitle = HTMLprojectTitle.replace ("%data%", projects.projects[project].title);
			$(printID).append(formattedTitle);
			
			formattedDates = HTMLprojectDates.replace ("%data%", projects.projects[project].dates);
			$(printID).append(formattedDates);

			formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			//$(printID).append(formattedDescription);
		}
	}
}

//Technical Skills
skills.displayTechnical = function () {
	if (skills.technicalSkills.length > 0) {
		var formattedSkill;
		var formattedLevel;
		for (skill in skills.technicalSkills) {
			formattedSkill = HTMLskill.replace("%data%", skills.technicalSkills[skill].skill);
			$("#technicalSkills:last").append(formattedSkill);
			formattedLevel = HTMLskillLevel.replace ("%data%", skills.technicalSkills[skill].level);
			$("#technicalSkills:last").append(formattedLevel);
		}
	}
}

//Personal Skills
skills.displayPersonal = function () {
	if (skills.personalSkills.length > 0) {
		var formattedSkill;
		var formattedLevel;

		for (skill in skills.personalSkills) {
			
			formattedSkill = HTMLskill.replace("%data%", skills.personalSkills[skill].skill);
			$("#personalSkills:last").append(formattedSkill);
			formattedLevel = HTMLskillLevel.replace ("%data%", skills.personalSkills[skill].level);
			$("#personalSkills:last").append(formattedLevel);
		}
	}
}

//Language Skills
skills.displayLanguage = function () {
	if (skills.personalSkills.length > 0) {
		var formattedSkill;
		var formattedLevel;

		for (skill in skills.languageSkills) {
			formattedSkill = HTMLskill.replace("%data%", skills.languageSkills[skill].skill);
			$("#languageSkills:last").append(formattedSkill);
			formattedLevel = HTMLskillLevel.replace ("%data%", skills.languageSkills[skill].level);
			$("#languageSkills:last").append(formattedLevel);
		}
	}
}

work.display ();
education.display();
projects.display();
skills.displayTechnical ();
skills.displayPersonal ();
skills.displayLanguage ();
//$("#madDiv").append(googleMap);
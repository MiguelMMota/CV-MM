/*
TODO:
1) Alinhamento das datas com o respetivo emprego
2) Queries to handle divice width
3) Links - empregos, cursos, interesses
4) Modals
5) Map
*/

var bio = {
    "name": "Miguel M. Mota",
    "role": "Junior Software Developer",
    "pictureURL": "images/me.png",
    "aboutMe": "I am an ambitious and dedicated IT professional, soon to graduate (Summer 2016) with the equivalent of a 1st class honours from the University of Porto in Electronic and Computer Engineering. I have relocated to the UK from Portugal and I am now hoping to start my career in the IT industry.  Ultimately I hope to work in software development and I have a broad knowledge of several languages including C, C++, Java, SQL as well as front end tools such as HTML, Javascript and CSS and some examples of my work can be found below, however initially I am looking for any role that will allow me to build my knowledge of software application development in a commercial environment.  I am fluent in English, French and Spanish, and proficient in Mandarin and I have my own transport.",
    "contacts": {
        "address": "7, Wherstead Road, IP2 8JQ, Suffolk, UK",
        "mobile": "(+44) 79136 37670",
        "emailAddress": "mota.m.miguel@gmail.com",
    },
    "interests": [{
    	"description": "Music",
    	"image": "images/music.png"
    }, {
    	"description": "Football", 
    	"image": "images/football.png"
    }, {
    	"description": "Gaming",
    	"image": "images/gaming.png"
    }, {
    	"description": "Reading", 
    	"image": "images/reading.png"
    }, {
    	"description": "Volunteering", 
    	"image": "images/volunteering.png"
    }, {
    	"description": "Travelling",
    	"image": "images/airplane.png"
    }, {
    	"description": "and most of all...",
    	"image": ""
    }, {
    	"description": "Husband",
    	"image": "images/husband.png"
    }]
}

var achievements = {
	"achievements": [{
		"description": "Personal assistant to mission president, overseeing the work of a team of 150 people in two different countries", 
		"date": "2009-2010"
	}, {
		"description": "2-year volunteer service in France and Belgium",
		"date": "2008-2010"
	}, {
		"description": "High School Music Diploma", 
		"date": "2008"
	}, {
		"description": "Interviewed by a national magazine for an article on tips for success in school", 
		"date": "2008"
	}, {
		"description": "Member of the honor board every year of high school and junior high",
		"date": "2002-2008"
	}, {
		"description": "Several achievements in math competitions",
		"date": "2002-2005"
	}]
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
		"description" : "An auction platform, with many of the funcionalities of other tools such as ebay, amazon. Project developed as part of an optional university class on Database and Web Appications, focusing on database management, server communication, and front-end development. The whole project involved HTML, CSS, Javascript, JQuery, Bootstrap, JSON, SQL, but my responsibilities were revolved mostly around database management",
		"images" : ["images/auction.jpg"]
	},
	{
		"title" : "Java application",
		"dates" : "Feb 2013 - Jul 2013",
		"description" : "University project as part of a class on Programming. The purpose of the project was to create a 2.5D game in Java. The requirements were evocative of the popular game Minecraft, where the play would evade enemies by destroying and building blocks on the map. As our client was a primary school, additional features were implemented to allow players to answer simple questions, in order to accumulate points and gain stronger utensils. The main challenges of the project included planning the implementation of every requirement, server setup for multiplayer experience, as well as visual programming",
		"images" : ["images/java_game.png"]
	},
	{
		"title" : "Line follower",
		"dates" : "Sep 2012 - Feb 2013",
		"description" : "University project as part of a class on Computers. The purpose of the project was to challenge the students to work with an Arduino board, both the electronic side and the programmable aspect. Main tasks included planning the electrical configuration, programming the servo and stepper motors as well as the sensors, to make the car follow both black or white lines, in any direction",
		"images" : ["images/line_follower.jpg"]
	}]
}

var education = {
	"schools": [{
		"name": "FEUP - Faculdade de Engenharia da Universidade do Porto",
		"location": "Porto, Portugal",
		"subject": "Electronic and Computer Engineering",
		"dates": "2010-2014",
		"schoolURL": "www.fe.up.pt",
		"level": "17.0/20 - First Class",
		"description": "Masters Program with heavy emphasis on programming and computer engineering. Initiated major in Telecommunications. Achieved top results, including in classes based on C, Java, SQL, HTML, CSS, Javascript, Grafcet, Verilog, and other programming languages",
		"haltReason": "Due to funding issues I have taken a study break from 2014-Present to get married and relocate to the UK. I will be completing my final exams in Summer 2016"
	}],
	"onlineCourses": [{
		"title": "JavaScript Crash Course",
		"school": "Udacity",
		"dates": "Dec 2015- Jan 2016",
		"url": "https://www.udacity.com/course/ud804",
		"description": "Basic Javascript online course"
	}, {
		"title": "HTML, CSS, DOM",
		"school": "Udacity",
		"dates": "Jan 2016",
		"url": "https://www.udacity.com/course/viewer#!/c-ud304",
		"description": "Basic HTML and CSS course"
	}, {
		"title": "Object-Oriented Javascript",
		"school": "Udacity",
		"dates": "Jan 2016",
		"url": "https://www.udacity.com/course/viewer#!/c-ud015",
		"description": "Intermediate level Javascript course, with focus on object-oriented Javascript, leading to the study of different class patterns, such as pseduclassical subclasses"
	}]
}

var agency = {
	"agency": {
		"name": "Bristow Holland",
		"director": "Andy Bristow",
        "address": "Basepoint, 70-72 The Havens, Ipwich IP3 9BF",
        "telephone": "(+44) 1473 722944",
        "mobile": "(+44) 7919008543",
        "emailAddress": "andy@bristowholland.com",
        "location": "Ipswich, United Kingdom"
	}
}

//Grafcet, ST - 160; Matlab - 140, Level out of 200
var skills = {
	"technicalSkills": [{"skill": "C, C++",
						"level": "180"
					}, {
						"skill": "Java",
						"level": "140"
					}, {
						"skill":"SQL",
						"level": "150"
					}, {
						"skill": "HTML, CSS, Javascript",
						"level":"180"
					}, {
						"skill": "Python",
						"level": "130"
					}, {
						"skill": "Microsoft Offce, MAC OS",
						"level": "190"
					}],
	"personalSkills": [{"skill": "Teamwork",
						"level": "170"
					}, {
						"skill": "Leadership",
						"level": "150"
					}, {
						"skill":"Organization",
						"level": "170"
					}, {
						"skill": "Motivation",
						"level":"180"
					}],
	"languageSkills": [{"skill": "English",
						"level": "200"
					}, {
						"skill": "Portuguese",
						"level": "200"
					}, {
						"skill":"Spanish",
						"level": "140"
					}, {
						"skill": "French",
						"level":"180"
					}, {
						"skill": "Mandarin",
						"level":"80"
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

//Agency
var formattedAddress = HTMLaddress.replace ("%data%", agency.agency.address);
var addressLine = HTMLaddressText + formattedAddress;

var formattedEmailAddress = HTMLaddress.replace ("%data%", agency.agency.emailAddress);
var emailAddressLine = HTMLemailAddressText + formattedEmailAddress;

var formattedMobile = HTMLmobile.replace ("%data%",agency.agency.mobile);
var mobileLine = HTMLmobileText + formattedMobile;

var formattedTelephone = HTMLtelephone.replace ("%data%",agency.agency.telephone);
var telephoneLine = HTMLtelephoneText + formattedTelephone;

$("#contacts-agency").append(addressLine);
$("#contacts-agency").append(emailAddressLine);
$("#contacts-agency").append(telephoneLine);
$("#contacts-agency").append(mobileLine);

//Personal
var formattedAddress = HTMLaddress.replace ("%data%", bio.contacts.address);
var addressLine = HTMLaddressText + formattedAddress;

var formattedEmailAddress = HTMLaddress.replace ("%data%", bio.contacts.emailAddress);
var emailAddressLine = HTMLemailAddressText + formattedEmailAddress;

var formattedMobile = HTMLmobile.replace ("%data%",bio.contacts.mobile);
var mobileLine = HTMLmobileText + formattedMobile;

$("#contacts-personal").append(addressLine);
$("#contacts-personal").append(emailAddressLine);
$("#contacts-personal").append(mobileLine);

//Experience
work.display = function () {
	if (work.jobs.length > 0) {
		var formattedNewJob;
		var formattedEmployer;
		var formattedJobTitle;
		var formattedDates;
		var formatedLocation;
		var formattedWorkDescription;
		var jobTextID;
		var jobDateID;

		for (job in work.jobs) {

			formattedNewJob = HTMLworkStart.replace (/%data%/g,job.toString());
			$("#workExperience:last").append(formattedNewJob);

			jobTextID = "#job" + job + "text:last";
			jobDateID = "#job" + job + "date:last";

			formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
			$(jobTextID).append(formattedEmployer);

			formattedJobTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
			$(jobTextID).append(formattedJobTitle);

			formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(jobTextID).append(formattedLocation);

			formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(jobTextID).append(formattedWorkDescription);
			
			formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(jobDateID).append(formattedDates);
		}
	}
}	

//Education
education.display = function () {
	if (education.schools.length > 0) {
		var formattedNewSchool;
		var formattedSchool;
		var formattedSubject;
		var formattedLocation;
		var formattedDates;
		var formattedLevel;
		var formattedDescription;
		var formattedHaltReason;
		var schoolTextID;
		var schoolDateID;

		for (school in education.schools) {
			formattedNewSchool = HTMLeducationStart.replace (/%data%/g,school.toString());
			$("#education:last").append(formattedNewSchool);

			schoolTextID = "#school" + school + "text:last";
			schoolDateID = "#school" + school + "date:last";

			formattedSchool = HTMLeducationSchool.replace ("%data%", education.schools[school].name);
//			formattedURL = HTMLeducationURL.replace("%URL%", education.schools[school].schoolURL);
			$(schoolTextID).append(formattedSchool);

			formattedSubject = HTMLeducationSubject.replace("%data%", education.schools[school].subject);
			$(schoolTextID).append(formattedSubject);

			formattedLocation = HTMLeducationLocation.replace("%data%", education.schools[school].location);
			$(schoolTextID).append(formattedLocation);

			formattedDescription = HTMLeducationDescription.replace("%data%", education.schools[school].description);
			$(schoolTextID).append(formattedDescription);

			formattedLevel = HTMLeducationLevel.replace("%data%", education.schools[school].level);
			$(schoolTextID).append(formattedLevel);

			formattedHaltReason = HTMLeducationHaltReason.replace("%data%", education.schools[school].haltReason);
			$(schoolTextID).append(formattedHaltReason);

			formattedDates = HTMLeducationDates.replace("%data%", education.schools[school].dates);
			$(schoolDateID).append(formattedDates);
		}
	}

	if (education.onlineCourses.length>0) {
		var formattedNewCourse;
		var formattedCourse;
		var formattedCourseSchool;
		var formattedCourseDates;
		var courseDescription;
		var formattedCourseDescription;
		var courseTextID;
		var courseDateID;

		$("#education:last").append(HTMLeducationOnlineCourses);

		for (course in education.onlineCourses) {
			formattedNewCourse = HTMLeducationCourseStart.replace (/%data%/g,course.toString());
			$("#courses:last").append(formattedNewCourse);

			courseTextID = "#course" + course + "text:last";
			courseDateID = "#course" + course + "date:last";

			formattedCourseSchool = HTMLeducationSchool.replace ("%data%", education.onlineCourses[course].school);
			$(courseTextID).append(formattedCourseSchool);

			formattedCourse = HTMLeducationSubject.replace ("%data%", education.onlineCourses[course].title);
			$(courseTextID).append(formattedCourse);

			courseDescription = HTMLeducationDescription.replace("%data%", education.onlineCourses[course].description);
			$(courseTextID).append(courseDescription);

			formattedDates = HTMLeducationDates.replace("%data%", education.onlineCourses[course].dates);
			$(courseDateID).append(formattedDates);
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

		var modalTitle;
		var modalImage;
		var modalDescription;
		var modalPrintID;


		$("#projects:last").append(HTMLprojectMessage);

		for (project in projects.projects) {
			projectNumberInt = parseInt(project);
			projectNumberInt++;

			printID = "#project" + projectNumberInt + ":last";
			
			projectNumberInt = parseInt(project);
			projectNumberInt++;
			projectNumberString = projectNumberInt.toString();
			
			formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
			formattedImageNumber = formattedImage + HTMLprojectImageNumber.replace(/%number%/g, projectNumberString);
			$(printID).append(formattedImageNumber);

			formattedTitle = HTMLprojectTitle.replace ("%data%", projects.projects[project].title);
			$(printID).append(formattedTitle);
			
			formattedDates = HTMLprojectDates.replace ("%data%", projects.projects[project].dates);
			$(printID).append(formattedDates);

			formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
//			$(printID).append(formattedDescription);			

			modalPrintID = "modalHeader" + projectNumberInt + ":last";

			modalTitle = HTMLmodalTitle.replace("%data%", projects.projects[project].title);
			$(modalPrintID).append(modalTitle);
			$(printID).append(modalPrintID);

	//		modalImage = HTMLmodalImage.replace ("%data%", projects.projects[project].images[0]);
		//	modalDescription = HTMLmodalDescription.replace("%data%", projects.projects[project].description);
	//		$("#modalBody1:last").append(modalImage);
		//	$("#modalBody1:last").append(modalDescription);
		}
	}
}

//Technical Skills
skills.displayTechnical = function () {
	if (skills.technicalSkills.length > 0) {
		var formattedNewSkill;
		var formattedSkill;
		var formattedBlueBar; //representing the skill level;
		var skillTextID;
		var skillLevelID;

		for (skill in skills.technicalSkills) {
			formattedNewSkill = HTMLtechnicalSkillStart.replace (/%data%/g,skill.toString());
			$("#technicalSkills:last").append(formattedNewSkill);

			skillTextID = "#technicalSkill" + skill + "text:last";
			skillLevelID = "#technicalSkill" + skill + "level:last";
			formattedSkill = HTMLskill.replace("%data%", skills.technicalSkills[skill].skill);
			$(skillTextID).append(formattedSkill);
			formattedBlueBar = HTMLskillBlueBar.replace ("%data%", (skills.technicalSkills[skill].level));
			$(skillLevelID).append(HTMLskillGreyBar);
			$(skillLevelID).append(formattedBlueBar);
		}
	}
}

//Personal Skills
skills.displayPersonal = function () {
	if (skills.personalSkills.length > 0) {
		var formattedNewSkill;
		var formattedSkill;
		var formattedBlueBar; //representing the skill level;
		var skillTextID;
		var skillLevelID;

		for (skill in skills.personalSkills) {
			formattedNewSkill = HTMLpersonalSkillStart.replace (/%data%/g,skill.toString());
			$("#personalSkills:last").append(formattedNewSkill);

			skillTextID = "#personalSkill" + skill + "text:last";
			skillLevelID = "#personalSkill" + skill + "level:last";
			formattedSkill = HTMLskill.replace("%data%", skills.personalSkills[skill].skill);
			$(skillTextID).append(formattedSkill);
			formattedBlueBar = HTMLskillBlueBar.replace ("%data%", (skills.personalSkills[skill].level));
			$(skillLevelID).append(HTMLskillGreyBar);
			$(skillLevelID).append(formattedBlueBar);
	}
}
}

//Language Skills
skills.displayLanguage = function () {
	if (skills.personalSkills.length > 0) {
		var formattedNewSkill;
		var formattedSkill;
		var formattedBlueBar; //representing the skill level;
		var skillTextID;
		var skillLevelID;

		for (skill in skills.languageSkills) {
			formattedNewSkill = HTMLlanguageSkillStart.replace (/%data%/g,skill.toString());
			$("#languageSkills:last").append(formattedNewSkill);

			skillTextID = "#languageSkill" + skill + "text:last";
			skillLevelID = "#languageSkill" + skill + "level:last";
			formattedSkill = HTMLskill.replace("%data%", skills.languageSkills[skill].skill);
			$(skillTextID).append(formattedSkill);
			formattedBlueBar = HTMLskillBlueBar.replace ("%data%", (skills.languageSkills[skill].level));
			$(skillLevelID).append(HTMLskillGreyBar);
			$(skillLevelID).append(formattedBlueBar);
		}
	}
}

//Awards & Achievements
achievements.display = function () {
	if (achievements.achievements.length > 0) {
		var formattedNewAchievement;
		var formattedAchievementDescription;
		var formattedAchievementDate; 
		var achievementTextID;
		var achievementDateID;

		for (achievement in achievements.achievements) {
			formattedNewAchievement = HTMLachievementStart.replace (/%data%/g,achievement.toString());
			$("#achievements:last").append(formattedNewAchievement);

			achievementTextID = "#achievement" + achievement + "text:last";
			achievementDateID = "#achievement" + achievement + "date:last";
			formattedAchievementDescription = HTMLachievementDescription.replace("%data%", achievements.achievements[achievement].description);
			$(achievementTextID).append(formattedAchievementDescription);
			formattedAchievementDate = HTMLachievementDates.replace ("%data%", achievements.achievements[achievement].date);
			$(achievementDateID).append(formattedAchievementDate);
		}
	}
}

//Interests
bio.displayInterests = function () {
	if (bio.interests.length > 0) {
		var formattedNewInterest;
		var formattedInterestDescription;
		var formattedInterestImage; 
		var interestID;
		var column = 0;
		var line = 0;

		for (interest in bio.interests) {
		
			if (column === 0) {
				formattedNewInterest = HTMLinterestStartRow.replace (/%data%/g,line.toString());
				$("#interests:last").append(formattedNewInterest);
			}			

			interestID = "#interest" + line + "-" + column + ":last";

			formattedInterestImage = HTMLinterestImage.replace ("%data%", bio.interests[interest].image);
			
			if (bio.interests[interest].description == "and most of all...") {
				$(interestID).append('<div class="blockImage"></div>');

			} else { 
				$(interestID).append(formattedInterestImage);
			}

			formattedInterestDescription = HTMLinterestDescription.replace("%data%", bio.interests[interest].description);
			$(interestID).append(formattedInterestDescription);

			column++;
			if (column === 4) {
				column = 0;
				line++;
			}
		}
	}
}

$("#madDiv").append(googleMap);

work.display ();
education.display();
projects.display();
skills.displayTechnical();
skills.displayPersonal();
skills.displayLanguage();
achievements.display();
bio.displayInterests();


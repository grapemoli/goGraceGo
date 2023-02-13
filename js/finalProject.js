/*
TITLE: finalProject.js
AUTHOR: Grace Nguyen
PURPOSE: Javascript page for protype spec & GGG
ORIGINALLY CREATED ON: 15 November 2022
LAST MODIFIED ON: 15 November 2022
LAST MODIFIED BY: Grace Nguyen (GN)
MODIFICATION HISTORY:
15 November 2022 - copy JS from jQuery UI preset -GN
16 November 2022 - add menu event handlers -GN
16 November 2022 - made and added favicon + logo;  added effect -GN
17 Novmeber 2022 - created and linked the other pages -GN
22 November 2022 - scrape all form data -GN
29 November 2022 - connect to jQuery validation plugin, changing scraping method for all forms -GN
*/

/**********

	Default Methods/Event Handlers by jQuery UI Library

************/
projectLanguages = ["C", "C++", "Java", "JavaScript", "Perl", "Python", "Ruby", "Swift", "Visual Basic", "Other"]

$( "#accordion" ).accordion();

var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme",
	"Swift",
	"Visual Basic"
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});

// buttons!
$( "button" ).button();
$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});

$( "#radioset" ).buttonset();

$( "#controlgroup" ).controlgroup();

$( "#tabs" ).tabs();

$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#datepicker" ).datepicker({
	inline: true
});

$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});

$( "#progressbar" ).progressbar({
	value: 20
});

$( "#spinner" ).spinner();

$( "#menu" ).menu();

$( "#tooltip" ).tooltip();

$( "#homeMenu" ).selectmenu();

// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);

/************

		Methods/Event Handlers Added by Grace Nguyen

*************/
/*
	Navigation Menu Methods
*/
/*
	openNav()
	Goal: when user opens the naviation, open the menu and unfocus the document body
	Paramters: None
	Returns: None
*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; // 'unfocus' from the screen by making document grey
}

/*
	closeNav()
	Goal: when user closes the navigation, close the menu and return to 'normal'
	Parameters: none
	Returns: none
*/
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

/*
	Menu Event handlers
	Goals: open and close the navigation menu on clicks
	Parameters: None
	Returns: None
*/
var menuOpen = document.getElementById("menuOpen");
menuOpen.onclick = openNav;
var menuClose = document.getElementById("menuClose");
menuClose.onclick = closeNav;

/*
	logo Event Handler
	Goal: just a simple shaking event handler ... shake the logo
	Parameters: none
	Returns: none
*/
$("#logo").click(function() {
  $(this).effect( "shake" );
});


/*
	Contact Form B Event Handler
	Goal: get the user input and open dialog based on user inputs
	Parameters: None
	Returns: none
*/
$("#dialog-link").click(function(){
	var userInput = $("#spinner").val(); // store user input

	if(userInput < 6) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	}else{
		window.location.replace("index.html");
	} // end if-else
});


/*
	Project Filter Event Handler
	$("#filterResetBtn").click(function() {
		window.location.replace("projects.html");
	});
*/


/*
	Admin Access Event Handlers
	- Goal: change pages when user clicks button of associated page
	- Paramters: None
	- Returns: none
*/
$("#toAddProject").click(function(){
	window.location.replace("addProject.html");
});

$("#backToAdminBtn").click(function(){
	window.location.replace("loginB.html");
});


/*
	About Me Event handlers
	Goal: buttons, when clicked, will open the associated pages
	Parameters: None
	Return: none
*/
$("#githubIcon").click(function() {
	window.location.replace("https://github.com/grapemoli");
});

$("#gggIcon").click(function() {
	window.location.replace("index.html");
});

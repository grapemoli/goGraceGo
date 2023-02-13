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
*/
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

// navigation menu
// source: w3schools
// changes to source: made event handlers in seperate js file
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; // unfocus screen by making main document grey
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

// event handlers for navigation menu
var menuOpen = document.getElementById("menuOpen");
menuOpen.onclick = openNav;
var menuClose = document.getElementById("menuClose");
menuClose.onclick = closeNav;

// logo effects: jQuery SHAKE!
$("#logo").click(function() {
  $(this).effect( "shake" );
});


// contact form events!!
$("#contactSubmitBtn").click(function() {
	var name = $( "#name" ).val();
	strOutput = name + " for contacting me! Look for a response within two days!"
	// TODO: delete
	alert("user name: " + name);
});


// contact form b events!
// limit the spinner values
$("#spinner").spinner({min: 1, max: 10}); // limit spinner values from 1 - 10

// get user input, open dialog based on spinner input
$("#dialog-link").click(function(){
	var userInput = $("#spinner").val();

	if(userInput < 6) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	}else{
		window.location.replace("index.html");
	} // end if-else
});


// misc. login events!
$("#loginSubmitBtn").click(function() {
	return false;
});


// project filter selection form!
$("#filterSubmitBtn").click(function() {
	// this event handler will get all user inputs and print them to the output area!
	$("#filterOutput").append("<br>Selected Language(s):")

	var arrChecked = $('input[type="checkbox"]:checked').map(function() {
    return $(this).val();
  }).get();

	// concatenate all selected languages to strOutput if applicable
	var i = arrChecked.length - 1;
	do {
		if(i == -1) {
			strOutput = strOutput + "<br>- none<br>"
		}else{
			$("#filterOutput").append("<br>- " + arrChecked[i]);
			i--;
		} // end if-else
	} while (i > -1); // end do-while

	// concatenate year selected to strOutput if applicable
	var strYearSelected = $('#yearSelection').val();
	if(strYearSelected != "0") {
		$("#filterOutput").append("<br><br>Selected Year: " + strYearSelected);
	} // end if

	return false; // TO DO: delete later!!
});

$("#filterResetBtn").click(function() {
	window.location.replace("projects.html");
});


// administrator access pages' event handlers!!!
$("#toAddProject").click(function(){
	window.location.replace("addProject.html");
});

$("#backToAdminBtn").click(function(){
	window.location.replace("loginB.html");
});


// about me buttons
$("#githubIcon").click(function() {
	window.location.replace("https://github.com/grapemoli");
});

$("#gggIcon").click(function() {
	window.location.replace("index.html");
});

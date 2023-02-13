/*
TITLE: jqueryValidation.js
AUTHOR: Grace Nguyen
PURPOSE: Javascript page for protype spec & GGG
ORIGINALLY CREATED ON: 29 November 2022
LAST MODIFIED ON: 29 November 2022
LAST MODIFIED BY: Grace Nguyen (GN)
MODIFICATION HISTORY:
29 November 2022 - connect to jQuery validation plugin, changing scraping method for all forms -GN
29 November 2022 - custom jQuery validations -GN
05 December 2022 - form testing, and changing validation areas for better experience -GN
*/

$(document).ready(function() {
	/*
    UI Library Definitions
  */
	$( "input[type='submit']" ).button();
	$( "input[type='reset']" ).button();

	$.validator.setDefaults({
		/*
      Submit Event Handler
      Goal: scrape data from fields when the user clicks on the submit button
      Parameters: None
      Returns: None
    */
		submitHandler: function() {
			/*
				Contact Form - scraping data and validating
			*/
			// getting data from contact forms
			var name = $( "#name" ).val();
			var email = $("#email").val();
			var number = $("#phoneNumber").val();
			var status = "";
      var msg = $("#contactMessage").val();
			var rating = $("#spinner").val();

			// check checklist
			$('input[name="status"]:checked').each(function() {
				status += $(this).val();
			});

			// outputting data to the correct output area
			$("#contactOutputField").append("<br>Name: " + name);
			$("#contactOutputField").append("<br>Email: " + email);
			$("#contactOutputField").append("<br>Number: " + number);
			$("#contactOutputField").append("<br>Status: " + status);
      $("#contactOutputField").append("<br>Message: " + msg);
			$("#contactOutputField").append("<br>Rating: " + rating);

			/*
				Login Form - scrapping data and validating
			*/
			var username = $("#username").val();
			var password = $("#password").val();

			$("#loginOutputField").append("<br>Username: " + username + "<br>Password: " + password);

			/*
				Filter Form - scraping data and validating
			*/
			$("#filterOutput").append("<br>Selected Language(s):")

			var arrChecked = $('input[type="checkbox"]:checked').map(function() {
				$("#filterOutput").append("<br>- " + $(this).val());
		  }).get();

			var strYearSelected = $('#yearSelection').val();
			$("#filterOutput").append("<br><br>Selected Year: " + strYearSelected);

			/*
				Add Project Form - scraping data and validating
			*/
			var projectName = $("#addProjectName").val();
			var language = $("#autocomplete").val();
			var link = $("#addProjectLink").val();
			var file = $("#addProjectFile").val();
			var date = $("#datepicker").val();
			var description = $("#addProjectDescription").val();

			$("#addProjectOutputField").append("<br>Name: " + projectName + "<br>Main PL: " + language + "<br>Link: " + link + "<br>File: " + file + "<br>Date: " + date + "<br>Description: " + description);

		}, // end submitHandler - scraping data and validating

		/*
      Error Message Placement
      Goal: Place messages in a way that does not move elements
      Parameters: error and elements
      Returns: None
    */
		errorPlacement: function(error, element) {
      if (element.attr("name") == "adminUsername" || element.attr("name") == "adminPassword" ) {
        error.insertAfter("#loginSubmitBtn");
      }else if (element.attr("name") == "rating") {
        error.insertAfter("#resetBtn")
      }else if (element.attr("name") == "pl") {
				error.insertAfter("#other")
			}else {
        error.insertAfter(element);
      } // end if-else
		} // end errorPlacement
	}); // end validator.setDefaults


  /*
    Contact Form
    Goal: Use custom rules and error messages when validating
    Parameters: None
    Returns: none
  */
	$("#contactForm").validate({
    rules: {
      // <input name = "contactName">
      contactName: {
        required: true
      },

      // <input name = "email">
      email: {
          required: true,
          email: true
      },

      // <input name = "phoneNumber">
      phoneNumber: {
          required: true,
          maxlength: 10,
          digits: true
      },

      // <input name = "status">
      status: {
        required: true
      },

      // <input name = "contactMessage">
      contactMessage: {
        required: true,
        maxlength: 1000,
        minlength: 5
      },

      // <input name = "rating">
      rating: {
        required: true,
        range: [0, 10]
      },
    }, // end rules

    messages: {
      // <input name="phoneNumber">
      phoneNumber: {
        maxlength: "Please enter a valid phone number."
      },

      // <input name="contactMessage">
      contactMessage: {
        minlength: "Please input at least 5 characters.",
        maxlength: "You have reached the maximum character length."
      },

      // <input name="rating">
      rating: {
        required: "Please fill the user experience survey!",
				range: "Satisfaction must be between 0 and 10."
      },
    } // end messages
  });

  /*
    Login Form - custom rules
  */
	$("#loginForm").validate({
    rules: {
      // <input name = "adminUsername" >
      adminUsername: {
        required: true
      },

      // <input name = "adminPassword" >
      adminPassword: {
        required: true
      },
    }, // end rules

    messages: {
      /*
        These messages are displayed when user inputs wrong password/username.
      */
      // <input name="adminUsername">
      adminUsername: {
          required: "<br>Username required"
      },

      // <input name="adminUsername">
      adminPassword: {
        required: "<br>Password required"
      },

    } // end messages
  });

  /*
    Filter Form - custom rules
  */
	$("#filterForm").validate({
		rules: {
      // <input name="filterYear">
			filterYear: {
        required: true,
      },

			// <input name="pl">
			pl: {
        required: true,
      },
		}, // end rules

		messages: {
      // <input name="pl">
      pl: {
        required: "Please select a language."
      },
    } // end messages
	});

  /*
    Add Project Form - custom rules
  */
	$("#addProjectForm").validate({
    rules: {
      // <input name="addProjectName">
      addProjectName: {
        required: true,
        minlength: 4,
        maxlength: 50
      },

      // <input name="addProjectLanguage">
      addProjectLanguage: {
        required: true,
        maxlength: 12
      },

      // <input name="addProjectLink">
      addProjectLink: {
        required: true,
        url: true
      },

      // <input name="addProjectFile">
      addProjectFile: {
        required: true
      },

      // <input name="addProjectDate">
      addProjectDate: {
        required: true,
        dateISO: true
      },

      // <input name="addProjectDescription">
      addProjectDescription: {
        required: true,
        minlength: 5,
        maxlength: 800
      },
    }, // end rules

    messages: {
      // <input name="addProjectName"
      addProjectName: {
        minlength: "Minimum: 4 characters",
        maxlength: "Maxmimum: 50 characters"
      },

      // <input name="addProjectLanguage">
      addProjectLanguage: {
        required: "This field is required",
        maxlength: "Invalid programming language"
      },

      // <input name="addProjectLink">
      addProjectLink: {
        url: "Invalid URL"
      },

      // <input name="addProjectDate">
      addProjectDate: {
        required: "Input a date",
        dateISO: "Invalid date"
      },

      // <input name="addProjectDescription">
      addProjectDescription: {
        required: "Please provide a short summary!",
        minlength: "Minimum: 5 characters",
        maxlength: "Maximum: 800 characters"
      },
    } // end messages
  });
}); // end (document).ready

// Function for writing to the document
function writeToDocument(idInTheDocument, variableInJsFile) {
  document.getElementById(idInTheDocument).innerHTML = variableInJsFile;
};

// Getting the actual week number
Date.prototype.getWeek = function () {
    let onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
};

let weekNow = (new Date()).getWeek();

let menuIsToggled = false;

$(document).on("click", ".toggle-nav", function (event) {
    event.preventDefault();
      $(this).siblings(".menu").slideToggle();
      menuIsToggled = true;
    }
);

//function for the menu
$(document).on("click", "a.menu-item", function (event) {
  event.preventDefault();
  $("a.active").removeClass("active");
  $(this).addClass("active");
});

let matchDataLoaded = true;
let matchResultsLoaded = false;
let matchGoalsLoaded = false;

document.querySelector("#menu-matches").addEventListener("click", function() {
  if (matchDataLoaded === false) {
    matchDataLoaded = true;
    matchResultsLoaded = false;
    matchGoalsLoaded = false;
    $("#results-output").slideToggle("fast");
    $("#results-output").html("");
    showMatchData();
    $("#results-output").slideToggle("fast");
    if (menuIsToggled === true) {
      menuIsToggled = false;
      $(".main-navigation").find(".menu").slideToggle();
    }
  }
});

document.querySelector("#menu-results").addEventListener("click", function() {
  if (matchResultsLoaded === false) {
    matchResultsLoaded = true;
    matchDataLoaded = false;
    matchGoalsLoaded = false;
    $("#results-output").slideToggle("fast");
    $("#results-output").html("");
    showMatchResults();
    $("#results-output").slideToggle("fast");
    if (menuIsToggled === true) {
      menuIsToggled = false;
      $(".main-navigation").find(".menu").slideToggle();
    }
  }
});

document.querySelector("#menu-goals").addEventListener("click", function() {
  if (matchGoalsLoaded === false) {
    matchResultsLoaded = false;
    matchDataLoaded = false;
    matchGoalsLoaded = true;
    $("#results-output").slideToggle("fast");
    $("#results-output").html("");
    showMatchGoals();
    $("#results-output").slideToggle("fast");
    if (menuIsToggled === true) {
      menuIsToggled = false;
      $(".main-navigation").find(".menu").slideToggle();
    }
  }
});

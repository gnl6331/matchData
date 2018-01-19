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
// Checking the week number in the console. Must be removed before deployment of the app
console.log(weekNow);

$(document).on("click", ".toggle-nav", function (event) {
    event.preventDefault();
      $(this).siblings(".menu").slideToggle();
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

document.querySelector("#menu-matches").addEventListener("click", function() {
  if (matchDataLoaded === false) {
    matchDataLoaded = true;
    matchResultsLoaded = false;
    $("#results-output").slideToggle("fast");
    $("#results-output").html("");
    showMatchData();
    $("#results-output").slideToggle("fast");
  }
});

document.querySelector("#menu-results").addEventListener("click", function() {
  if (matchResultsLoaded === false) {
    matchResultsLoaded = true;
    matchDataLoaded = false;
    $("#results-output").slideToggle("fast");
    $("#results-output").html("");
    showMatchResults();
    $("#results-output").slideToggle("fast");
  }
});

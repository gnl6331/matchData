// Key van google spreadsheet
const spreadsheetKey = "12fnZBjEJHVMtAb7_WZIvuAKbCNd4TlJ0lr60ZSloszc";

// ID van het blad, 1 is wedstrijd data, 2 is doelpunten en assists, 3 is uitslagen
const spreadsheetSheetIdMatches = 1;
const spreadsheetSheetIdGoals = 2;
const spreadheetSheetIdResults = 3;

// De basis van de json url die we maken op basis van de variablen
const jsonDataFeed = "https://spreadsheets.google.com/feeds/list/" + spreadsheetKey + "/";

// De uiteindelijke link naar de data die we maken
const jsonDataFeedMatches = jsonDataFeed + spreadsheetSheetIdMatches + "/public/values?alt=json";
const jsonDataFeedGoals = jsonDataFeed + spreadsheetSheetIdGoals + "/public/values?alt=json";
const jsonDataFeedResults = jsonDataFeed + spreadheetSheetIdResults + "/public/values?alt=json";

// Loggen om te checken of de feeds kloppen
console.log(jsonDataFeedGoals);
console.log(jsonDataFeedMatches);
console.log(jsonDataFeedResults);

const applicationTeamName = "VV Asperen MO13-1"
document.querySelector(".menu-title").innerHTML = applicationTeamName;

// Key van google spreadsheet
const spreadsheetKey = "12fnZBjEJHVMtAb7_WZIvuAKbCNd4TlJ0lr60ZSloszc";

// ID van het blad, 1 is wedstrijd data, 2 is doelpunten en assists, 3 is uitslagen
const spreadsheetSheetIdMatches = 1;
const spreadsheetSheetIdScore = 2;
const spreadheetSheetIdResults = 3;

// De basis van de json url die we maken op basis van de variablen
const jsonDataFeed = "https://spreadsheets.google.com/feeds/list/" + spreadsheetKey + "/";

// De uiteindelijke link naar de data die we maken
const jsonDataFeedMatches = jsonDataFeed + spreadsheetSheetIdMatches + "/public/values?alt=json";
const jsonDataFeedScore = jsonDataFeed + spreadsheetSheetIdScore + "/public/values?alt=json";
const jsonDataFeedResults = jsonDataFeed + spreadheetSheetIdResults + "/public/values?alt=json";

// Loggen om te checken of de feeds kloppen
console.log(jsonDataFeedScore);
console.log(jsonDataFeedMatches);
console.log(jsonDataFeedResults);

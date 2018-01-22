// Funtion for sorting the array
function compare(a, b) {
  const scoreA = a.doelpunten;
  const scoreB = b.doelpunten;

  let comparison = 0;
  if (scoreA > scoreB) {
    comparison = -1;
  } else if (scoreA < scoreB) {
    comparison = 1;
  }
    return comparison;
};

let goalsArray = [];
let goalsToHTML = "";

  const showMatchGoals = () => {
    let getJsonData = new XMLHttpRequest();
    getJsonData.onreadystatechange = () => {
        if (getJsonData.readyState === 4) {
              let retrievedDataFromSource = JSON.parse(getJsonData.responseText);
              goalsArray = [];
              goalsToHTML = "";
              for (let i = 0; i < retrievedDataFromSource.feed.entry.length; i++) {
                  //goalsArray.push(retrievedDataFromSource.feed.entry[i]);

                  goalsArray.push({
                    naam: retrievedDataFromSource.feed.entry[i].gsx$naam.$t,
                    doelpunten: parseFloat(retrievedDataFromSource.feed.entry[i].gsx$doelpunten.$t),
                    assists: parseFloat(retrievedDataFromSource.feed.entry[i].gsx$assists.$t)
                  });
                  goalsArray.sort(compare);

              }; // End of the for loop

              goalsToHTML += "<div class=\"content-container goal-results-container\">";
              goalsToHTML += "<p class=\"goals-row first-row\">";
              goalsToHTML += "<span>Naam</span><span>Doelpunten</span><span>Assists</span><span>Totaal</span>";
              goalsToHTML += "</p></div>";
              goalsToHTML += "<div class=\"content-container goal-results-container\">";
              for (let k = 0; k < goalsArray.length; k++) {
                goalsToHTML += "<p class=\"goals-row goals-results-offset\">";

                goalsToHTML += "<span>";
                goalsToHTML += goalsArray[k].naam;
                goalsToHTML += "</span>";
                goalsToHTML += "<span>";
                goalsToHTML += goalsArray[k].doelpunten;
                goalsToHTML += "</span>";
                goalsToHTML += "<span>";
                goalsToHTML += goalsArray[k].assists;
                goalsToHTML += "</span>";
                goalsToHTML += "<span>";
                goalsToHTML += goalsArray[k].doelpunten + goalsArray[k].assists;
                goalsToHTML += "</span>";

                goalsToHTML += "</p>";
              }
              goalsToHTML += "</div>";

              writeToDocument("results-output", goalsToHTML);
      }; // End of ready state
    }; // Total end

    getJsonData.open("GET", jsonDataFeedGoals);
    getJsonData.send();
  };

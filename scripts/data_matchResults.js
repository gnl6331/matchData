const showMatchResults = () => {
  let getJsonData = new XMLHttpRequest();
  getJsonData.onreadystatechange = () => {
      if (getJsonData.readyState === 4) {
            let retrievedDataFromSource = JSON.parse(getJsonData.responseText);
            let resultsToHTML = "";

            for (let i = 0; i < retrievedDataFromSource.feed.entry.length; i++) {
              let homeMatch = true;
              resultsToHTML += "<div class=\"content-container match-results-container\">"; // Start of the content container div

              if (retrievedDataFromSource.feed.entry[i].gsx$thuis.$t === "TRUE") {
                resultsToHTML += "<div class=\"match-data home-match\"><p>";// Start of the date and time div and p
              } else {
                resultsToHTML += "<div class=\"match-data away-match\"><p>";// Start of the date and time div and p
              }

              resultsToHTML += "<span>" + retrievedDataFromSource.feed.entry[i].gsx$datum.$t + "</span>";
              resultsToHTML += "<span>" + retrievedDataFromSource.feed.entry[i].gsx$tijdstip.$t + "</span>";
              resultsToHTML += "</p></div>"; // End of the date and time div and p

              resultsToHTML += "<div class=\"match-results\">"; // Start of the results, club and score

              resultsToHTML += "<p class=\"match-result-club\">";
              resultsToHTML += "<span>" + retrievedDataFromSource.feed.entry[i].gsx$thuisclub.$t + "</span>";
              resultsToHTML += "<span class=\"match-results-score\">" + retrievedDataFromSource.feed.entry[i].gsx$doelpthuisclub.$t + "</span>";
              resultsToHTML += "</p>"; // End of club and score result

              resultsToHTML += "<p class=\"match-result-club\">";
              resultsToHTML += "<span>" + retrievedDataFromSource.feed.entry[i].gsx$tegenstander.$t + "</span>";
              resultsToHTML += "<span class=\"match-results-score\">" + retrievedDataFromSource.feed.entry[i].gsx$doelptegenstander.$t + "</span>";
              resultsToHTML += "</p>"; // End of club and score result

              resultsToHTML += "</div>"; // End of the results, club and score

              resultsToHTML += "</div>"; // End of the content container div


      }; // End of the for loop

      writeToDocument("results-output", resultsToHTML);
    }; // End of ready state
  }; // Total end

  getJsonData.open("GET", jsonDataFeedResults);
  getJsonData.send();
};

const showMatchData = () => {
  let getJsonData = new XMLHttpRequest();
  getJsonData.onreadystatechange = () => {
      if (getJsonData.readyState === 4) {
            let retrievedDataFromSource = JSON.parse(getJsonData.responseText);
            let dataToHTML = "";

            for (let i = 0; i < retrievedDataFromSource.feed.entry.length; i++) {
              let homeMatch = true;

              if (retrievedDataFromSource.feed.entry[i].gsx$weeknumber.$t >= weekNow) {
                dataToHTML += "<div class=\"content-container recent-data\">";

                if (retrievedDataFromSource.feed.entry[i].gsx$home.$t === "TRUE") {
                  homeMatch = true;
                  dataToHTML += "<div class=\"head home-match\">";
                  dataToHTML += "<h2>";
                  dataToHTML += "<span>Thuis</span>";
                } else if (retrievedDataFromSource.feed.entry[i].gsx$home.$t === "FALSE") {
                  homeMatch = false;
                  dataToHTML += "<div class=\"head away-match\">";
                  dataToHTML += "<h2>";
                  dataToHTML += "<span>Uit</span>";
                }

                dataToHTML += "<span>";
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$matchdata.$t;
                dataToHTML += "</span>";

                dataToHTML += "</h2>";
                dataToHTML += "</div>"// End of the head div

                dataToHTML += "<div class=\"main-content\">";
                dataToHTML += "<h2>";
                dataToHTML += "<span>";
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$homeclub.$t;
                dataToHTML += " - ";
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$awayclub.$t;
                dataToHTML += "</span>";
                dataToHTML += "</h2>";

                if (homeMatch === true) {
                  dataToHTML += "<p><strong>Tijd aanwezig: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$arivaltime.$t; + "</p>";
                  dataToHTML += "<p><strong>Tijd aanwezig: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$playtime.$t; + "</p>";
                } else if (homeMatch === false) {
                  dataToHTML += "<p><strong>Tijd Vertrek: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$timeleave.$t; + "</p>";
                  dataToHTML += "<p><strong>Tijd spelen: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$playtime.$t; + "</p>";
                }

                dataToHTML += "<p><strong>Shirtjes wassen: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$laundryperson.$t; + "</p>";
                dataToHTML += "<h2 class=\"adres-data\"><span>Adres gegevens:</span></h2>";

                dataToHTML += "<p>";
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$clubstreetname.$t;
                dataToHTML += " " + retrievedDataFromSource.feed.entry[i].gsx$clubstreetnumber.$t;
                dataToHTML += "<br>"
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$clubzip.$t;
                dataToHTML += " " + retrievedDataFromSource.feed.entry[i].gsx$clubcity.$t;
                dataToHTML += "</p>";

                dataToHTML += "</div>"; // End of the main content div

                dataToHTML += "</div>"; // End of the content-container div
              } else {
                // Starting old content
                dataToHTML += "<div class=\"content-container old-data\">";

                if (retrievedDataFromSource.feed.entry[i].gsx$home.$t === "TRUE") {
                  homeMatch = true;
                  dataToHTML += "<div class=\"head old-background\">";
                  dataToHTML += "<h2>";
                  dataToHTML += "<span>Thuis</span>";
                } else if (retrievedDataFromSource.feed.entry[i].gsx$home.$t === "FALSE") {
                  homeMatch = false;
                  dataToHTML += "<div class=\"head old-background\">";
                  dataToHTML += "<h2>";
                  dataToHTML += "<span>Uit</span>";
                }

                dataToHTML += "<span>";
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$matchdata.$t;
                dataToHTML += "</span>";

                dataToHTML += "</h2>";
                dataToHTML += "</div>"// End of the head div

                dataToHTML += "<div class=\"main-content old-content old-text\">";
                dataToHTML += "<h2>";
                dataToHTML += "<span>";
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$homeclub.$t;
                dataToHTML += " - ";
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$awayclub.$t;
                dataToHTML += "</span>";
                dataToHTML += "</h2>";

                if (homeMatch === true) {
                  dataToHTML += "<p><strong>Tijd aanwezig: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$arivaltime.$t; + "</p>";
                  dataToHTML += "<p><strong>Tijd aanwezig: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$playtime.$t; + "</p>";
                } else if (homeMatch === false) {
                  dataToHTML += "<p><strong>Tijd Vertrek: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$timeleave.$t; + "</p>";
                  dataToHTML += "<p><strong>Tijd spelen: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$playtime.$t; + "</p>";
                }

                dataToHTML += "<p><strong>Shirtjes wassen: </strong>" + retrievedDataFromSource.feed.entry[i].gsx$laundryperson.$t; + "</p>";
                dataToHTML += "<h2 class=\"adres-data\"><span>Adres gegevens:</span></h2>";

                dataToHTML += "<p>";
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$clubstreetname.$t;
                dataToHTML += " " + retrievedDataFromSource.feed.entry[i].gsx$clubstreetnumber.$t;
                dataToHTML += "<br>"
                dataToHTML += retrievedDataFromSource.feed.entry[i].gsx$clubzip.$t;
                dataToHTML += " " + retrievedDataFromSource.feed.entry[i].gsx$clubcity.$t;
                dataToHTML += "</p>";

                dataToHTML += "</div>"; // End of the main content div

                dataToHTML += "</div>"; // End of the content-container div
              }

      }; // End of the for loop

      writeToDocument("results-output", dataToHTML);
    }; // End of ready state
  }; // Total end

  getJsonData.open("GET", jsonDataFeedMatches);
  getJsonData.send();
};

showMatchData();

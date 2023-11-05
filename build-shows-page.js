function apiRequest(endpoint) {
  const key = "dfbea7b2-c953-4935-8032-7e2755fd6d8f";  //store key from url/register

  if (!key) {
    console.error("key not found. Please register first.");
  }

  axios
    .get(`https://project-1-api.herokuapp.com/${endpoint}?api_key=${key}`) //fetch the data from api
    .then((response) => {
      console.log("API request successful:", response.data);
      function renderApiShows() {
        let reverseArr = response.data.reverse(); //reverse the array to display newly added items first
        for (var i = 0; i < reverseArr.length; i++) { //loop through the array
           // checks to make sure the comments in api have a valid name and comment before displaying
            var shows = reverseArr[i];
            const showsCon = document.getElementById("shows");
            const showsDiv = document.createElement("div");

            const hrTop = document.createElement("hr");
            const hrBottom = document.createElement("hr");

            const innerDivOne = document.createElement("div");
            const innerDivTwo = document.createElement("div");
            const innerDivThree = document.createElement("div");
            const innerDivFour = document.createElement("div");

            const dateH = document.createElement("p");
            dateH.textContent = "DATE";
            const datee = document.createElement("h5");
            datee.textContent = shows.date;

            const venueH = document.createElement("p");
            venueH.textContent = "VENUE";
            const venue = document.createElement("p");
            venue.textContent = shows.location;

            const locH = document.createElement("p");
            locH.textContent = "LOCATION";
            const loc = document.createElement("p");
            loc.textContent = shows.location;

            const buy = document.createElement("button");
            buy.textContent = "BUY TICKETS";
            buy.classList.add("buy__btn");

            innerDivOne.appendChild(dateH);
            innerDivOne.appendChild(datee);
            innerDivTwo.appendChild(venueH);
            innerDivTwo.appendChild(venue);
            innerDivThree.appendChild(locH);
            innerDivThree.appendChild(loc);

            showsDiv.appendChild(innerDivOne);
            showsDiv.appendChild(innerDivTwo);
            showsDiv.appendChild(innerDivThree);
            showsDiv.appendChild(innerDivFour);
            innerDivFour.appendChild(buy);
            showsDiv.appendChild(hrBottom);

            showsDiv.classList.add("shows__list--container");
            innerDivOne.classList.add("shows__list--datediv");
            innerDivTwo.classList.add("shows__list--venuediv");
            innerDivThree.classList.add("shows__list--locdiv");
            innerDivFour.classList.add("btn__div");

            dateH.classList.add("mercury");
            venueH.classList.add("mercury");
            locH.classList.add("mercury");

            datee.classList.add("second");
            venue.classList.add("second");
            loc.classList.add("second");

            showsCon.appendChild(showsDiv);
        }
      }

      renderApiShows(); // render all comments on page load
    })
    .catch((error) => {
      console.error("API request failed:", error.message);
    });
}

apiRequest("showdates");
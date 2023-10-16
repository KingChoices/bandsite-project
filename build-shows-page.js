const showsArr = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Franciso, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Franciso, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Franciso, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Franciso, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Franciso, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Franciso, CA",
  },
];

console.log(showsArr);

for (var i = 0; i < showsArr.length; i++) {
  var shows = showsArr[i];
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
  const datee = document.createElement("h3");
  datee.textContent = shows.date;

  const venueH = document.createElement("p");
  venueH.textContent = "VENUE";
  const venue = document.createElement("p");
  venue.textContent = shows.venue;

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

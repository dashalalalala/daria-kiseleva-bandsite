//Creating Shows List
let shows = [
	{
		dateTitle: "DATE",
		date: "Mon Sept 06 2021",
		venueTitle: "VENUE",
		venue: "Ronald Lane",
		locationTitle: "LOCATION",
		location: "San Francisco, CA",
	},

	{
		dateTitle: "DATE",
		date: "Tue Sept 21 2021",
		venueTitle: "VENUE",
		venue: "Pier 3 East",
		locationTitle: "LOCATION",
		location: "San Francisco, CA",
	},

	{
		dateTitle: "DATE",
		date: "Fri Oct 15 2021",
		venueTitle: "VENUE",
		venue: "View Lounge",
		locationTitle: "LOCATION",
		location: "San Francisco, CA",
	},

	{
		dateTitle: "DATE",
		date: "Sat Nov 06 2021",
		venueTitle: "VENUE",
		venue: "Hyatt Agency",
		locationTitle: "LOCATION",
		location: "San Francisco, CA",
	},

	{
		dateTitle: "DATE",
		date: "Fri Nov 26 2021",
		venueTitle: "VENUE",
		venue: "Moscow Center",
		locationTitle: "LOCATION",
		location: "San Francisco, CA",
	},

	{
		dateTitle: "DATE",
		date: "Wed Dec 15 2021",
		venueTitle: "VENUE",
		venue: "Press Club",
		locationTitle: "LOCATION",
		location: "San Francisco, CA",
	},
];

function createShowsListCard(show) {
  // const showCardDiv = document.createElement("div");
  // showCardDiv.classList.add("bandsite-concerts__list");

	const cardEl = document.createElement("div");
	cardEl.classList.add("bandsite-concerts__list-card");

	const dateSection = document.createElement("article");
	dateSection.classList.add("bandsite-concerts__list-card-split");

	const dateTitleEl = document.createElement("h3");
	dateTitleEl.classList.add("bandsite-concerts__list-card--title");
	dateTitleEl.innerText = show.dateTitle;

  const dateEl = document.createElement("p");
	dateEl.classList.add("bandsite-concerts__list-card--date");
  dateEl.innerText = show.date;

	const venueSection = document.createElement("article");
	venueSection.classList.add("bandsite-concerts__list-card-split");

	const venueTitleEl = document.createElement("h3");
	venueTitleEl.classList.add("bandsite-concerts__list-card--title");
	venueTitleEl.innerText = show.venueTitle;

  const venueEl = document.createElement("p");
	venueEl.classList.add("bandsite-concerts__list-card--text");
  venueEl.innerText = show.venue;

	const locationSection = document.createElement("article");
	locationSection.classList.add("bandsite-concerts__list-card-split");

	const locationTitle = document.createElement("h3");
	locationTitle.classList.add("bandsite-concerts__list-card--title");
	locationTitle.innerText = show.locationTitle;

  const locationEl = document.createElement("p");
	locationEl.classList.add("bandsite-concerts__list-card--text");
  locationEl.innerText = show.location;

	const buttonEl = document.createElement("button");
	buttonEl.classList.add("bandsite-concerts__list-card--button");
	buttonEl.innerHTML = "BUY TICKETS";

	const borderEl = document.createElement("div");
	borderEl.classList.add("bandsite-concerts__list-card--border");
	borderEl.innerHTML = "";

	// showCardDiv.append(cardEl);
	dateSection.append(dateTitleEl,dateEl);
	venueSection.append(venueTitleEl,venueEl);
	locationSection.append(locationTitle,locationEl)
  cardEl.append(dateSection, venueSection, locationSection, buttonEl, borderEl);

  return cardEl;
}

function displayCard() {
	const cardList = document.querySelector(".bandsite-concerts__list");

	for (let i = 0; i < shows.length; i++) {
		cardList.appendChild(createShowsListCard(shows[i]));
	}
}

displayCard();
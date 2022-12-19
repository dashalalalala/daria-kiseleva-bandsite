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

function createShowsListTittleCard(show) {
	const titleCardEl = document.createElement("div");
	titleCardEl.classList.add("bandsite-concerts__titles");

	const dateTitleEl = document.createElement("h3");
	dateTitleEl.classList.add("bandsite-concerts__titles--text");
	dateTitleEl.innerText = show.dateTitle;

	const venueTitleEl = document.createElement("h3");
	venueTitleEl.classList.add("bandsite-concerts__titles--text");
	venueTitleEl.innerText = show.venueTitle;

	const locationTitleEl = document.createElement("h3");
	locationTitleEl.classList.add("bandsite-concerts__titles--text");
	locationTitleEl.innerText = show.locationTitle;

	const buttonEl = document.createElement("button");
	buttonEl.classList.add("bandsite-concerts__titles--button");
	buttonEl.innerHTML = "";

	titleCardEl.append(dateTitleEl, venueTitleEl, locationTitleEl, buttonEl);

	return titleCardEl;
}

function displayCardTitles() {
	const cardTitles = document.querySelector(".bandsite-concerts__list");

	for (let i = 0; i < 1; i++) {
		cardTitles.appendChild(createShowsListTittleCard(shows[i]));
	}
}

displayCardTitles();
displayCard();

function createShowsListCard(show) {
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

	const locationTitleEl = document.createElement("h3");
	locationTitleEl.classList.add("bandsite-concerts__list-card--title");
	locationTitleEl.innerText = show.locationTitle;

	const locationEl = document.createElement("p");
	locationEl.classList.add("bandsite-concerts__list-card--text");
	locationEl.innerText = show.location;

	const buttonEl = document.createElement("button");
	buttonEl.classList.add("bandsite-concerts__list-card--button");
	buttonEl.innerHTML = "BUY TICKETS";

	// showCardDiv.append(cardEl);
	dateSection.append(dateTitleEl, dateEl);
	venueSection.append(venueTitleEl, venueEl);
	locationSection.append(locationTitleEl, locationEl);
	cardEl.append(dateSection, venueSection, locationSection, buttonEl);

	return cardEl;
}

function displayCard() {
	const cardList = document.querySelector(".bandsite-concerts__list");

	for (let i = 0; i < shows.length; i++) {
		cardList.appendChild(createShowsListCard(shows[i]));
	}
}

//Making Row Selected Function
const cardEls = document.querySelectorAll(".bandsite-concerts__list-card");

cardEls.forEach((div) => {
	div.addEventListener("click", function () {
		cardEls.forEach((d) => (d.className = "bandsite-concerts__list-card"));
		div.className = "bandsite-concerts__list-card--selected";
	});
});

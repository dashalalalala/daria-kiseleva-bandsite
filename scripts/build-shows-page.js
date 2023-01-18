//Creating Shows List with API
const getShows = () => {
	axios
		.get(
			"https://project-1-api.herokuapp.com/showdates?api_key=44dbc5e0-e66f-43b9-a593-d7ddeda814dd"
		)

		.then((response) => {
			console.log(response.data);
			let showsArray = response.data;
			showsArray.forEach(function (show) {
				show.date = new Date(show.date).toDateString();
			});
			displayCard(showsArray);
			let cardEls = document.querySelectorAll(".concerts__list-card");
			cardEls.forEach((div) => {
				div.addEventListener("click", function () {
					cardEls.forEach((d) => (d.className = "concerts__list-card"));
					div.className = "concerts__list-card--selected";
				});
			});
		})

		.catch((error) => {
			console.error(error);
		});
};

getShows();

//Creating Show Card 
function createShowsListCard(show) {
	const cardEl = document.createElement("div");
	cardEl.classList.add("concerts__list-card");

	const dateSection = document.createElement("article");
	dateSection.classList.add("concerts__list-card-split");

	const dateTitleEl = document.createElement("h3");
	dateTitleEl.classList.add("concerts__list-card--title");
	dateTitleEl.innerText = "DATE";

	const dateEl = document.createElement("p");
	dateEl.classList.add("concerts__list-card--date");
	dateEl.innerText = show.date;

	const venueSection = document.createElement("article");
	venueSection.classList.add("concerts__list-card-split");

	const venueTitleEl = document.createElement("h3");
	venueTitleEl.classList.add("concerts__list-card--title");
	venueTitleEl.innerText = "VENUE";

	const venueEl = document.createElement("p");
	venueEl.classList.add("concerts__list-card--text");
	venueEl.innerText = show.place;

	const locationSection = document.createElement("article");
	locationSection.classList.add("concerts__list-card-split");

	const locationTitleEl = document.createElement("h3");
	locationTitleEl.classList.add("concerts__list-card--title");
	locationTitleEl.innerText = "LOCATION";

	const locationEl = document.createElement("p");
	locationEl.classList.add("concerts__list-card--text");
	locationEl.innerText = show.location;

	const buttonEl = document.createElement("button");
	buttonEl.classList.add("concerts__list-card--button");
	buttonEl.innerHTML = "BUY TICKETS";

	// showCardDiv.append(cardEl);
	dateSection.append(dateTitleEl, dateEl);
	venueSection.append(venueTitleEl, venueEl);
	locationSection.append(locationTitleEl, locationEl);
	cardEl.append(dateSection, venueSection, locationSection, buttonEl);

	return cardEl;
}


function displayCard(shows) {
	const cardList = document.querySelector(".concerts__list");

	for (let i = 0; i < shows.length; i++) {
		cardList.appendChild(createShowsListCard(shows[i]));
	}
}

//Creating Titles Div for Tablet & Desktop
	const showsDiv = document.querySelector(".concerts__list");
	const titleCardEl = document.createElement("div");
	titleCardEl.classList.add("concerts__titles");

	const dateTitleEl = document.createElement("h3");
	dateTitleEl.classList.add("concerts__titles--text");
	dateTitleEl.innerText = "SHOWS";

	const venueTitleEl = document.createElement("h3");
	venueTitleEl.classList.add("concerts__titles--text");
	venueTitleEl.innerText = "VENUE";

	const locationTitleEl = document.createElement("h3");
	locationTitleEl.classList.add("concerts__titles--text");
	locationTitleEl.innerText = "LOCATION";

	const buttonEl = document.createElement("button");
	buttonEl.classList.add("concerts__titles--button");
	buttonEl.innerHTML = "";

	showsDiv.append(titleCardEl);
	titleCardEl.append(dateTitleEl, venueTitleEl, locationTitleEl, buttonEl);
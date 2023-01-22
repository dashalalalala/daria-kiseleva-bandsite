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
				var date = new Date(show.date);
				date.setDate(date.getDate() + 1);
				show.date = date.toDateString();
			});
			displayCard(showsArray);
			let cardEls = document.querySelectorAll(".card");
			cardEls.forEach((div) => {
				div.addEventListener("click", function () {
					cardEls.forEach((d) => (d.className = "card"));
					div.className = "card__selected";
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
	cardEl.classList.add("card");

	const dateSection = document.createElement("article");
	dateSection.classList.add("card__article");

	const dateTitleEl = document.createElement("h3");
	dateTitleEl.classList.add("card__title");
	dateTitleEl.innerText = "DATE";

	const dateEl = document.createElement("p");
	dateEl.classList.add("card__date");
	dateEl.innerText = show.date;

	dateSection.append(dateTitleEl, dateEl);

	const venueSection = document.createElement("article");
	venueSection.classList.add("card__article");

	const venueTitleEl = document.createElement("h3");
	venueTitleEl.classList.add("card__title");
	venueTitleEl.innerText = "VENUE";

	const venueEl = document.createElement("p");
	venueEl.classList.add("card__text");
	venueEl.innerText = show.place;

	venueSection.append(venueTitleEl, venueEl);

	const locationSection = document.createElement("article");
	locationSection.classList.add("card__article");

	const locationTitleEl = document.createElement("h3");
	locationTitleEl.classList.add("card__title");
	locationTitleEl.innerText = "LOCATION";

	const locationEl = document.createElement("p");
	locationEl.classList.add("card__text");
	locationEl.innerText = show.location;

	locationSection.append(locationTitleEl, locationEl);

	const buttonEl = document.createElement("button");
	buttonEl.classList.add("card__button");
	buttonEl.innerHTML = "BUY TICKETS";

	cardEl.append(dateSection, venueSection, locationSection, buttonEl);

	return cardEl;
}

//Display Card Function
function displayCard(shows) {
	const cardList = document.querySelector(".concerts__list");

	for (let i = 0; i < shows.length; i++) {
		cardList.appendChild(createShowsListCard(shows[i]));
	}
}

//Creating Titles Div for Tablet & Desktop (to help with CSS Styling)
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

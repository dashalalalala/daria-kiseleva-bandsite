//Creating Comments Section
const FormEl = document.querySelector("#comments-form");

//Array
let comments = [
	{
		name: "Connor Walton",
		timestamp: new Date("02/17/2021").toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}),
		commentText:
			"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
		image: "",
	},

	{
		name: "Emilie Beach",
		timestamp: new Date("01/09/2021").toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}),
		commentText:
			"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
		image: "",
	},

	{
		name: "Miles Acosta",
		timestamp: new Date("12/20/2020").toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}),
		commentText:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
		image: "",
	},
];

//Event Listener
function setupViews() {
	FormEl.addEventListener("submit", formSubmitHandler);
}

//Comment Cards
function createCommentCard(comment) {
	const commentCard = document.createElement("div");
	commentCard.classList.add("bandsite-comments-section__card");

	const imgElDiv = document.createElement("div");
	imgElDiv.classList.add("bandsite-comments-section__left");

	const imgEl = document.createElement("img");
	imgEl.classList.add("bandsite-comments-section__left--image");
	imgEl.innerHTML = comment.image;

	imgElDiv.append(imgEl);

	const commentElDiv = document.createElement("article");
	commentElDiv.classList.add("bandsite-comments-section__card-text");

	const commentNameDateDiv = document.createElement("div");
	commentNameDateDiv.classList.add("bandsite-comments-section__card-text-1");

	const nameEl = document.createElement("h3");
	nameEl.classList.add("bandsite-comments-section__card-text-1--title");
	nameEl.innerText = comment.name;

	const timestampEl = document.createElement("span");
	timestampEl.classList.add("bandsite-comments-section__card-text-1--date");
	timestampEl.innerText = comment.timestamp;

	const commentTextDiv = document.createElement("div");
	commentTextDiv.classList.add("bandsite-comments-section__card-text-2");

	const commentTextEl = document.createElement("span");
	commentTextEl.classList.add(
		"bandsite-comments-section__card-text-2--comment"
	);
	commentTextEl.innerText = comment.commentText;

	commentNameDateDiv.append(nameEl, timestampEl);
	commentTextDiv.append(commentTextEl);
	commentElDiv.append(commentNameDateDiv, commentTextDiv);
	commentCard.append(imgElDiv, commentElDiv);

	return commentCard;
}

//Comments Rendering
function displayComment() {
	const commentsList = document.querySelector(".bandsite-comments-section");

	commentsList.innerHTML = "";

	for (let i = 0; i < comments.length; i++) {
		commentsList.appendChild(createCommentCard(comments[i]));
	}
}

//Form Submit Handler
function formSubmitHandler(e) {
	e.preventDefault();

	const commentSubmission = {
		name: e.target.name.value,
		timestamp: new Date().toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}),
		commentText: e.target.comment.value,
		image: e.target.img.value,
	};

	FormEl.reset();
	comments.unshift(commentSubmission);
	displayComment();

	return false;
}

setupViews();
displayComment();
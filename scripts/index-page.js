//Creating Comments Section
const formEl = document.querySelector("#comments-form");

//Event Listener
function setupViews() {
	formEl.addEventListener("submit", formSubmitHandler);
}

//Comment Cards
function displayComment(comment) {
	const commentCard = document.createElement("div");
	commentCard.classList.add("comments-section__card");

	const imgElDiv = document.createElement("div");
	imgElDiv.classList.add("comments-section__left");

	const imgEl = document.createElement("img");
	imgEl.classList.add("comments-section__left--image");
	imgEl.innerHTML = comment.image;

	imgElDiv.append(imgEl);

	const commentElDiv = document.createElement("article");
	commentElDiv.classList.add("comments-section__card-text");

	const commentNameDateDiv = document.createElement("div");
	commentNameDateDiv.classList.add("comments-section__card-text-1");

	const nameEl = document.createElement("h3");
	nameEl.classList.add("comments-section__card-text-1--title");
	nameEl.innerText = comment.name;

	const timestampEl = document.createElement("span");
	timestampEl.classList.add("comments-section__card-text-1--date");
	// timestampEl.innerText = comment.timestamp;
	timestampEl.innerText = comment.date;

	const commentTextDiv = document.createElement("div");
	commentTextDiv.classList.add("comments-section__card-text-2");

	const commentTextEl = document.createElement("span");
	commentTextEl.classList.add("comments-section__card-text-2--comment");
	commentTextEl.innerText = comment.comment;

	commentNameDateDiv.append(nameEl, timestampEl);
	commentTextDiv.append(commentTextEl);
	commentElDiv.append(commentNameDateDiv, commentTextDiv);
	commentCard.append(imgElDiv, commentElDiv);

	return commentCard;
}

// const date = comment.date;

//API Default Comments
const getComments = () => {
	axios
		.get(
			"https://project-1-api.herokuapp.com/comments?api_key=44dbc5e0-e66f-43b9-a593-d7ddeda814dd"
		)

		.then((response) => {
			console.log(response.data);
			let commentsArray = response.data;
			commentsArray.forEach(function (comment) {
				comment.date = new Date(comment.timestamp).toLocaleDateString();
			});
			commentsArray.sort(function (a, b) {
				return b.timestamp - a.timestamp;
			});
			displayCommentsArray(commentsArray);
		})

		.catch((error) => {
			console.error(error);
		});
};

getComments();

//API New Comments
const addComment = (comments) => {
	axios
		.post(
			"https://project-1-api.herokuapp.com/comments?api_key=44dbc5e0-e66f-43b9-a593-d7ddeda814dd",
			comments
		)

		.then((response) => {
			console.log(response.data);
			getComments();
		})

		.catch((error) => {
			console.error(error);
		});
};

//Comments Rendering
function displayCommentsArray(comments) {
	const commentsList = document.querySelector(".comments-section");

	commentsList.innerHTML = "";

	for (let i = 0; i < comments.length; i++) {
		commentsList.appendChild(displayComment(comments[i]));
	}
}

//Form Submit Handler
function formSubmitHandler(e) {
	e.preventDefault();

	const commentSubmission = {
		name: e.target.name.value,
		comment: e.target.comment.value,
	};

	addComment(commentSubmission);
	formEl.reset();

	return false;
}

setupViews();

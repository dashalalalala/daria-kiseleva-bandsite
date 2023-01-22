//Creating Comments Section
const formEl = document.querySelector("#comments-form");

//Event Listener
function setupViews() {
	formEl.addEventListener("submit", formSubmitHandler);
}

//Comment Cards
function displayComment(comment) {
	const commentCard = document.createElement("div");
	commentCard.classList.add("card");

	const imgElDiv = document.createElement("div");
	imgElDiv.classList.add("card__avatar");

	const imgEl = document.createElement("img");
	imgEl.classList.add("card__avatar--image");
	imgEl.innerHTML = comment.image;

	imgElDiv.append(imgEl);

	const commentElDiv = document.createElement("article");
	commentElDiv.classList.add("comment");

	const commentNameDateDiv = document.createElement("div");
	commentNameDateDiv.classList.add("comment__user");

	const nameEl = document.createElement("h3");
	nameEl.classList.add("comment__user--name");
	nameEl.innerText = comment.name;

	const timestampEl = document.createElement("span");
	timestampEl.classList.add("comment__user--date");
	timestampEl.innerText = comment.date;

	const commentTextDiv = document.createElement("div");
	commentTextDiv.classList.add("comment__text");

	const commentTextEl = document.createElement("span");
	commentTextEl.classList.add("comment__text--comment");
	commentTextEl.innerText = comment.comment;

	commentTextDiv.append(commentTextEl);

	const divingDeeperDiv = document.createElement("div");
	divingDeeperDiv.classList.add("comment__action");

	const likeEl = document.createElement("img");
	likeEl.classList.add("comment__action--like-img");
	likeEl.src = "/assets/icons/like-button.png";

	const likeButton = document.createElement("buton");
	likeButton.classList.add("comment__action--like-button");
	likeButton.innerHTML = "";
	likeButton.setAttribute("data-comment-id", comment.id);

	likeButton.append(likeEl);

	const likeCountEl = document.createElement("p");
	likeCountEl.classList.add("comment__action--p");
	likeCountEl.innerText = comment.likes;

	const deleteEl = document.createElement("img");
	deleteEl.classList.add("comment__action--delete-img");
	deleteEl.src = "/assets/icons/delete-button.png";

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("comment__action--delete-button");
	deleteButton.innerHTML = "";
	deleteButton.setAttribute("data-comment-id", comment.id);

	deleteButton.append(deleteEl);

	//DIVs Appending Els
	commentNameDateDiv.append(nameEl, timestampEl);
	divingDeeperDiv.append(likeButton, likeCountEl, deleteButton);
	commentElDiv.append(commentNameDateDiv, commentTextDiv, divingDeeperDiv);
	commentCard.append(imgElDiv, commentElDiv);

	//Like Button Activation with PUT Request
	likeButton.addEventListener("click", function () {
		const commentId = this.getAttribute("data-comment-id");
		axios
			.put(
				`https://project-1-api.herokuapp.com/comments/${commentId}/like?api_key=44dbc5e0-e66f-43b9-a593-d7ddeda814dd`
			)
			.then(function (response) {
				const likeCount = likeCountEl;
				if (likeCount) {
					likeCount.innerHTML = response.data.likes;
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	});

	//Delete Button Activation with DELETE Request
	deleteButton.addEventListener("click", function () {
		const commentId = this.getAttribute("data-comment-id");

		axios
			.delete(
				`https://project-1-api.herokuapp.com/comments/${commentId}?api_key=44dbc5e0-e66f-43b9-a593-d7ddeda814dd`
			)
			.then(function () {
				const deleteComment = commentCard;
				if (deleteComment) {
					deleteComment.remove();
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	});

	//Returning the Comment Card
	return commentCard;
}

//API Default Comments
const getComments = () => {
	axios
		.get(
			"https://project-1-api.herokuapp.com/comments?api_key=44dbc5e0-e66f-43b9-a593-d7ddeda814dd"
		)

		.then((response) => {
			let commentsArray = response.data;
			commentsArray.forEach(function (comment) {
				var date = new Date(comment.timestamp);
				date.setDate(date.getDate());
				comment.date = date.toLocaleDateString((options = { timeZone: "UTC" }));
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
			getComments();
		})

		.catch((error) => {
			console.error(error);
		});
};

//Comments Rendering
function displayCommentsArray(comments) {
	const commentsList = document.querySelector(".comments");

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

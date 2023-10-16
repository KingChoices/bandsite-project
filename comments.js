//Comment array and objects
var commentsArr = [
  {
    name: "Connor Walton",
    timestamp: "15/14/2023",
    commentText:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "15/14/2023",
    commentText:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "15/14/2023",
    commentText:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
//Log to console to make sure array is working
console.log(commentsArr);

//Getting my container where I want to display the comments
const commentsContainer = document.getElementById("comments");
//This loop will loop through the array and display every comment it finds.
function renderComments() {
  for (var i = 0; i < commentsArr.length; i++) {
    var comment = commentsArr[i];
    const commentDiv = document.createElement("div");
    const innerDivOne = document.createElement("div");
    const img = document.createElement("img");
    const hrTop = document.createElement("hr");
    const hrBottom = document.createElement("hr");
    innerDivOne.appendChild(img);

    const innerDivTwo = document.createElement("div");
    const innerDivThree = document.createElement("div");
    const innerDivFour = document.createElement("div");
    const innerDivFive = document.createElement("div");
    const innerDivSix = document.createElement("div");

    const heading = document.createElement("h3");
    heading.textContent = comment.name;
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = comment.timestamp;

    innerDivFour.appendChild(heading);
    innerDivFive.appendChild(paragraph1);

    innerDivTwo.appendChild(innerDivThree);
    innerDivTwo.appendChild(innerDivSix);
    innerDivThree.appendChild(innerDivFour);
    innerDivThree.appendChild(innerDivFive);

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = comment.commentText;

    innerDivSix.appendChild(paragraph2);

    commentDiv.appendChild(innerDivOne);
    commentDiv.appendChild(innerDivTwo);

    commentDiv.classList.add("post__container");
    innerDivOne.classList.add("post__container--imgdiv");
    innerDivTwo.classList.add("post__container--textdiv");
    innerDivThree.classList.add("post__container--infodiv");
    innerDivFour.classList.add("post__container--namediv");
    innerDivFive.classList.add("post__container--datediv");
    innerDivSix.classList.add("post__container--commentdiv");

    commentsContainer.appendChild(commentDiv);
  }
}
//Form functionality
var formId = document.getElementById("comment__form");

var nameId = document.getElementById("name");
var commentId = document.getElementById("comment");
var submitId = document.getElementById("submit");

formId.addEventListener("submit", formSub);

const date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
const displayDate = day + "/" + month + "/" + year;

console.log(displayDate);
console.log(nameId.value + commentId.value);

function formSub(event) {
  event.preventDefault();
  console.log("Form submitted!");
  const name = nameId.value;
  const comment = commentId.value;
  console.log("Name:", name);
  console.log("Comment:", comment);
  const newComment = {
    name: name,
    timestamp: displayDate,
    commentText: comment,
  };

  console.log("New Comment:", newComment);
  commentsArr.push(newComment);

  nameId.value = "";
  commentId.value = "";

  displayComment(newComment);
}

function displayComment(comment) {
  const commentsContainer = document.getElementById("comments");
  const commentDiv = document.createElement("div");
  const innerDivOne = document.createElement("div");
  const img = document.createElement("img");
  innerDivOne.appendChild(img);

  const innerDivTwo = document.createElement("div");
  const innerDivThree = document.createElement("div");
  const innerDivFour = document.createElement("div");
  const innerDivFive = document.createElement("div");
  const innerDivSix = document.createElement("div");

  const heading = document.createElement("h3");
  heading.textContent = comment.name;
  const paragraph1 = document.createElement("p");
  paragraph1.textContent = comment.timestamp;

  innerDivFour.appendChild(heading);
  innerDivFive.appendChild(paragraph1);

  innerDivTwo.appendChild(innerDivThree);
  innerDivTwo.appendChild(innerDivSix);
  innerDivThree.appendChild(innerDivFour);
  innerDivThree.appendChild(innerDivFive);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = comment.commentText;

  innerDivSix.appendChild(paragraph2);

  commentDiv.appendChild(innerDivOne);
  commentDiv.appendChild(innerDivTwo);

  commentDiv.classList.add("post__container");
  innerDivOne.classList.add("post__container--imgdiv");
  innerDivTwo.classList.add("post__container--textdiv");
  innerDivThree.classList.add("post__container--infodiv");
  innerDivFour.classList.add("post__container--namediv");
  innerDivFive.classList.add("post__container--datediv");
  innerDivSix.classList.add("post__container--commentdiv");

  commentsContainer.appendChild(commentDiv);
}

renderComments();

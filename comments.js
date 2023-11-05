const commentsContainer = document.getElementById("comments");

function apiRequest(endpoint) {
  const key = "dfbea7b2-c953-4935-8032-7e2755fd6d8f";  //store key from url/register

  if (!key) {
    console.error("key not found. Please register first.");
  }

  axios
    .get(`https://project-1-api.herokuapp.com/${endpoint}?api_key=${key}`) //fetch the data from api
    .then((response) => {
      console.log("API request successful:", response.data);
      function renderApiComments(newApiComment) {
        let reverseArr = response.data.reverse(); //reverse the array to display newly added items first
        for (var i = 0; i < reverseArr.length; i++) { //loop through the array
          if (
            reverseArr[i].name != null &&
            reverseArr[i].comment != null
          ) { // checks to make sure the comments in api have a valid name and comment before displaying
            var info = reverseArr[i];
            const commentDiv = document.createElement("div"); 
            const innerDivOne = document.createElement("div");
            const img = document.createElement("img");
            const hrTop = document.createElement("hr");
            innerDivOne.appendChild(img);

            const innerDivTwo = document.createElement("div");
            const innerDivThree = document.createElement("div");
            const innerDivFour = document.createElement("div");
            const innerDivFive = document.createElement("div");
            const innerDivSix = document.createElement("div");

            const heading = document.createElement("h4");
            heading.textContent = info.name;
            const paragraph1 = document.createElement("p");
            paragraph1.textContent = info.timestamp;

            innerDivFour.appendChild(heading);
            innerDivFive.appendChild(paragraph1);

            innerDivTwo.appendChild(innerDivThree);
            innerDivTwo.appendChild(innerDivSix);
            innerDivThree.appendChild(innerDivFour);
            innerDivThree.appendChild(innerDivFive);

            const paragraph2 = document.createElement("p");
            paragraph2.textContent = info.comment;

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
            hrTop.classList.add("comments__hr");

            commentsContainer.appendChild(commentDiv);
            commentsContainer.appendChild(hrTop);
          }
        }
      }

      renderApiComments(); // render all comments on page load

      var formId = document.getElementById("comment__form");

      var nameId = document.getElementById("name");
      var commentId = document.getElementById("comment");
      var submitId = document.getElementById("submit");

      formId.addEventListener("submit", formSub); // form submission handler

      const date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      const displayDate = day + "/" + month + "/" + year;

      console.log(displayDate);

      function formSub(event) {
        event.preventDefault();
        console.log("Form submitted!");

        const headers = {
          "Content-Type": "application/json",
        };

        const name = nameId.value;
        const comment = commentId.value;

        const newComment = {
          name: name,
          comment: comment,
        };

        axios.post(`https://project-1-api.herokuapp.com/${endpoint}?api_key=${key}`, //posting to the api to store comments
          newComment
        )
          .then((commentCreated) => {
            console.log("comment posted", commentCreated);
            
          })
          .catch((error) => {
            console.error("The error is: ", error);
          });

        response.data.push(newComment);

        nameId.value = "";
        commentId.value = "";

        //On submission this will clear the comments array and res-display all comments with the new one.
        commentsContainer.innerHTML = "";
        renderApiComments(response.data);
      }
    })
    .catch((error) => {
      console.error("API request failed:", error.message);
    });
}

apiRequest("comments");
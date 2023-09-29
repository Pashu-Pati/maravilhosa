document.getElementById("userComment").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    publishComment();
  }
});

function publishComment() {
  const userComment = document.getElementById("userComment").value;
  if (userComment) {
    const wrapper = document.getElementById("comments_wrapper");
    const existed = Array.from(wrapper.getElementsByClassName("comments"));
    const newComment = document.createElement("div");
    newComment.className = "comments";
    newComment.id = String(existed.length);
    const profileDiv = document.createElement("div");
    profileDiv.className = "profile";
    const profileImg = document.createElement("img");
    profileImg.alt = "";
    profileImg.src = "./assets/img/0.jpg";
    profileDiv.appendChild(profileImg);
    newComment.appendChild(profileDiv);

    const contentDiv = document.createElement("div");
    contentDiv.className = "comment-content";
    const nameParagraph = document.createElement("p");
    nameParagraph.className = "name";
    const nameSpan = document.createElement("span");
    nameSpan.className = "vertical-align_inherit";
    const nameTextSpan = document.createElement("span");
    nameTextSpan.className = "vertical-align_inherit";
    nameTextSpan.textContent = "Anónimo";
    nameSpan.appendChild(nameTextSpan);
    nameParagraph.appendChild(nameSpan);
    contentDiv.appendChild(nameParagraph);

    const commentParagraph = document.createElement("p");
    const commentSpan = document.createElement("span");
    commentSpan.className = "vertical-align_inherit";
    const commentTextSpan = document.createElement("span");
    commentTextSpan.className = "vertical-align_inherit";
    commentTextSpan.textContent = userComment;
    commentSpan.appendChild(commentTextSpan);
    commentParagraph.appendChild(commentSpan);
    contentDiv.appendChild(commentParagraph);
    newComment.appendChild(contentDiv);
    const clearDiv = document.createElement("div");
    clearDiv.className = "clr";
    newComment.appendChild(clearDiv);

    const commentStatus = document.createElement("div");
    commentStatus.className = "comment-status";
    const likeSpan = document.createElement("span");
    likeSpan.className = "vertical-align_inherit";
    likeSpan.textContent = "Curte·comente";

    const likeImg = document.createElement("img");
    likeImg.src = "assets/img/like.png";
    likeImg.width = 15;
    likeImg.height = 15;

    const likeCountSpan = document.createElement("span");
    likeCountSpan.className = "vertical-align_inherit";
    likeCountSpan.textContent = "0 · ";
    commentStatus.appendChild(likeSpan);
    commentStatus.appendChild(likeImg);
    commentStatus.appendChild(likeCountSpan);
    const counterElement = document.createElement("span");
    counterElement.className = "vertical-align_inherit";
    commentStatus.appendChild(counterElement);

    const commentTimestamp = new Date();

    function updateCounter() {
      const currentTimestamp = new Date();
      const minutesElapsed = Math.floor(
        (currentTimestamp - commentTimestamp) / 60000
      );

      if (minutesElapsed < 1) {
        counterElement.textContent = "just now";
      } else {
        counterElement.textContent = minutesElapsed + " minutos antes";
      }
    }

    updateCounter();
    setInterval(updateCounter, 60000);

    newComment.appendChild(commentStatus);

    if (existed.length > 0) {
      wrapper.insertBefore(newComment, existed[1]);
    } else {
      wrapper.appendChild(newComment);
    }
    document.getElementById("userComment").value = "";
  }
}

const answers = {};

const buttons = document.querySelectorAll(".survey_button");
for (const element of buttons) {
  element.addEventListener("click", function () {
    const questionNumber = this.className.split(" ")[1];
    answers[questionNumber] = this.getAttribute("data-bq");
  });
}

function handleClick() {
  localStorage.setItem("answers", JSON.stringify(answers));
}

let saved = localStorage.getItem("answers");
if (saved) {
  console.log(JSON.parse(saved));
}

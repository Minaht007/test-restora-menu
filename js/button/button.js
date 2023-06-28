openBtn = document.querySelector(".open-more");
closeBtn = document.querySelector(".model-btn");
modelContainer = document.querySelector(".model-container");

openBtn.addEventListener("click", function () {
  modelContainer.classList.add("show-msg");
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  modelContainer.classList.remove("show-msg");
  openBtn.style.display = "block";
});

// if (modelContainer.classList.add("show-msg") == "true") {
//   openBtn.style.display = none;
// }

// const button = document.querySelector(".button");

// button.addEventListener("click", (e) => {
//   button.classList.add("animate");
//   setTimeout(() => {
//     button.classList.remove("animate");
//   }, 600);
// });

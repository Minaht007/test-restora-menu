const openModalBtn = document.querySelector(".open__modal");
const modal = document.querySelector(".modal-dialog");

openModalBtn.addEventListener("click", () => {
  modal.showModal();
});

const closeModalBtm = document.querySelector(".close__modal");
closeModalBtm.addEventListener("click", () => {
  console.log("closeModalBtm clicked");
  modal.close();
});

// // Get the dialog element
// const dialog = document.querySelector("dialog");

// // Get the form inputs
// const nameInput = document.getElementById("name");
// const phoneInput = document.getElementById("phone");
// const emailInput = document.getElementById("email");
// const commentsInput = document.getElementById("comments");

// // Function to handle form submission
// function handleSubmit(event) {
//   preventDefault();
//   console.log(event);
//   event.target;

//   // Get the values from the form inputs
//   const name = nameInput.value;
//   const phone = phoneInput.value;
//   const email = emailInput.value;
//   const comments = commentsInput.value;

//   // Perform your desired action with the form data (e.g., send request)

//   // Close the modal after form submission
//   dialog.close();

//   // Reset the form inputs
//   nameInput.value = "";
//   phoneInput.value = "";
//   emailInput.value = "";
//   commentsInput.value = "";
// }

// // Add event listener to the form submit event
// dialog.querySelector("form").addEventListener("submit", handleSubmit);

// // Open the modal when the button is clicked
// document.getElementById("openModalBtn").addEventListener("click", function () {
//   dialog.showModal();
// });

// // Close the modal when the dialog is cancelled
// dialog.addEventListener("cancel", function () {
//   dialog.close();
// });

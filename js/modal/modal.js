const openModalBtn = document.querySelector(".open__modal");
const modal = document.querySelector(".modal-dialog");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

const closeModalBtm = document.querySelector(".close__modal");
closeModalBtm.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.style.display = "none";

// ++++++++++++++++
// МОЄ
// const openModalBtn = document.querySelector(".open__modal");
// const modal = document.querySelector(".modal-dialog");

// openModalBtn.addEventListener("click", () => {
//   modal.showModal();
// });

// const closeModalBtm = document.querySelector(".close__modal");
// closeModalBtm.addEventListener("click", () => {
//   modal.close();
// });

// document.addEventListener("click", (e) => {
//   if (e.target.closest('[data-toggle="modal"]')) {
//     modal.show();
//   }
// });
// кінець мо

const openModalBtn = document.querySelectorAll(".open__modal");
const modal = document.querySelector(".modal-dialog");

openModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

const closeModalBtm = document.querySelector(".close__modal");
closeModalBtm.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.style.display = "none";

const form = document.querySelector(".modal-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Получаем значения полей формы
  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;
  const comments = document.querySelector("#comments").value;

  // Создаем объект с данными формы
  const formData = {
    name: name,
    phone: phone,
    email: email,
    comments: comments,
  };

  // Сохраняем данные в локальное хранилище
  localStorage.setItem("formData", JSON.stringify(formData));
  console.log(localStorage);
  // Отображаем сообщение об успешной отправке
  alert("Данные успешно отправлены!");

  // Сбрасываем значения полей формы
  form.reset();
  modal.style.display = "none";
});

modal.style.display = "none";

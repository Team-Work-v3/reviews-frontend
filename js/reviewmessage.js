const form = document.getElementById("reviewForm");
const comment = document.getElementById("comment");
const agreement = document.getElementById("agreement");

const commentError = document.getElementById("commentError");
const iconError = document.getElementById("iconError");
const agreementError = document.getElementById("agreementError");

const icons = document.querySelectorAll(".icons img");

let selectedIcon = null;

/* Выбор иллюстрации */
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icons.forEach((i) => i.classList.remove("active"));
    icon.classList.add("active");
    selectedIcon = icon.dataset.value;
    iconError.textContent = "";
    let img = document.getElementById("avatar");
    img.value = icon.dataset.value;
  });
});

/* Валидация формы */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Проверка комментария
  if (comment.value.trim() === "") {
    commentError.textContent = "Пожалуйста, поделитесь мнением";
    isValid = false;
  } else {
    commentError.textContent = "";
  }

  // Проверка иллюстрации
  if (!selectedIcon) {
    iconError.textContent = "Выберите иллюстрацию";
    isValid = false;
  } else {
    iconError.textContent = "";
  }

  // Проверка согласия
  if (!agreement.checked) {
    agreementError.textContent =
      "Необходимо согласие на обработку данных";
    isValid = false;
  } else {
    agreementError.textContent = "";
  }

  if (isValid) {
    alert("Отзыв успешно отправлен!");
    form.reset();
    icons.forEach((i) =>    i.classList.remove("active"));
    selectedIcon = null;
  }
});
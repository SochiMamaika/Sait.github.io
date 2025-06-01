
function toggleTheme() {
    document.body.classList.toggle('light');
}

  // Открытие модального окна при клике на фото
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  function closeModal() {
    modal.style.display = "none";
  }

  // Переключатель темы
  function toggleTheme() {
    document.body.classList.toggle('light');
  }
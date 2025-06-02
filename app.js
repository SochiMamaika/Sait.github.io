// Функция переключения темы (тёмная ↔ светлая)
function toggleTheme() {
    document.body.classList.toggle('light');
}
  // Открытие модального окна при клике на фото
  
  // Получаем элемент модального окна по ID
  const modal = document.getElementById("modal");

  // Получаем изображение внутри модального окна
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
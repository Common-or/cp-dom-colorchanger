document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const randomValue = Math.floor(Math.random() * 16777215);
    return `#${randomValue.toString(16).padStart(6, "0")}`;
  }

  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});

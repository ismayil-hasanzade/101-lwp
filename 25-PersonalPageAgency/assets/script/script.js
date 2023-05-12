const contact_button = document.querySelector(".contact_button");
const container = document.querySelector(".container");
const boxs = document.querySelectorAll(".digitaldiv .box");
const digitaldiv = document.querySelector(".digitaldiv");
contact_button.addEventListener("click", () => {
  container.classList.toggle("change");
});
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!container.contains(target)) {
    container.classList.remove("change");
  }
  if (!digitaldiv.contains(target)) {
    digitaldiv.classList.remove("change");
  }
});
boxs.forEach((ele) => {
  ele.firstElementChild.lastElementChild.onclick = () => {
    boxs.forEach((el) => {
      el.classList.remove("change");
    });
    ele.classList.toggle("change");
  };
});
document.addEventListener("click", (event) => {
  if (
    !event.target.classList.contains("box") &&
    !event.target.closest(".box")
  ) {
    boxs.forEach((ele) => {
      ele.classList.remove("change");
    });
  }
});

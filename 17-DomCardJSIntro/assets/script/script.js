const container = document.querySelector(".container");
const color_1 = document.querySelector(".color-1");
const color_2 = document.querySelector(".color-2");
const stars = document.querySelector(".stars");
const sizes = document.querySelector(".sizes");
color_2.addEventListener("click", () => {
  container.classList.add("change");
});
color_1.addEventListener("click", () => {
  container.classList.remove("change");
});

for (let i = 0; i < sizes.children.length; i++) {
  sizes.children[i].addEventListener("click", () => {
    for (let j = 0; j < sizes.children.length; j++) {
      sizes.children[j].style.cssText = "";
    }
    sizes.children[i].style.cssText = `
        width: 2rem;
        height: 2rem;
        background-color: #25d393;
        color: #fff;
        border-radius: 50%;
        display: grid;
        place-items: center;
      `;
  });
}

for (let i = 0; i < stars.children.length; i++) {
  stars.children[i].addEventListener("click", () => {
    for (let i = 0; i < stars.children.length; i++) {
      stars.children[i].style.color = "";
    }
    for (let j = 0; j <= i; j++) {
      stars.children[j].style.color = "black";
    }
  });
}

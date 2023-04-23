const container = document.querySelector(".container");
const color_1 = document.querySelector(".color-1");
const color_2 = document.querySelector(".color-2");
const stars = document.querySelector(".stars");
const sizes = document.querySelector(".sizes");
const many = document.querySelector(".many");
color_2.addEventListener("click", () => {
  container.classList.add("change");
  many.innerHTML = "$6300";
});
color_1.addEventListener("click", () => {
  container.classList.remove("change");
  many.innerHTML = "$1800";
});

for (let i = 0; i < sizes.children.length; i++) {
  sizes.children[0].style.cssText = `
   background-color:#25d393;
   color:#fff`;

  sizes.children[i].addEventListener("click", () => {
    for (let j = 0; j < sizes.children.length; j++) {
      sizes.children[j].style.cssText = "";
    }
    sizes.children[i].style.cssText = `
        background-color: #25d393;
        color: #fff;
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

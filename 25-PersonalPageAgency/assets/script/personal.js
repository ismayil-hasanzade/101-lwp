const carddiv = document.querySelector(".carddivpersonal");
const gettouchbutton = document.querySelector(".gettouchbutton");
fetch(`http://127.0.0.1:5500/db.json`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const box = document.createElement("div");
      box.className = "box";
      const stars = document.createElement("div");
      stars.className = "stars";
      const i = document.createElement("i");
      const i2 = document.createElement("i");
      const i3 = document.createElement("i");
      const i4 = document.createElement("i");
      const i5 = document.createElement("i");
      i.className = "fa-solid fa-star";
      i2.className = "fa-solid fa-star";
      i3.className = "fa-solid fa-star";
      i4.className = "fa-solid fa-star";
      i5.className = "fa-solid fa-star";
      stars.append(i, i2, i3, i4, i5);
      const about = document.createElement("div");
      about.className = "about";
      about.innerHTML = element.about;
      const bottom = document.createElement("div");
      bottom.className = "bottom";
      const bottomimg = document.createElement("div");
      bottomimg.className = "bottomimg";
      const img = document.createElement("img");
      img.src = element.img;
      bottomimg.append(img);
      const bottom_about = document.createElement("div");
      bottom_about.className = "bottom_about";
      const h4 = document.createElement("h4");
      h4.innerHTML = element.name;
      const p = document.createElement("p");
      p.innerHTML = element.country;
      bottom_about.append(h4, p);
      bottom.append(bottomimg, bottom_about);
      box.append(stars, about, bottom);
      carddiv.appendChild(box);
    });
  });

const formemail = document.querySelector(".formemail");
const formselect = document.getElementById("formselect");
const textarea = document.getElementById("textarea");
let localarray = [];
gettouchbutton.addEventListener("click", () => {
  // console.log(gettouchbutton);
  // console.log(formemail);
  if (JSON.parse(localStorage.getItem("array")) !== null) {
    localarray = JSON.parse(localStorage.getItem("array"));
  }
  console.log(textarea.value);
  let formobj = {
    email: "",
    select: "",
    textarea: "",
  };
  formobj.email = formemail.value;
  formobj.select = formselect.value;
  formobj.textarea = textarea.value;
  localarray.push(formobj);
  localStorage.setItem("array", JSON.stringify(localarray));
  formemail.value = "";
  formselect.value = "";
  textarea.value = "";
});

// const table = document.getElementById("table");
// console.log(table);

// fetch(`https://restcountries.com/v3.1/all/`)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((element, i) => {
//       console.log(i);
//       let tr = document.createElement("tr");
//       let number = document.createElement("td");
//       let name = document.createElement("td");
//       let capital = document.createElement("td");
//       let population = document.createElement("td");
//       let flag = document.createElement("td");
//       let img = document.createElement("img");
//       let edit = document.createElement("td");
//       let edit_button = document.createElement("button");
//       let delet = document.createElement("td");
//       let delete_button = document.createElement("button");
//       delete_button.innerHTML = "Delete";
//       delet.append(delete_button);
//       edit_button.innerHTML = "Edit";
//       edit.append(edit_button);
//       img.setAttribute("src", element.flags.png);
//       flag.append(img);
//       number.innerHTML = i + 1;
//       name.innerHTML = element.name.common;
//       capital.innerHTML = element.capital;
//       population.innerHTML = element.population;
//       tr.append(number, name, capital, population, flag, edit, delet);
//       table.appendChild(tr);
//       delet.addEventListener("click", () => {
//         tr.remove();
//       });
//     });
//   });
fetch(`https://restcountries.com/v3.1/all/`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, i) => {
      const tr = document.createElement("tr");
      const number = document.createElement("td");
      const name = document.createElement("td");
      const capital = document.createElement("td");
      const population = document.createElement("td");
      const flag = document.createElement("td");
      const img = document.createElement("img");
      const edit = document.createElement("td");
      const edit_button = document.createElement("button");
      const delet = document.createElement("td");
      const delete_button = document.createElement("button");
      const edit_input = document.createElement("input");
      const okbtn = document.createElement("button");
      okbtn.innerHTML = "OK";
      okbtn.style.display = "none";

      delete_button.textContent = "Delete";
      delete_button.style.cssText = `
        color:white;
        background-color:red;
        padding:10px;
        
      `;
      edit_button.style.cssText = `

      color:white;
        background-color:green;
        padding:10px;
      `;
      delete_button.addEventListener("click", () => {
        tr.remove();
        updateRowNumbers();
      });
      edit_button.addEventListener("click", () => {
        edit_input.style.cssText = `
          display:block;
                  `;
        okbtn.style.display = "block";
      });
      okbtn.addEventListener("click", () => {
        name.textContent = edit_input.value;
        edit_input.style.display = "none";
        okbtn.style.display = "none";
      });
      delet.append(delete_button);
      edit_button.textContent = "Edit";
      edit.append(edit_button);
      edit.append(edit_input);
      edit.append(okbtn);

      img.setAttribute("src", element.flags.png);
      flag.append(img);
      name.textContent = element.name.common;
      capital.textContent = element.capital || "";
      population.textContent = element.population || "";
      number.textContent = i + 1;
      tr.append(number, name, capital, population, flag, delet, edit);
      table.appendChild(tr);
      edit_input.style.display = "none";
    });

    updateRowNumbers();
  });

function updateRowNumbers() {
  const rows = table.querySelectorAll("tr");
  rows.forEach((row, index) => {
    row.querySelector("td:first-child").textContent = index == 0 ? "No" : index;
    
  });
}

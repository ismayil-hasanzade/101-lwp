const btn = document.getElementById("btn");
const section = document.querySelector(".section");
const getinput = document.querySelector(".getinput");
const all = document.getElementById("all");
const border = document.getElementById("borders");
function Creat() {
  fetch(`https://restcountries.com/v3.1/name/${getinput.value}`)
    .then((res) => res.json())
    .then((data) => {
      let container = document.createElement("div");
      container.setAttribute("class", "container");
      let container_header = document.createElement("div");
      container_header.setAttribute("class", "container_header");
      container_header.innerHTML = data[0].region;
      let img = document.createElement("div");
      img.setAttribute("class", "img");
      let new_img = document.createElement("img");
      new_img.setAttribute("src", data[0].flags.png);
      img.append(new_img);
      let name = document.createElement("div");
      let list = document.createElement("div");
      list.setAttribute("class", "list");
      let list_name = document.createElement("div");
      list_name.setAttribute("class", "list_name");
      list.append(list_name);
      let currencies = document.createElement("p");
      currencies.innerHTML = "Currency";
      list_name.append(currencies);
      let car_series = document.createElement("p");
      let population = document.createElement("p");
      let capital = document.createElement("p");
      let number = document.createElement("p");
      car_series.innerHTML = "Car Series";
      population.innerHTML = "Population";
      capital.innerHTML = "Capital";
      number.innerHTML = "Number";
      list_name.append(car_series);
      list_name.append(population);
      list_name.append(capital);
      list_name.append(number);
      let list_property = document.createElement("div");
      list_property.setAttribute("class", "list_property");
      list.append(list_property);
      let currencies_property = document.createElement("p");
      let car_series_property = document.createElement("p");
      let population_property = document.createElement("p");
      let capital_property = document.createElement("p");
      let number_property = document.createElement("p");
      currencies_property.innerHTML = Object.keys(data[0].currencies)[0];
      car_series_property.innerHTML = data[0].cioc;
      population_property.innerHTML = data[0].population;
      capital_property.innerHTML = data[0].capital;
      number_property.innerHTML = data[0].idd.root + data[0].idd.suffixes[0];
      list_property.append(currencies_property);
      list_property.append(car_series_property);
      list_property.append(population_property);
      list_property.append(capital_property);
      list_property.append(number_property);
      name.setAttribute("class", "name");
      name.innerHTML = data[0].name.common;
      container.append(container_header);
      container.append(img);
      container.append(name);
      container.append(list);
      section.appendChild(container);
    });
  getinput.value = "";
}
btn.addEventListener("click", Creat);

all.addEventListener("click", () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        let container_header = document.createElement("div");
        container_header.setAttribute("class", "container_header");
        container_header.innerHTML = element.region;
        let img = document.createElement("div");
        img.setAttribute("class", "img");
        let new_img = document.createElement("img");
        new_img.setAttribute("src", element.flags.png);
        img.append(new_img);
        let name = document.createElement("div");
        let list = document.createElement("div");
        list.setAttribute("class", "list");
        let list_name = document.createElement("div");
        list_name.setAttribute("class", "list_name");
        list.append(list_name);
        let currencies = document.createElement("p");
        currencies.innerHTML = "Currency";
        list_name.append(currencies);
        let car_series = document.createElement("p");
        let population = document.createElement("p");
        let capital = document.createElement("p");
        let number = document.createElement("p");
        car_series.innerHTML = "Car Series";
        population.innerHTML = "Population";
        capital.innerHTML = "Capital";
        number.innerHTML = "Number";
        list_name.append(car_series);
        list_name.append(population);
        list_name.append(capital);
        list_name.append(number);
        let list_property = document.createElement("div");
        list_property.setAttribute("class", "list_property");
        list.append(list_property);
        let currencies_property = document.createElement("p");
        let car_series_property = document.createElement("p");
        let population_property = document.createElement("p");
        let capital_property = document.createElement("p");
        let number_property = document.createElement("p");
        currencies_property.innerHTML = Object.keys(element.currencies)[0];
        car_series_property.innerHTML = element.cioc;
        population_property.innerHTML = element.population;
        capital_property.innerHTML = element.capital;
        number_property.innerHTML = element.idd.root + element.idd.suffixes[0];
        list_property.append(currencies_property);
        list_property.append(car_series_property);
        list_property.append(population_property);
        list_property.append(capital_property);
        list_property.append(number_property);
        name.setAttribute("class", "name");
        name.innerHTML = element.name.common;
        // console.log(element.name.common);
        container.append(container_header);
        container.append(img);
        container.append(name);
        container.append(list);
        section.appendChild(container);
      });
    });
});

border.addEventListener("click", () => {
  fetch(`https://restcountries.com/v3.1/name/${getinput.value}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((x) => {
        if (x.borders && x.borders.length > 0) {
          x.borders.forEach((element) => {
            fetch(`https://restcountries.com/v3.1/alpha/${element}`)
              .then((res) => res.json())
              .then((data) => {
                let container = document.createElement("div");
                container.setAttribute("class", "container");
                let container_header = document.createElement("div");
                container_header.setAttribute("class", "container_header");
                container_header.innerHTML = data[0].region;
                let img = document.createElement("div");
                img.setAttribute("class", "img");
                let new_img = document.createElement("img");
                new_img.setAttribute("src", data[0].flags.png);
                img.append(new_img);
                let name = document.createElement("div");
                let list = document.createElement("div");
                list.setAttribute("class", "list");
                let list_name = document.createElement("div");
                list_name.setAttribute("class", "list_name");
                list.append(list_name);
                let currencies = document.createElement("p");
                currencies.innerHTML = "Currency";
                list_name.append(currencies);
                let car_series = document.createElement("p");
                let population = document.createElement("p");
                let capital = document.createElement("p");
                let number = document.createElement("p");
                car_series.innerHTML = "Car Series";
                population.innerHTML = "Population";
                capital.innerHTML = "Capital";
                number.innerHTML = "Number";
                list_name.append(car_series);
                list_name.append(population);
                list_name.append(capital);
                list_name.append(number);
                let list_property = document.createElement("div");
                list_property.setAttribute("class", "list_property");
                list.append(list_property);
                let currencies_property = document.createElement("p");
                let car_series_property = document.createElement("p");
                let population_property = document.createElement("p");
                let capital_property = document.createElement("p");
                let number_property = document.createElement("p");
                currencies_property.innerHTML = Object.keys(
                  data[0].currencies
                )[0];
                car_series_property.innerHTML = data[0].cioc;
                population_property.innerHTML = data[0].population;
                capital_property.innerHTML = data[0].capital;
                number_property.innerHTML =
                  data[0].idd.root + data[0].idd.suffixes[0];
                list_property.append(currencies_property);
                list_property.append(car_series_property);
                list_property.append(population_property);
                list_property.append(capital_property);
                list_property.append(number_property);
                name.setAttribute("class", "name");
                name.innerHTML = data[0].name.common;
                container.append(container_header);
                container.append(img);
                container.append(name);
                container.append(list);
                section.appendChild(container);
              });
          });
        }
      });
    });
  Creat();
});

// const btn = document.getElementById("btn");
// const section = document.querySelector(".section");
// const getinput = document.querySelector(".getinput");

// const createElements = (data) => {
//   let container = document.createElement("div");
//   container.setAttribute("class", "container");
//   container.innerHTML = `

//     <div class="container_header">${data[0].region}</div>
//     <div class="img"><img src="${data[0].flags.png}" /></div>
//     <div class="name">${data[0].name.common}</div>
//     <div class="list">
//       <div class="list_name">
//         <p>Currency</p>
//         <p>Car Series</p>
//         <p>Population</p>
//         <p>Capital</p>
//         <p>Number</p>
//       </div>
//       <div class="list_property">
//         <p>${Object.keys(data[0].currencies)[0]}</p>
//         <p>${data[0].cioc}</p>
//         <p>${data[0].population}</p>
//         <p>${data[0].capital}</p>
//         <p>${data[0].idd.root}${data[0].idd.suffixes[0]}</p>
//       </div>
//     </div>
//   `;
//   section.appendChild(container);
// };

// function Azerbaijan() {
//   fetch("https://restcountries.com/v3.1/name/azerbaijan")
//     .then((res) => res.json())
//     .then((data) => createElements(data));
// }
// function German() {
//   fetch("https://restcountries.com/v3.1/name/german")
//     .then((res) => res.json())
//     .then((data) => createElements(data));
// }
// function America() {
//   fetch("https://restcountries.com/v3.1/name/america")
//     .then((res) => res.json())
//     .then((data) => createElements(data));
// }
// function Turkey() {
//   fetch("https://restcountries.com/v3.1/name/turkey")
//     .then((res) => res.json())
//     .then((data) => createElements(data));
// }
// function Brasil() {
//   fetch("https://restcountries.com/v3.1/name/brasil")
//     .then((res) => res.json())
//     .then((data) => createElements(data));
// }
// function China() {
//   fetch("https://restcountries.com/v3.1/name/china")
//     .then((res) => res.json())
//     .then((data) => createElements(data));
// }

// Azerbaijan();
// German();
// America();
// Brasil();
// Turkey();
// China();

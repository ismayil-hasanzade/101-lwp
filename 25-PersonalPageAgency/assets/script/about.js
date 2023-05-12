const explorefuture_card = document.querySelector(".explorefuture_card");
const expcontent = document.querySelector(".expcontent");
fetch(`https://restcountries.com/v3.1/all/`)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 3; i++) {
      // console.log(data[i].name.common);
      // console.log(data[i].borders);
      // console.log(data[i].name.official);
      // console.log(data[i].timezones);
      // console.log(data[i].fifa);
      // console.log(data[i].flags.png);
      // console.log(data[i].population);
      const card = document.createElement("div");
      card.className = "card";
      const card_header = document.createElement("div");
      card_header.className = "card_header";
      const card_header_hero = document.createElement("h2");
      card_header_hero.innerHTML = data[i].fifa;
      const card_header_p = document.createElement("p");
      card_header_p.innerHTML = data[i].timezones;
      card_header.append(card_header_hero, card_header_p);
      const cardtime = document.createElement("div");
      cardtime.className = "cardtime";
      const img = document.createElement("img");
      img.src = data[i].flags.png;
      const cardtime_p = document.createElement("p");
      cardtime_p.innerHTML = data[i].population;
      cardtime.append(img, cardtime_p);
      const hr = document.createElement("hr");
      const h4 = document.createElement("h4");
      h4.innerHTML = data[i].name.common;
      const card_p = document.createElement("p");
      card_p.innerHTML = data[i].name.official;
      const h5 = document.createElement("h5");
      h5.innerHTML = data[i].borders;
      card.append(card_header, cardtime, hr, h4, card_p, h5);
      explorefuture_card.appendChild(card)
    }
  });
console.log(explorefuture_card);
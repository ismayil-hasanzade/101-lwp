const table = document.querySelector("table");
fetch(`https://northwind.vercel.app/api/customers`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, i) => {
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      const name = document.createElement("td");
      const contact = document.createElement("td");
      const city = document.createElement("td");
      const country = document.createElement("td");
      const phone = document.createElement("td");
      const info = document.createElement("td");
      const infobutton = document.createElement("input");
      infobutton.style.cssText = `
      padding:0px 20px 0px 20px;
      background-color:gray;
      color:white;
      border-radius:10px;
      border:none;
      `;
      const a = document.createElement("a");
      a.target = "_blank";
      a.href = "card.html";
      infobutton.className = "button";
      th.innerHTML = i + 1;
      if (element.companyName) {
        name.innerHTML = element.companyName;
      } else {
        name.innerHTML = "name";
      }
      if (element.contactName) {
        contact.innerHTML = element.contactName;
      } else {
        contact.innerHTML = "contact";
      }
      if (element.address && element.address.city) {
        city.innerHTML = element.address.city;
      } else {
        city.innerHTML = "city";
      }
      if (element.address && element.address.country) {
        country.innerHTML = element.address.country;
      } else {
        country.innerHTML = "country";
      }

      if (element.address && element.address.phone) {
        phone.innerHTML = element.address.phone;
      } else {
        phone.innerHTML = "phone";
      }
      infobutton.type = "button";
      infobutton.value = "info";
      a.append(infobutton);
      info.append(a);
      tr.append(th, name, contact, city, country, phone, info);
      tbody.append(tr);
      table.appendChild(tbody);
      infobutton.addEventListener("click", () => {
        localStorage.setItem("id", element.id);
      });
    });
  });

const express = require("express");
const app = express();

// CORS ayarları
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5501"); // İzin verilen orijin
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Diğer yönlendirmeler ve middleware'ler
// ...

// API rotaları
// ...

// Sunucuyu dinle
app.listen(3000, () => {
  console.log("Sunucu çalışıyor...");
});

// const ul = document.querySelector("ul");
const cardfront = document.querySelector(".card-front");
const data = localStorage.getItem("id");
const figcaption = document.querySelector(".figcaption");

fetch(`https://northwind.vercel.app/api/customers/${data}`)
  .then((res) => res.json())
  .then((data) => {
    const ul = document.createElement("ul");
    ul.innerHTML = `
    <li id="companyName">${data.companyName}</li>
            <li >${data.contactName}</li>
            <li >${data.contactTitle}</li>
            <li >${data.address.street}</li>
            <li >${data.address.city}</li>
            <li >${data.address.region}</li>
            <li >${data.address.postalCode}</li>
            <li >${data.address.country}</li>
            <li >${data.address.phone}</li>
            

    `;
    figcaption.innerHTML = data.id;
    cardfront.appendChild(ul);
    console.log(data.address.country);
  });
//

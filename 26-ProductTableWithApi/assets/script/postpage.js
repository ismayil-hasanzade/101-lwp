const submit = document.querySelector(".submit");
const companyName = document.getElementById("CompanyName");
const contactName = document.getElementById("ContactName");
const city = document.getElementById("City");
const country = document.getElementById("Country");
const phone = document.getElementById("Phone");

submit.addEventListener("click", (event) => {
  if (
    companyName.value === "" ||
    contactName.value === "" ||
    city.value === "" ||
    country.value === "" ||
    phone.value === ""
  ) {
    console.log("Deyerleri Doldurun");
    return;
  }
  fetch("https://northwind.vercel.app/api/customers/", {
    method: "POST",
    body: JSON.stringify({
      companyName: companyName.value,
      contactName: contactName.value,
      address: {
        city: city.value,
        country: country.value,
        phone: phone.value,
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  companyName.value = "";
  contactName.value = "";
  city.value = "";
  country.value = "";
  phone.value = "";
  event.preventDefault();

});

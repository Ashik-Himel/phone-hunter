const heroSection = document.getElementById("hero-section");
const cardContainer = document.getElementById("card-container");

const iPhone13ProMax = () => {
  fetch(
    "https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089"
  )
    .then((res) => res.json())
    .then((data) => {
      heroSection.children[0].innerText = data.data.name;
      heroSection.children[3].src = data.data.image;
    });
};
iPhone13ProMax();

const card = () => {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${"iphone"}`)
    .then((res) => res.json())
    .then((data) => {
      data.data.forEach((phone) => {
        console.log(phone);
        const cardElement = document.createElement("div");
        cardElement.classList =
          "flex flex-col justify-center items-center p-6 border border-gray-300 rounded-lg";
        cardElement.innerHTML = `
          <div class="bg-[rgba(13,110,253,0.05)] w-full p-6 flex justify-center items-center mb-6">
            <img class="block w-full max-w-[250px]" src="${phone.image}" alt="Phone Image">
          </div>
          <h2 class="text-black text-2xl font-bold mb-1">${phone.phone_name}</h2>
          <p class="text-gray-500 max-w-[500px] mx-auto text-center mb-2">There are many variations of passages of available, but the majority have suffered</p>
          <span class="block text-2xl font-bold mb-4">$999</span>
          <a href="#" class="btn btn-primary h-auto min-h-[40px]">Show Details</a>
      `;
        cardContainer.appendChild(cardElement);
      });
    });
};
card();

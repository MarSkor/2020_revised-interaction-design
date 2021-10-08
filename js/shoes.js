


const errorHeading = document.querySelector("h1");
async function fetchShoes() {
  try {
    const res = await fetch("../data/shoes.json");
    const result = await res.json();
    displayShoes(result);
  } catch (error) {
    errorHeading.innerHTML = "An error occured";
    console.log(error);
  }
}
fetchShoes();




function displayShoes(result) {
  console.log(result);

  const shoeContainer = document.querySelector(".row");
  let html = "";
  for (let i = 0; i < result.length; i++) {
    html += `<div class="card">
                <img class="smallImage" src="${result[i].imageUrl}"></img>
                <h3 class="name">${result[i].name}</h3>
                <a class="btn shopbtn" href="details-shoes.html">Shop Now</a>
              </div>`;
  }
  shoeContainer.innerHTML = html;
}

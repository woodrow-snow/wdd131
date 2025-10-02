// creating constants
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];
const dropdown = document.getElementById("product-select");
const submitButton = document.getElementById("submit");
const COUNT_NAME = "totalReviews";

// global let variable
let SUBMITTED_REVIEWS = getTotalReviews() || 0;

products.forEach(product => {
    // creating new element for product option
    let newOption = document.createElement("option");
    
    // setting attributes and textContent
    newOption.setAttribute('name',product.name);
    newOption.setAttribute('value',product.id);
    newOption.textContent = product.name;

    // adding to dropdown
    dropdown.appendChild(newOption);
});

// getting amount of submitted reviews form local storage
function getTotalReviews(){
    return JSON.parse(localStorage.getItem(COUNT_NAME));
}

submitButton.addEventListener('click', () => {

    // saving amount of reviews to localStorage
    localStorage.setItem(COUNT_NAME, SUBMITTED_REVIEWS);
});
// getting elements from doc
const nav = document.querySelector('.navigation');
const hambutton = document.querySelector("#menu");

// adding event listener for hamburger menu
hambutton.addEventListener('click', () => {
    nav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
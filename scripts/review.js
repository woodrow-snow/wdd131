// code for review.html page
// getting elements form document
const submitted = document.querySelector('.submitted');
const COUNT_NAME = "totalReviews";

// global let variable
let SUBMITTED_REVIEWS = getTotalReviews() || 0;

// getting textContent
submitted.textContent = `You have submitted ${SUBMITTED_REVIEWS} reviews!`;

function getTotalReviews(){
    return localStorage.getItem(COUNT_NAME);
}

document.addEventListener("DOMContentLoaded", () => {
    SUBMITTED_REVIEWS++;
    
    // saving amount of reviews to localStorage
    localStorage.setItem(COUNT_NAME, SUBMITTED_REVIEWS);
});
// JS code for hamberger menu
// getting elements from doc
const nav = document.querySelector('.navigation');
const hambutton = document.querySelector("#menu");

// adding event listener for hamburger menu
hambutton.addEventListener('click', () => {
    nav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Temples array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Vernal Utah",
    location: "Vernal, Utah, United States",
    dedicated: "1997, November, 2",
    area: 38771,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/d8c07cd3032b589fba11a8a8ab2bc160949ee735/full/640%2C/0/default"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, April 6",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Italy, Rome",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
];

// getting main element
const main = document.querySelector('main');

// looping through and creating temple cards
displayCards(temples);

// creating function for displaying
function displayCards(givenArray){

    // clearing out all old elements
    // creating array with all temple-card class
    const allDisplayedTemples = document.querySelectorAll('.temple-card');

    // removing all temple cards
    allDisplayedTemples.forEach(card => {
        card.remove();
    });

    givenArray.forEach(temple => {
    // creating div for temple card and giving it a class of temple-card
    const templeCard = document.createElement("div");
    templeCard.classList.add('temple-card');

    // creating elements for name, location, dedication, and size and adding to div
    const tName = document.createElement('h3');
    const tLocaiton = document.createElement('h4'); 
    const tDedicated = document.createElement('h4'); 
    const tSize = document.createElement('h4'); 

    templeCard.appendChild(tName);
    templeCard.appendChild(tLocaiton);
    templeCard.appendChild(tDedicated);
    templeCard.appendChild(tSize);

    // adding content to name, location, dedication, and size
    tName.textContent = temple.templeName;
    tLocaiton.textContent = temple.location;
    tDedicated.textContent = temple.dedicated;
    tSize.textContent = temple.area;

    // creating element for image
    const tImage = document.createElement('img');

    // adding attributes for image
    tImage.setAttribute("src", temple.imageUrl);
    tImage.setAttribute("alt",`image of ${temple.templeName} temple`);
    tImage.setAttribute("loading","lazy");

    // adding image to templeCard
    templeCard.appendChild(tImage);

    // adding templeCard to document
    main.appendChild(templeCard);
});
}

// creating function for getting temple dedicated year
function getDedicatedYear(whenDedicated){
    // breaking up dedicated date into three parts and getting first
    const dedicatedArray = whenDedicated.split(",");

    // getting year by selecting first slot
    let year = dedicatedArray[0];

    return year;
}

// sorting by selected heading option
// creating variable for each nav option
const home = document.querySelector('#home')
const old = document.querySelector("#old");
const newOption = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

// adding event listener for each option
// home is the default option, shows all
home.addEventListener("click", () => {
    displayCards(temples);
});

// old sorts by all temples built before 1900
old.addEventListener("click", () => {
    const allOldTemples = temples.filter((oldTemple) => {
        //getting dedicated year
        let year = getDedicatedYear(oldTemple.dedicated);

        // using year for comparison
        if(year < 1900){
            return true;
        }
        else {
            return false;
        }
    });

    displayCards(allOldTemples);
});

// new sorts by all temples built after 2000
newOption.addEventListener("click", () => {
    const allNewTemples = temples.filter((newTemple) => {
        let year = getDedicatedYear(newTemple.dedicated);

        if(year > 2000){
            return true;
        }
        else {
            return false;
        }
    });

    displayCards(allNewTemples);
});

// large sorts by temples larger than 90,000
large.addEventListener("click", () => {
    const allLargeTemples = temples.filter((largeTemple) => {
        let tArea = largeTemple.area;
        if (tArea > 90000){
            return true;
        }
        else {
            return false;
        }
    });

    displayCards(allLargeTemples);
});

// small sort by temples smaller than 10,000
small.addEventListener("click", () => {
    const allSmallTemples = temples.filter((smallTemple) => {
        let tArea = smallTemple.area;
        if (tArea < 10000){
            return true;
        }
        else {
            return false;
        }
    });

    displayCards(allSmallTemples);
});
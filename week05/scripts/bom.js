// getting input button and list from document
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const ARRAY_NAME = 'UserFavBOMList';

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// adding event listener for add chapter button
button.addEventListener('click', () => {
    // checking to see if input is blank
    if (input.value.trim() !== ''){

        // Displaying
        displayList(input.value);

        // adding item to array 
        chaptersArray.push(input.value);

        // updating localStorage with the new array with setChapterList
        setChapterList();

        // clearing input and returning focus to input field
        input.value='';
        input.focus();
    }
    else {
        input.focus();
        // checking to see if error message exists and printing if it doesn't
        if (!document.querySelector('.error')){
            const errorMessage = document.createElement('p')
            errorMessage.textContent = "Please enter something into the input box";
            errorMessage.classList.add('error');
            document.querySelector('main').append(errorMessage); 
        }    
    }

    // checking if user starts typing and removes error message
    input.addEventListener('keydown', () => {
        document.querySelector('.error').remove();
    });
});



function displayList(item){
    // creating li element to hold entrys chapter title and delete button
    let li = document.createElement('li');
    // creating li delete button
    let deleteButton = document.createElement('button')
    // populating li element var text and inner html with input value
    li.textContent = item;
    // populating delete button with an X
    deleteButton.textContent = '❌';
    // appending li element var with delete button
    li.append(deleteButton);
    // appending li elemetn to UL in HMTL
    list.append(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus()
    }); 
    console.log('Nice Try, lucky for you I do want to understand how all of this works 😉');
}

function setChapterList(){
    localStorage.setItem(ARRAY_NAME,JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem(ARRAY_NAME));
}

function deleteChapter(chapter){
    // reformating chapter parameter to get rid of the x that is padded on end of chapter string when deleteChapter is called
    chapter = chapter.slice(0, chapter.length - 1);

    // redefining chaptersArray to remove the deleted chapter
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    
    // calling setChapterList to update localStorage
    setChapterList();
}
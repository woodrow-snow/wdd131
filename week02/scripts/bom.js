// getting input button and list from document
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// adding event listener for add chapter button
button.addEventListener('click', () => {
    // checking to see if input is blank
    if (input.value.trim() !== ''){
        // creating li element to hold entrys chapter title and delete button
        const li = document.createElement('li');

        // creating li delete button
        const deleteButton = document.createElement('button')

        // populating li element var text and inner html with input value
        li.textContent = input.value;

        // populating delete button with an X
        deleteButton.textContent = '❌';

        // appending li element var with delete button
        li.appendChild(deleteButton);

        // appending li elemetn to UL in HMTL
        list.append(li);

        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
        });
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
});

// checking if user starts typing and removes error message
input.addEventListener('keydown', () => {
    document.querySelector('.error').remove();
});
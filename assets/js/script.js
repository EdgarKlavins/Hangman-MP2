document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit");
    const usernameInput = document.getElementById("username");
    const gameBox = document.querySelector(".game_box");
    const gamecont = document.getElementById("game-container");
    const displayUsername = document.getElementById("displayUsername");
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      const username = usernameInput.value;
      console.log("Username:", username);
      gameBox.style.display = "none" ;
      displayUsername.textContent = "Welcome, " + username + "!";
      gamecont.style.display = "block" ;
      
      window.addEventListener('keydown', e =>{
            if(e.keyCode >= 65 && e.keyCode <=90){
                const letter = e.key;
        
                if(selectedWord.includes(letter)){
                    if(!correctLetters.includes(letter)){
                        correctLetters.push(letter);
        
                        displayWord();
                    } else{
                        showNotification();
                    }
                } else{
                    if(!wrongLetters.includes(letter)){
                        wrongLetters.push(letter);
        
                        updateWrongLetterE1();
                    } else{
                        showNotification();
                    }
                }
            }
        });
        
    });
});

  


const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts= document.querySelectorAll(".figure-part");

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden word
function displayWord(){
    wordE1.innerHTML = `
    ${selectedWord
    .split('')
    .map(
        letter =>`
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
    )
    .join('')}
    `;

    const innerWord = wordE1.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You won! 😃';
        popup.style.display= 'flex';
    }
}

// Update the wrong letters
function updateWrongLetterE1(){
    //Display wrong letters
    wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    //Display parts
    figureParts.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block'
        }
        else{
            part.style.display = 'none';
        }
    });

    //Check if lost
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'Unfortunately you lost. 😕';
        popup.style.display = 'flex';
    }
}

//Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

//Keydown letter press


//Restart game and play again
playAgainBtn.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetterE1();

    popup.style.display = 'none';
});

function playSound(audioName){
    let audio = new Audio(audioName);
    audio.play();
    audio.loop = true;
}
    playSound("Crow.mp3");


displayWord();
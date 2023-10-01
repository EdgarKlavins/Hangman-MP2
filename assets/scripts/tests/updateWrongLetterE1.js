function updateWrongLetterE1(wrongLettersE1, wrongLetters, figureParts) {
    //Display wrong letters
    wrongLettersE1.innerHTML = `
      ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
      ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
  
    //Display parts
    figureParts.forEach((part, index) => {
      const errors = wrongLetters.length;
  
      if (index < errors) {
        part.style.display = 'block';
      } else {
        part.style.display = 'none';
      }
    });
  }
  
  module.exports = updateWrongLetterE1;
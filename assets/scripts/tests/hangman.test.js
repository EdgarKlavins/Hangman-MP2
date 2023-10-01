/**
 * @jest-environment jsdom
 */
 
const words = ['apple', 'banana', 'chocolate', 'diamond', 'elephant', 'fireworks', 'guitar', 'hamburger', 'island', 'jazz', 'kangaroo', 'lemonade', 'mountain', 'nightmare', 'octopus', 'penguin', 'quilt', 'rainbow', 'strawberry', 'tiger', 'umbrella', 'volcano', 'watermelon', 'xylophone', 'yacht', 'zeppelin', 'dragon', 'robot', 'spider', 'programming', 'interface', 'wizard'];
describe("Game logic", () =>{
  describe("When a game starts", () => {
    test("Should choose a random word within the list of all words", () => {
        const selectedWord = words[Math.floor(Math.random() * words.length)];
        expect(words).toContain(selectedWord);
    });

    
      });
    })

    const simulateKeyPress = require('./simulateKeyPress'); 

describe('simulateKeyPress function', () => {
  test('Should dispatch a KeyboardEvent with the specified key', () => {
    
    window.dispatchEvent = jest.fn();

    
    simulateKeyPress('a');

    
    expect(window.dispatchEvent).toHaveBeenCalledWith(
      new KeyboardEvent('keydown', {
        key: 'a',
        code: 'Keya',
        which: 'a'.charCodeAt(0),
        keyCode: 'a'.charCodeAt(0),
        charCode: 'a'.charCodeAt(0),
      })
    );
  });
});

const updateWrongLetterE1 = require('./updateWrongLetterE1'); 

describe('updateWrongLetterE1 function', () => {
  let wrongLettersE1;
  let figureParts;
  let wrongLetters;

  beforeEach(() => {
    wrongLettersE1 = document.createElement('div');
    wrongLettersE1.id = 'wrong-letters';

    figureParts = Array.from({ length: 7 }, (_, index) => {
      const part = document.createElement('div');
      part.classList.add('figure-part');
      return part;
    });

    wrongLetters = ['x', 'y', 'z'];
  });

  test('Should update wrongLettersE1 and figureParts correctly', () => {
    updateWrongLetterE1(wrongLettersE1, wrongLetters, figureParts);
  expect(wrongLettersE1.innerHTML).toContain('<p>Wrong</p>');
  expect(wrongLettersE1.innerHTML).toContain('<span>x</span>');
  expect(wrongLettersE1.innerHTML).toContain('<span>y</span>');
  expect(wrongLettersE1.innerHTML).toContain('<span>z</span>');

    
    figureParts.forEach((part, index) => {
      if (index < wrongLetters.length) {
        expect(part.style.display).toBe('block');
      } else {
        expect(part.style.display).toBe('none');
      }
    });
  });
});

// Adapted from https://jestjs.io/docs/timer-mocks

jest.useFakeTimers();  

const showNotification = require('./showNotification');

describe('showNotification', () => {
  let notification;

  beforeEach(() => {
    
    notification = document.createElement('div');
    notification.classList.add('show');
  });

  test('Should remove the notification after a delay', () => {
    showNotification(notification); 
expect(notification.classList.contains('show')).toBe(true);
jest.advanceTimersByTime(2000);
expect(notification.classList.contains('show')).toBe(false);
  });
});








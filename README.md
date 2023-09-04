# Hangman game

## Milestone Project 2 

![responsiveness image](assets/images/Responsiv.png)

###  I have created this web page as a part of  my Milestone Project 2 for educational purposes only

## Live Project

[My live project](edgarklavins.github.io/Hangman-MP2/)
<br>

## Repository
[My repository](https://github.com/EdgarKlavins/Hangman-MP2)



## Introduction

The Hangman is a guessing game, testing the users knowledge and vocabulary. Player has to complete the word by picking correct letters. This project was created as a part of milestone project 2 (Bristol college/Code institute) Level 5 Diploma in Web Application Development. 
Educational purposes only.

### History

Though the origins of the game are unknown, a variant is mentioned in a book of children's games assembled by Alice Gomme in 1894 called Birds, Beasts, and Fishes.[1] This version lacks the image of a hanged man, instead relying on keeping score as to the number of attempts it took each player to fill in the blanks.

A version which incorporated hanging imagery was described in a 1902 article in The Philadelphia Inquirer, which stated that it was popular at "White Cap" parties hosted by Vigilance Committees where guests would wear "white peaked caps with masks"

-wikipedia


# Technologies Used

## Languages used
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JAVA SCRIPT</li>
</ul>

## Frameworks & Tools

- Git
- GitHub
- Gitpod
- Mockplus Classic
- Google Fonts
- Font Awesome
- Photoshop

# UX

## Site Goals:

* To showcase the skills I have learnt in HTML, CSS, JavaScript.
* To provide users with an interactive game to play that has clear Win / Lose Scenarios.
* To create an enjoyable, interactive game that makes the user want to stay and play again.

#### User stories
* As a user, I want to easily understand the main purpose of the website.
* As a user, I want to view the website and content clearly on any device and resolution
* As a user, I want to have instructions on how to play the game so that I can easily understand the rules.
* As a user, I want to be able to start a game when I am ready.
* As a user, I want to see a hangman image appear aseach time I guess incorrectly.
* As a user, I want to know whether my guess was successful or not.
* As a user, I want a way to start a new game when the current game has ended.
* As a user, I want to have a moment of surprise, when interacting with game.
* As a user, I want to see contact information for the site owner incase I want to reach out.


### Testing user stories

As a user, I want to easily understand the main purpose of the website.
* Website contains logo "Hangman" and information about the game.

As a user, I want to view the website and content clearly on any device and resolution.
* Website has been tested on diffrent devices and evidence has been provided (screenshot,top of the page).

As a user, I want to have instructions on how to play the game so that I can easily understand the rules.
* There is short description for those who have never played the game.

As a user, I want to be able to start a game when I am ready.
* Game starts as soon as the player enters nickname.

As a user, I want to see a hangman image appear aseach time I guess incorrectly.
* It takes six wrong guesses to complete the hangman image .

As a user, I want to know whether my guess was successful or not.
* If guess was successful it will reveal space in the word, if guess was wrong, player will be able to see all wrongly guessed letters, if player has been used already certain letter, popup will come up and remind it. 

As a user, I want a way to start a new game when the current game has ended.
* Each time player either loses or wins, "play again" button will be aviable.

As a user, I want to have a moment of surprise, when interacting with game.
* Each time player presses "a" key, it will make H_NGM_N logo to change and fill unknown letters.

As a user, I want to see contact information for the site owner incase I want to reach out.
* Social network icons all aviable at any time, located in the footer.

### Structure

#### Wireframes

The structure of the initial site will include three section incorporated in the index.html page:

1. **Welcome Section** displays the rules of the game and asks the user to input a username in order to proceed to playing the game.

![Welcome](/docs/Wireframe_desktop1.png)  

![Phone welcome](/docs/Wireframe_phone.png)

2. **Gaming area** containig keyboard, figurine, displayed all guessed wrong letters

![Game](/docs/Wireframe_desktop2.png)

![Phone Game](/docs/Wireframe_phone2.png)

3. **Engame popup** which congratulates player and gives option to play again

![Engame](/docs/Wireframe_desktop3.png)

![Phone Engame](/docs/Wireframe_phone3.png)

### Features

#### Welcome Section

<
![Welcome section](/docs/welcome.png) 


- Features an input field. The user is required to enter a username to continue. A submit button initiates the next section if a username has been entered. The rules of the game are also diplayed.



#### Game Section

![Game section](/docs/game.png) 

- Features the nickname displayed at the top of the central content area.
- Clickable on-screen keyboard element. 
- A Hangman image
- Feedback to the user about guessed letters and wrong letters
- Option to turn sound on or off.

#### End of Game page

![End game section](/docs/endgame.png) 
- Player is notified, if he lost or won the game
- Player can choose to play again immediately


#### Header

![Header](/docs/header.png)

- The header remains on display at the top of the game throughout a users journey through the game.
- It tells the user clearly what the content and purpose of the application is.
- It contains sound on/off button
- It is interactive and changes when certain requirements are met.

![Header 2](/docs/header2.png)

#### Footer

![Header 2](/docs/footer.png)

- Includes links to the LinkedIn, Facebook, Instagram and Twitter page of the developer.
- All links open in a new window.

## Testing and Validation

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. All pages passed with no errors or warnings. 



![index page](/docs/html.png)


### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. The code passed with no errors or warnings.


![index page](/docs/css.png)


### JavaScript Validation

The linter <a href="https://jshint.com/">JSHint</a> was used to validate the JavaScript files. Unused variable warnings were ignored, as those variables or functions where called/used in either the html files or other JS files. All remaining warnings stem from the JShint configuration and are not related to the code.

* first part

![js1 page](/docs/js1.png)
<br>
<br>

* second part
<br>
<br>

![js2 page](/docs/js2.png)
<br>
<br>

* third part
<<br>
<br>

![js3 page](/docs/js3.png)
<br>
<br>

* fourth part
<br>
<br>

![js4 page](/docs/js4.png)


### Accessibility & Performance

The Lighthouse feature on Google Devtools was used to assess accessibility and performance. All pages score high


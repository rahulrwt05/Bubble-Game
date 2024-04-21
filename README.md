# Bubble Game

Welcome to the Bubble Game project! This project is a simple game where players pop bubbles before the timer runs out. Additionally, it demonstrates the concepts of event bubbling and event delegation in JavaScript DOM manipulation.

## Features

- **Dynamic Bubbles:** Bubbles are dynamically generated on the screen, making each gameplay unique.
- **Scoring System:** Players earn points for popping bubbles, with the score displayed on the screen.
- **Timer:** A timer counts down the remaining time for the player to pop bubbles.
- **Game Over:** The game ends when the timer runs out, and players can see their final score.

### Event Bubbling

- In the game, bubbles are created dynamically within a container element.
- When a user clicks on a bubble, the click event is triggered on the bubble itself.
- However, due to event bubbling, the click event also propagates up through all ancestor elements of the bubble, including the container element.
- This allows a single event listener attached to the container element to respond to clicks on any of its descendant bubbles.

### Event Delegation

- Instead of attaching an event listener to each individual bubble, the game utilizes event delegation.
- Event delegation involves attaching a single event listener to a parent element and then using conditionals inside the event handler to determine which child element triggered the event.
- In the Bubble Game, a single event listener is attached to the container element that holds all the bubbles.
- When a click event occurs on any bubble, it bubbles up to the container element, where the event listener is waiting.
- The event handler checks the `event.target` property to identify which bubble was clicked and then responds accordingly.

### Technologies Used

This project is built using the following technologies:

- **HTML:** Structure the webpage.
- **CSS:** Style the game interface and bubbles.
- **JavaScript:** Implement game logic, including bubble generation, scoring, timer functionality, event bubbling, and event delegation.

### Demo

You can play the Bubble Game [here](https://rahulrwt05.github.io/bubble-Game/).

### Screenshots

![Bubble Game](https://github.com/rahulrwt05/30-days-of-js/blob/main/images/bubble_game.png)
*Screenshot showcasing the Bubble Game project*

## How to Play
To play the Bubble Game:
1. Click the "Start" button to begin the game.
2. Bubbles will appear on the screen, each with a numeric value.
3. Look for bubbles with the hit value displayed in the top bar.
4. Click on bubbles with the matching hit value to earn points.
5. The game ends when the timer reaches zero.
6. Your final score will be displayed on the screen.

   
## Future Enhancements
The Bubble Game can be further enhanced and expanded:
- Adding levels with increasing difficulty.
- Incorporating sound effects or music for a more immersive experience.
- Implementing a leaderboard to track high scores.
- Enhancing the game's graphics and animations.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to submit a pull request.



---
Feel free to customize this template with specific details about your project, such as adding screenshots, providing more detailed instructions for running the project locally, and including any additional features or functionalities you've implemented.

### Connect with me:

[<img align="left" alt="codeSTACKr.com" width="22px" src="https://img.icons8.com/?size=512&id=n9d0Hm43JCPK&format=png" />][website]
[<img align="left" alt="codeSTACKr | LinkedIn" width="22px" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" />][linkedin]

<br />

[website]: https://rahulrwt05.vercel.app/
[linkedin]: https://www.linkedin.com/in/rahulrwt05/

Happy coding! 🚀

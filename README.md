# Rock, Paper, Scissors Game Guide

Welcome to the Rock, Paper, Scissors game! This is a classic game that you can now play on your computer. You'll be playing against the computer in this version. Here's how to play:

## Game Rules

1. **Rock** beats **Scissors** (Rock crushes Scissors)
2. **Scissors** beats **Paper** (Scissors cut Paper)
3. **Paper** beats **Rock** (Paper covers Rock)

If both you and the computer choose the same, it's a tie and nobody wins.

## How to Play

1. Start the game: open the web-app

2. Make your choice: You'll be presented with three options - Rock, Paper, or Scissors. Click on the option you want to play and press play.

3. Computer's turn: The computer will make its choice automatically. You won't be able to see this choice until after you've made yours.

4. See the result: After both you and the computer have made your choices, the game will show who won the round.

5. Repeat: Continue playing rounds until you decide to stop. There's no set number of rounds, so you can play as many or as few as you want!

Remember, the key to winning at Rock, Paper, Scissors is to try and anticipate the other player's move. Good luck!

## JavaScript implementation

The game logic is contained in `js/javascript.js` and is kept separate from the HTML structure.

### Game options

The `options` object defines the name and result images for rock, paper, and scissors. Keeping this information in one place avoids repeating image paths throughout the script.

```js
const options = {
    1: { name: "rock", humanImage: "images/1_big.png", machineImage: "images/1_big_m.png" },
    2: { name: "paper", humanImage: "images/2_big.png", machineImage: "images/2_big_m.png" },
    3: { name: "scissors", humanImage: "images/3_big.png", machineImage: "images/3_big_m.png" }
};
```

### Game state

The score is stored in a single object, while `humanChoice` stores the option selected for the next round.

```js
const score = { wins: 0, losses: 0, draws: 0 };
let humanChoice = null;
```

### DOM events and option selection

The script retrieves the required interface elements with `querySelector`. Event listeners are registered in JavaScript instead of using inline `onclick` attributes in the HTML.

When an option is selected, `selectChoice()`:

- Stores the selected value.
- Updates `aria-pressed` so assistive technologies can identify the active option.
- Enables the play button.
- Updates the helper message.

The play button remains disabled until the user selects an option. `playRound()` also checks that a choice exists before continuing.

### Playing a round

`randomChoice()` generates a number between 1 and 3 for the computer. `playRound()` then compares both choices using the standard game rules:

- Identical choices produce a draw.
- Rock beats scissors.
- Paper beats rock.
- Scissors beat paper.
- Any remaining combination is a loss.

After evaluating the round, the function updates the score, result message, result color, and player images.

### Accessibility

The image descriptions change dynamically to announce both choices:

```js
humanImage.alt = `You chose ${human.name}`;
machineImage.alt = `The computer chose ${machine.name}`;
```

The result is displayed inside an `aria-live` status element in the HTML, allowing screen readers to announce it automatically. The option buttons also expose their selected state through `aria-pressed`.

### Score and reset

`updateScoreboard()` synchronizes the score object with the values displayed in the interface. It is used after every round and when resetting the game.

`resetGame()` restores the complete initial state:

- Sets all scores to zero.
- Clears the current selection.
- Removes the selected state from every option.
- Disables the play button.
- Restores the initial images and alternative text.
- Clears the previous round result.

link to the game: https://rock-paper-scissors-web-production.up.railway.app/

<img width="462" height="465" alt="image" src="https://github.com/user-attachments/assets/e6f1387d-f598-41ff-af44-db93d8b8596a" />

const options = {
    1: { name: "rock", humanImage: "images/1_big.png", machineImage: "images/1_big_m.png" },
    2: { name: "paper", humanImage: "images/2_big.png", machineImage: "images/2_big_m.png" },
    3: { name: "scissors", humanImage: "images/3_big.png", machineImage: "images/3_big_m.png" }
};

const initialImages = {
    human: "images/giphy.gif",
    machine: "images/giphy_machine.gif"
};

const score = { wins: 0, losses: 0, draws: 0 };
let humanChoice = null;

const choiceButtons = document.querySelectorAll(".choice");
const playButton = document.querySelector("#play");
const resetButton = document.querySelector("#reset");
const humanImage = document.querySelector("#human_choice");
const machineImage = document.querySelector("#machine_choice");
const roundResult = document.querySelector("#round_result");
const choiceHelp = document.querySelector("#choice_help");

function randomChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function selectChoice(event) {
    humanChoice = Number(event.currentTarget.dataset.choice);

    choiceButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button === event.currentTarget));
    });

    playButton.disabled = false;
    choiceHelp.textContent = `${options[humanChoice].name} selected.`;
}

function playRound() {
    if (!humanChoice) return;

    const machineChoice = randomChoice();
    const human = options[humanChoice];
    const machine = options[machineChoice];

    humanImage.src = human.humanImage;
    humanImage.alt = `You chose ${human.name}`;
    machineImage.src = machine.machineImage;
    machineImage.alt = `The computer chose ${machine.name}`;

    if (humanChoice === machineChoice) {
        score.draws += 1;
        roundResult.textContent = "Draw";
        roundResult.dataset.result = "draw";
    } else if (
        (humanChoice === 1 && machineChoice === 3) ||
        (humanChoice === 2 && machineChoice === 1) ||
        (humanChoice === 3 && machineChoice === 2)
    ) {
        score.wins += 1;
        roundResult.textContent = "You win";
        roundResult.dataset.result = "win";
    } else {
        score.losses += 1;
        roundResult.textContent = "Computer wins";
        roundResult.dataset.result = "loss";
    }

    updateScoreboard();
}

function updateScoreboard() {
    document.querySelector("#t_wins").textContent = score.wins;
    document.querySelector("#t_loss").textContent = score.losses;
    document.querySelector("#t_draws").textContent = score.draws;
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.draws = 0;
    humanChoice = null;

    updateScoreboard();
    choiceButtons.forEach((button) => button.setAttribute("aria-pressed", "false"));
    playButton.disabled = true;
    humanImage.src = initialImages.human;
    humanImage.alt = "Waiting for your choice";
    machineImage.src = initialImages.machine;
    machineImage.alt = "Waiting for the computer's choice";
    roundResult.textContent = "Choose an option";
    delete roundResult.dataset.result;
    choiceHelp.textContent = "Select an option to continue.";
}

choiceButtons.forEach((button) => button.addEventListener("click", selectChoice));
playButton.addEventListener("click", playRound);
resetButton.addEventListener("click", resetGame);

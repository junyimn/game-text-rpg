const textElement = document.getElementById("container-text");
const optionButtons = document.getElementById("container-option-buttons");

let state = {};

const startGame = () => {
  state = {};
  showText(1);
};

const showText = (textCardIndex) => {
  const textCard = textCards.find((textCard) => textCard.id === textCardIndex);
  textElement.innerText = textCard.text;
  while (optionButtons.firstChild) {
    optionButtons.removeChild(optionButtons.firstChild);
  }

  textCard.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("grid-buttons");
      button.addEventListener("click", () => selectOption(option));
      optionButtons.appendChild(button);
    }
  });
};

const showOption = (option) => {
  return option.requiredState == null || option.requiredState(state);
};

const selectOption = (option) => {
  const nextTextCardID = option.nextText;
  state = Object.assign(state, option.setState);
  showText(nextTextCardID);
};

const textCards = [
  {
    id: 1,
    text: "Long ago, in ancient China, a dissastrous war broke out splitting the country into three powerful kingdoms; Han Shu, Sun Wu and Cao Wei. This story follows a young warrior whose talent is yet to be discoverd but equals to 1000 blades and books, this warriors name is Junyi",
    options: [
      {
        text: "Continue",
        nextText: 2,
      },
    ],
  },

  {
    id: 2,
    text: "You (Junyi), wake up in a forein land, with no belongings and little to no memory of how you got there, infront of you lays a mysterious shiny amulet, do you take it?",
    options: [
      {
        text: "Take the amulet, you may make use of it later",
        setState: { amulet: true },
        nextText: 3,
      },
      {
        text: "Leave it, you dont know what curses it may contain",
        nextText: 3,
      },
    ],
  },

  {
    id: 3,
    text: "You follow a dusty path with the sun burning in the background as it slowly sets, as you try real hard to remember how you got here but to no avail. Suddenly an old merchantappears. He is wearing a long cape and a mask which covers the bottom half of his face. 'Hey kid! , I woudn't be traveling in this area without a weapon, you be dead in minutes!, tell you what, lets trade?' ",
    options: [
      {
        text: "Luckily you remember you had picked up the amulet before and offerd it to the merchant for the sword, in which he happily accepted!",
        requiredState: (currentState) => currentState.amulet,
        setState: { amulet: false, sword: true },
        nextText: 4,
      },
      {
        text: "The merchant notice you had no bleongins and took pity on you. 'Tell you what kid, take this staff, its not great but it should protect you for awhile. You take the staff, thanking the kind merchant profundly",
        setState: { staff: true },
        nextText: 4,
      },
      {
        text: "Stories of bandit pretending to be old merchants quickly rushed into your mind. You are in a forein land and approached by sketchy looking old man, you cant take the risk, espcially with no weapons. You keep a safe distance and refused to trade as you walk the other way",
        nextText: 100,
      },
    ],
  },
];

startGame();

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
  return true;
};

const selectOption = (option) => {};

const textCards = [
  {
    id: 1,
    text: "You wake up in a mysterious place, with no memeory of how you got there. In the corner of you eye you catch two wepons laying in the floor, which one do you take?",
    options: [
      {
        text: "Sword",
        setState: { sword: true },
        nextText: 2,
      },
      {
        text: "Bow and Arrow",
        setState: { bow: true },
        nextText: 2,
      },
    ],
  },
  // {
  //   id: 2,
  //   text:
  // },
];

startGame();

const possibleAnswers = [
  "Yes",
  "NO",
  "Of course",
  "In your dreams.",
  "I don't think so",
  "Maybe",
  "Ask again later",
  "Not a chance",
];

function askQuestion(question) {
  const answer = document.getElementById("answer");
  const img = document.getElementById("8ball");
  //   replace the image with https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png
  img.src =
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";

  const number = Math.floor(Math.random() * possibleAnswers.length);

  const generatedAnswer = possibleAnswers[number];
  console.log(generatedAnswer);
  answer.innerText = generatedAnswer;

  answer.style.display = "block";
  setTimeout(() => {
    startConfetti();
  }, 1000);

  setTimeout(() => {
    stopConfetti();
  }, 2000);
}

function onClick() {
  const answer = document.getElementById("answer");
  answer.style.display = "none";

  const img = document.getElementById("8ball");
  img.src =
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png";

  setTimeout(() => {
    const question = prompt("Ask a Yes/No question please");
    askQuestion(question);
  }, 1000);
}

const correctAnswers = ["B", "D", "C", "A", "D"];
const form = document.querySelector(".javaQuestionair");
const result = document.querySelector(".result");
const scoreStat = document.querySelector(".score");
const reload = document.querySelector(".reload");
const question = document.querySelectorAll(".question");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  let usersAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  usersAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
      question[index].classList.add("correct");
    } else {
      question[index].classList.add("wrong");
    }
  });
  scrollTo(0, 0);
  scoreStat.textContent = `You scored ${score}/5!`;
  result.classList.remove("hide");
});

reload.addEventListener("click", (event) => {
  location.reload();
});


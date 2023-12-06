let box = document.getElementById("box");
let text = document.getElementById("question");
let button = document.querySelectorAll("button")[0];
let button1 = document.querySelectorAll("button")[1];
let button2 = document.querySelectorAll("button")[2];
let button3 = document.querySelectorAll("button")[3];
let number = document.getElementById("number");

const questions = [
    {text: "Kam naudingos morkos?",
    choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    answer: "Odai"},
    {text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"},
    {text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"},
    {text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"},
    {text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"}]

class Quiz {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    textChange() {
        text.innerText = this.text;
        button.innerText = this.choices[0];
        button1.innerText = this.choices[1];
        button2.innerText = this.choices[2];
        button3.innerText = this.choices[3];
    }
}

const quizzes = questions.map(q => new Quiz(q.text, q.choices, q.answer));

let currentQuizIndex = 0;
let currentQuiz = quizzes[currentQuizIndex];
let score = 0;

function handleButtonClick(selectedAnswer) {
    if (selectedAnswer === currentQuiz.answer) {
        score++;
    }
    // Perėjimas prie kito klausimo
    currentQuizIndex++;
    if (currentQuizIndex < quizzes.length) {
        currentQuiz = quizzes[currentQuizIndex];
        currentQuiz.textChange();
        number.innerText = currentQuizIndex + 1;
    } else {
        showScore();
    }
}

function showScore() {
    const scoreDiv = document.createElement("div");
    scoreDiv.style.textAlign = "center";
    scoreDiv.id = "scoreDiv"; 

    // Taškai
    const scoreText = document.createElement("p");
    scoreText.innerText = "Your Score: " + score;
    scoreDiv.appendChild(scoreText);

    // Reset mygtukas
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset Quiz";
    resetButton.addEventListener("click", resetQuiz);
    scoreDiv.appendChild(resetButton);

    // Parodymas
    document.body.appendChild(scoreDiv);
}
function resetQuiz() {
    const scoreDiv = document.querySelector("#scoreDiv");
    if (scoreDiv) {
        scoreDiv.remove();
    }

    currentQuizIndex = 0;
    currentQuiz = quizzes[currentQuizIndex];
    score = 0;
    currentQuiz.textChange();
    number.innerText = currentQuizIndex + 1;
}

button.addEventListener("click", function () {
    handleButtonClick(button.innerText);
});

button1.addEventListener("click", function () {
    handleButtonClick(button1.innerText);
});

button2.addEventListener("click", function () {
    handleButtonClick(button2.innerText);
});

button3.addEventListener("click", function () {
    handleButtonClick(button3.innerText);
});

currentQuiz.textChange();
number.innerText = currentQuizIndex + 1;
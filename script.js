const quizQuestions = [
    {
        question: "What is the capital of Lebanon?",
        options: ["Rome", "Paris", "Beirut", "London"],
        answer: "Beirut"
    },
    {
        question: "What does S in HTTPS stands for?",
        options: ["Secure", "System", "Speed", "Size"],
        answer: "Secure"
    },
    {
        question: "What language runs in a web browser?",
        options: ["Python", "JavaScript", "C++", "C#"],
        answer: "JavaScript"
    },
    {
        question: "How to get the length of an array in JavaScript?",
        options: ["count", "size", "items", "length"],
        answer: "length"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let isOptionSelected = false;

const questionEl = document.getElementById("questions");
const optionsEl = document.getElementById("options");
const answerEl = document.getElementById("questionAnswer");

function displayQuestion(){
    let currentQuestion = quizQuestions[currentQuestionIndex];

    answerEl.innerHTML = '';
    questionEl.innerHTML = currentQuestion.question;
    optionsEl.innerHTML = '';

    currentQuestion.options.forEach(function(option, index){
        const optionEl = document.createElement("li");
        optionEl.innerHTML = `
                    <input type="radio" name="option" value="${option}" id="option${index}" onclick="selectOption('${option}')">
                    <label for="option${index}">${option}</label>
                `;
        optionsEl.appendChild(optionEl);
    });

    isOptionSelected = false;
}

function selectOption(option){
    if(isOptionSelected){
        return;
    }
    let currentQuestion = quizQuestions[currentQuestionIndex];

    if(option == currentQuestion.answer){
        answerEl.innerHTML = "Correct!";
        answerEl.style.color = "green";
        score++;
    } else{
        answerEl.innerHTML = "Wrong! The correct answer is " + currentQuestion.answer;
        answerEl.style.color = "red";
    }
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);

    isOptionSelected = true;
}

function nextQuestion(){
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
        questionEl.innerHTML = "Quiz Completed!";
        optionsEl.innerHTML = '';
        answerEl.innerHTML = `Your score is ${score} out of ${quizQuestions.length}`;
    } else{
        displayQuestion();
    }
    
}

displayQuestion();
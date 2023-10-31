// script.js
let currentQuestionIndex = 0;
let correctAnswers = 0;

const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyperlinks and Text Markup Language', correct: true },
            { text: 'High Technology Modern Language', correct: false },
            { text: 'Hyper Transfer Markup Language', correct: false }
        ]
    },
    {
        question: 'Which symbol is used for comments in JavaScript?',
        answers: [
            { text: '//', correct: true },
            { text: '<!-- -->', correct: false },
            { text: '-->', correct: false }
        ]
    },
    {
        question: 'Which HTML tag is used to link a CSS file?',
        answers: [
            { text: '<link>', correct: true },
            { text: '<css>', correct: false },
            { text: '<style>', correct: false }
        ]
    },
    {
        question: 'In CSS, which symbol is used to target a class?',
        answers: [
            { text: '.', correct: true },
            { text: '#', correct: false },
            { text: '@', correct: false }
        ]
    },
    {
        question: 'Which of the following is a JavaScript library?',
        answers: [
            { text: 'Bootstrap', correct: false },
            { text: 'jQuery', correct: true },
            { text: 'Sass', correct: false }
        ]
    }
];


questions.sort(() => Math.random() - 0.5);

function showQuestion() {
    const questionObj = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerText = questionObj.question;

    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';

    questionObj.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        correctAnswers++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz finished! Your score: ${correctAnswers} / ${questions.length}`);
    }
}

showQuestion();

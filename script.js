document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked'),
        q6: document.querySelector('input[name="q6"]:checked'),
        q7: document.querySelector('textarea[name="q7"]').value.trim(),
        q8: document.querySelector('input[name="q8"]:checked'),
        q9: Array.from(document.querySelectorAll('input[name="q9"]:checked')),
        q10: document.querySelector('textarea[name="q10"]').value.trim(),
        q11: document.querySelector('input[name="q11"]:checked'),
        q12: document.querySelector('textarea[name="q12"]').value.trim(),
        q13: Array.from(document.querySelectorAll('input[name="q13"]:checked')),
        q14: Array.from(document.querySelectorAll('input[name="q14"]:checked')),
        q15: Array.from(document.querySelectorAll('input[name="q15"]:checked')),
        q16: document.querySelector('textarea[name="q16"]').value.trim()
    };

    let score = 0;

    // Check single-choice questions
    const singleChoiceQuestions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q8', 'q11'];
    singleChoiceQuestions.forEach(question => {
        const correctAnswer = getCorrectAnswer(question); // Get correct answer for each question
        if (userAnswers[question] && userAnswers[question].value === correctAnswer) {
            score++;
        }
    });

    // Check checkbox questions
    const checkboxQuestions = ['q9', 'q13', 'q14', 'q15'];
    checkboxQuestions.forEach(question => {
        const selectedCheckboxes = userAnswers[question];
        const correctCheckboxes = getCorrectCheckboxes(question); // Get correct checkboxes for each question
        if (selectedCheckboxes && correctCheckboxes) {
            const selectedCheckboxValues = selectedCheckboxes.map(input => input.value);
            const correctCheckboxCount = correctCheckboxes.filter(answer => selectedCheckboxValues.includes(answer)).length;
            if (correctCheckboxCount === correctCheckboxes.length) {
                score++;
            }
        }
    });

 // Check personal questions
const personalQuestions = ['q7', 'q10', 'q12', 'q16'];
personalQuestions.forEach(question => {
    if (userAnswers[question].trim() !== '') {
        score++; // Add points for any non-empty answer
    }
});


    if (score === Object.keys(userAnswers).length) {
        window.location.href = 'lovememories.html';
    } else {
        const retry = confirm('Baby, you missed some questions or answered some questions wrongly. Do you want to retake the quiz?');
        if (retry) {
            resetQuiz();
        }
    }

});

function getCorrectAnswer(question) {
    switch (question) {
        case 'q1':
            return 'b';
        case 'q2':
            return 'c'; // Adjust correct answers as needed
        case 'q3':
            return 'c'; // Adjust correct answers as needed
        case 'q4':
            return 'a'; // Adjust correct answers as needed
        case 'q5':
            return 'b'; // Adjust correct answers as needed
        case 'q6':
            return 'c'; // Adjust correct answers as needed
        case 'q8':
            return 'a'; // Adjust correct answers as needed
        case 'q11':
            return 'd'; // Adjust correct answers as needed
        default:
            return '';
    }
}

function getCorrectCheckboxes(question) {
    switch (question) {
        case 'q9':
            return ['a', 'b', 'c']; // Adjust correct answers as needed
        case 'q13':
            return ['a', 'b', 'c' ,'d']; // Adjust correct answers as needed
        case 'q14':
            return ['a', 'b', 'c'];
        case 'q15':
            return ['a', 'b', 'c']; // Adjust correct answers as needed
        default:
            return [];
    }
}



function resetQuiz() {
    // Reset form elements
    const form = document.getElementById('quiz-form');
    form.reset();

    alert('Quiz has been reset. Please answer the questions again baby.');
}

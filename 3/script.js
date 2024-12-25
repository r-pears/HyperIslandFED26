document.addEventListener('DOMContentLoaded', () => {


    /* form container */
    const questionContainer = document.createElement("form");
    questionContainer.classList.add("questioncontainer");
    questionContainer.setAttribute('action', '/submit');
    questionContainer.setAttribute('method', 'post');

    /* username label and input and submit*/
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute('for', 'username');
    nameLabel.textContent = 'Enter your username'
    questionContainer.appendChild(nameLabel); 

    const nameInput = document.createElement("input");
    nameInput.setAttribute('id', 'username');
    nameInput.setAttribute('required', true);
    questionContainer.appendChild(nameInput);

    const submit = document.createElement("input");
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    questionContainer.appendChild(submit);

    document.body.insertBefore(questionContainer, document.body.firstChild);

    /* question section */
    /* 1 container */
    const questionContentContainer = document.createElement("div");
    questionContentContainer.classList.add("questioncontentcontainer");
    document.body.appendChild(questionContentContainer);

    /* 2 title */
    const questionTitle = document.createElement("span");
    questionTitle.classList.add("question-title");
    questionTitle.textContent = "question title";
    questionContentContainer.appendChild(questionTitle);


    /* 3 question content */
    const questionContent = document.createElement("span");
    questionContent.classList.add("question-content");
    questionContent.textContent = "this is content of the question";
    questionContentContainer.appendChild(questionContent);

    let currentQuestionIndex = 0;
    let score = 0;
    let questions =  [];

    async function fetchQuestions() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
            const data = await response.json();

            if (data.response_code === 0) {
                questions = data.results.map(q => ({
                    question: q.question,
                    correctAnswer: q.correct_answer,
                    answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
                }));
                displayQuestion();
            } else {
                throw new error('Failed to fecth questions!');
            } 
        } catch (error) {
            questionContainer.innerHTML = `<p>Error: ${error.message}. Please try again later</p>`;
        }
    }

    function displayQuestion() {

    }
}) 


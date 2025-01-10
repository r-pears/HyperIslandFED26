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
    submit.setAttribute('value', 'Start Quiz');
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
    questionTitle.textContent = "";
    questionContentContainer.appendChild(questionTitle);


    /* 3 question content */
    const questionContent = document.createElement("span");
    questionContent.classList.add("question-content");
    questionContent.textContent = "";
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
                throw new Error('Failed to fecth questions!');
            } 
        } catch (error) {
            questionContainer.innerHTML = `<p>Error: ${error.message}. Please try again later</p>`;
        }
    }

    /* display the question */
    function displayQuestion() {
        const question = questions[currentQuestionIndex];

        //update question title and content
        questionTitle.textContent = `Question ${currentQuestionIndex + 1} / 10`;
        questionContent.textContent = decodeHTML(question.question);

        //clear existing answers
        const existingAnswers = document.querySelector('.answers-container');
        if (existingAnswers) {
            existingAnswers.remove(); 
        }

        // Create a container for answer options
        const answerContainer = document.createElement('div');
        answerContainer.classList.add('answers-container');
        questionContentContainer.appendChild(answerContainer);

        // Add answer options as buttons
        question.answers.forEach((answer) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = decodeHTML(answer);
            answerButton.classList.add('answer-btn');
            answerContainer.appendChild(answerButton);

            // Add event listener
            answerButton.addEventListener('click', () => handleAnswer(answer, answerButton));
        });
    }

    /* handle answer selection */
    function handleAnswer(selectedAnswer, button) {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        //highlight the selected answer
        if (selectedAnswer === correctAnswer) {
            button.classList.add('correct');
            score++;
        } else {
            button.classList.add('incorrect');
            //highlight the correct answer
            document.querySelectorAll('.answer-btn').forEach((btn) => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }

        //remove all buttons after answering current question
        document.querySelectorAll('.answer-btn').forEach((btn) => {
            btn.disabled = true;
        });

        //move to the next question after a short delay
        setTimeout(() => {
           currentQuestionIndex++;
           if (currentQuestionIndex < questions.length) {
            displayQuestion();
           } else {
            showFinalScore();
           }
        }, 400);
    }

    /* show finla score */
    function showFinalScore() {
        //remove the question content
        const answerContainer = document.querySelector('.answers-container');
        if(questionTitle) questionTitle.style.display = 'none';
        if(questionContent) questionContent.style.display = 'none';
        if(answerContainer) answerContainer.remove();

        const completeContent = document.createElement('div');
        const completeTitle = document.createElement('h2');
        const completeWord = document.createElement('p');

        completeTitle.classList.add('complete-title');
        completeWord.classList.add('complete-word');

        completeContent.appendChild(completeTitle);
        completeContent.appendChild(completeWord);
        questionContentContainer.appendChild(completeContent);

        completeTitle.textContent = `Quiz Complete`;
        completeWord.textContent = `Congratulations, ${username}! Your score is ${score} out of ${questions.length}`;

        /* completeword animation */
        setTimeout(() => {
            completeWord.style.animation = 'none';
            void completeWord.offsetWidth;
            requestAnimationFrame(() => {
                completeWord.style.animation = 'complete-word-alt 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both';
            });
        }, 0);

        //set restart
        const backButton = document.createElement("button");
        backButton.classList.add('back-btn');
        backButton.textContent = 'Restart';
        questionContentContainer.appendChild(backButton);

        backButton.addEventListener('click', restartQuiz);
    }

    /* decode HTML entitles in questions */
    function decodeHTML(html) {
        const text = document.createElement("textArea");
        text.innerHTML = html;
        return text.value;
    }

    //hide the questioncontentcontainer before submit the username
    questionContentContainer.style.display = 'none'; 

    //add submit event liistener
    questionContainer.addEventListener('submit', (event) => {
        event.preventDefault();

        //save the username
        username = nameInput.value.trim();
        //hide the form          
        questionContainer.style.display = 'none';
        /* fetch questions */
        fetchQuestions();

        //show the question content container
        questionContentContainer.style.display = '';
    });

    /* restart quiz function */
    function restartQuiz() {
        //reset the game
        currentQuestionIndex = 0;
        score = 0;

        const answerContainer = document.querySelector('.answers-container');
        const completeContent = document.querySelector('.complete-content');
        const completeWord = document.querySelector('.complete-word');
        const backButton = document.querySelector('.back-btn');
        const completeTitle = document.querySelector('.complete-title');


        if(answerContainer) answerContainer.remove();
        if(completeTitle) completeTitle.remove();
        if(completeContent) completeContent.remove();
        if(completeWord) completeWord.remove();
        if(backButton) backButton.remove();

        //clear the question container
        if (questionTitle) questionTitle.style.display = '';
        if (questionContent) questionContent.style.display = '';

        //display the first question
        displayQuestion();
    }
}) ;


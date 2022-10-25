const questions = [
    {
        question: "What's the skeleton structure on a website?",
        answers: {
            q1: 'HTML',
            q2: 'JavaScript',
            q3: 'Python',
            q4: 'CSS',
        },
    },
    {
        question: 'What to use in JAVAscript to make any website interactive',
        answers: {
            q1: 'AddEventListener',
            q2: 'Functions',
            q3: 'Looping',
            q4: 'Conditions',
        },
    },
    {
        question: 'What keyword is used for creating an instance of an object?',
        answers: {
            q1: 'new',
            q2: 'make',
            q3: 'var',
            q4: 'inst',
        },
    },
    {
        question: 'What is the output? const age = 26; const beverage = age >= 21 ? "Beer" : "Juice"; console.log(beverage);' ,
        answers: {      
            q1: 'Beer',
            q2: 'Error',
            q3: 'Juice',
            q4: 'Water',
        },
    },
    {
        question: 'Learing how to programme means:',
        answers: { 
            q1: 'how to solve problems using code',
            q2: 'how to prepare an agenda',
            q3: 'how to solve mathematical problem',
            q4: 'how to communicate with aliens',
        },
    },
]

// function myFunction() {
//     for (let i = 0; i< questions.length; i++){
//     randomQuestion = Math.floor(Math.random() * questions.length);
//     document.write(questions[i]);
//     }
// }

const quiestionTasks = document.querySelector('.quiz-list');
const startQuizBtn = document.querySelector('.start-btn');

function markupQuizList(questions) { 
	quiestionTasks.innerHTML = "";
    quiestionTasks.insertAdjacentHTML('beforeend', questions.map(question => { 
        return `<li class="question">
                            <p>${question.question}</p>
                            <input type="radio" id="q1" name="q" value="1">
                            <label for="q1">${question.answers.q1}</label><br>
                            <input type="radio" id="q2" name="q" value="0">
                            <label for="q2">${question.answers.q2}</label><br>
                            <input type="radio" id="q3" name="q" value="0">
                            <label for="q3">${question.answers.q3}</label><br>
                            <input type="radio" id="q4" name="q" value="0">
                            <label for="q4">${question.answers.q4}</label><br><br>
                        </li>`
    }).join('')
    );
}

// startQuizBtn.addEventListener('click', markupQuizList);

markupQuizList(questions);

// const startQuizBtn = document.querySelector('.start-btn');

function countChecked() { 

}

function checkUnswers(){
    
    let choice = document.querySelector('input');
    choice.addEventListener('change', function (){
        console.log(choice[0]);
    })
    
    // if (choice[0].value=="1" && choice[0].){

    // }
}


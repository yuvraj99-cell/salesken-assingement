const quizData = [
    {
        id:1,
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        id:2,
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        id:3,
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        id:4,
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        id:5,
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        id:6,
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        id:7,
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        id:8,
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const skipBtn = document.getElementById('skip')
let currentQuiz = 0
let score = 0
let skipped_que=0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           Result.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
           Quiz.innerHTML ="Please check your result"
       }
    }
})

skipBtn.addEventListener('click', () => {
    skipped_que++
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           Result.innerHTML = `
           
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
           Quiz.innerHTML ="Please check your result"
       }
    
})




const quizbtn=document.querySelector('.quizbtn');
const resultbtn=document.querySelector('.resultbtn');
const movebtn=document.querySelector('.movebtn');
const Quiz=document.querySelector('.quiz');
const Result=document.querySelector('.result');



resultbtn.addEventListener('click',()=>{
    movebtn.classList.add('rightbtn');
    Result.classList.add('resultForm');
    Quiz.classList.remove('quizForm');
    movebtn.innerHTML="Result"
    if(currentQuiz < quizData.length) {
        Result.innerHTML ="Result Not Generated"
        loadQuiz()
    } else {
        Result.classList.add('display_que')
        Result.innerHTML = `
        <div class="que_no">
        <button class="index">1</button>
        <button class="index">2</button>
        <button class="index">3</button>
        <button class="index">4</button>
        <button class="index">5</button>
        <button class="index">6</button>
        <button class="index">7</button>
        <button class="index">8</button>
        <button class="index">9</button>
        <button class="index">10</button>
    </div>
        <h2>Your score : ${score}</h2>

        <div className="card">
        <h4>Correct answers : ${score}</h4>
        <h4>Wrong answers : ${quizData.length-score-skipped_que}</h4>
        <h4>Skipped answer : ${skipped_que}</h4>
        </div>

        <button class="exit" onclick="location.reload()">Exit</button>
        `
        Quiz.innerHTML ="Please check your result"
    }
    
    // Result.innerHTML="Result Not Generated "
    
})
quizbtn.addEventListener('click',()=>{
    movebtn.classList.remove('rightbtn');
    Result.classList.remove('resultForm');
    Quiz.classList.add('quizForm');
    movebtn.innerHTML="Quiz"
   
  
   
})
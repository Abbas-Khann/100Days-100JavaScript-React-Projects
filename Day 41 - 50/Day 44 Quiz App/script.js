// Let's access the elements through DOM

// We wanted to hardcode this with Vanilla JS
// This app will be made at a very high level with react and an API which will have a variety of quizzes


let startBtn = document.querySelector('.start')
let screen = document.querySelector('.start-game')
let quizQuestion = document.querySelector('.quiz-question')
let answerBtns = document.querySelectorAll('.btn')
let nextBtn = document.querySelector('.next')
let nextBtn2 = document.querySelector('.next-2')
let questions = [

    {
        question: 'What is the best Web3 Learning Platform?',
        answers: [
            {text: 'LearnWeb3', correct: true},
            {text: 'LearnWeb3', correct: true},
            {text: 'LearnWeb3', correct: true},
            {text: 'LearnWeb3', correct: true}
        ]
    },
    {
      question: 'What is your favorite LW3 track and Why is it Sophomore?',
      answers: [
          {text: 'Because it is', correct: true},
          {text: 'Best for Fundamentals', correct: true},
          {text: 'Because of the Whitelist Dapp', correct: true},
          {text: 'Because of the Gas blog', correct: true}
      ]
    },
    {
      question: 'Who is that tall dude in the LW3 team who types like a machine and looks like he is 43?',
      answers: [
          {text: 'Sneh Koul', correct: false},
          {text: 'Kacie Ahmed', correct: false},
          {text: 'Haardik Kumar', correct: true},
          {text: 'None of them', correct: false}
      ]
    }
];

startBtn.addEventListener('click', ()=> {
    screen.classList.add('up')
    showQuestions()
})


function showQuestions() {
    for (let i = 0; i < answerBtns.length; i++) {
        quizQuestion.innerText = questions[0].question
        answerBtns[i].textContent = questions[0].answers[i].text

            answerBtns[i].addEventListener('click', function quiz() {
                nextBtn.style.display = 'block'
                nextBtn2.style.display = 'none'

                if (questions[0].answers[i].correct === true) {
                    answerBtns[i].style.backgroundColor = 'lightgreen'
                    this.removeEventListener('click', quiz)

                }
                else {
                    answerBtns[i].style.backgroundColor = 'red'

                    this.removeEventListener('click', quiz)
                }

            })

    }

}

function nextQuestion() {
    for (let i = 0; i < answerBtns.length; i++) {
        quizQuestion.innerText = questions[1].question
        answerBtns[i].textContent = questions[1].answers[i].text

        answerBtns[i].addEventListener('click', function quiz() {
            nextBtn.style.display = 'none'
            nextBtn2.style.display = 'block'

            if (questions[1].answers[i].correct === true) {
                answerBtns[i].style.backgroundColor = 'lightgreen'

            }
            else {
                answerBtns[i].style.backgroundColor = 'red'

            }

        })

    }

}
function nextQuestion2() {
    for (let i = 0; i < answerBtns.length; i++) {
        quizQuestion.innerText = questions[2].question
        answerBtns[i].textContent = questions[2].answers[i].text

        answerBtns[i].addEventListener('click', function quiz() {
            nextBtn.style.display = 'none'
            nextBtn2.style.display = 'block'

            if (questions[2].answers[i].correct === true) {
                answerBtns[i].style.backgroundColor = 'lightgreen'

            }
            else {
                answerBtns[i].style.backgroundColor = 'red'

            }

        })

    }

}



nextBtn.addEventListener('click', ()=> {
    answerBtns.forEach((item)=> {
        item.style.backgroundColor = 'white'
    })
    nextQuestion()

})


nextBtn2.addEventListener('click', ()=> {
    answerBtns.forEach((item)=> {
        item.style.backgroundColor = 'white'
        nextBtn.style.display = 'none'
    })
    nextQuestion2()
})




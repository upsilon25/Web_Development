

const quizdata=[
    {
      question:'who is elon ?',
      a:'scientist', 
      b:'phycisist',
      c:'innovator',
      d:'all',
      correct:'d'
    },
    {
        question:'what is tesla ?',
        a:'car', 
        b:'train',
        c:'bus',
        d:'rocket',
        correct:'a'
      }
]

const questionE = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text') 

let currentQuiz=0;

loadQuiz()

function loadQuiz(){
    const currentQuizdata = quizdata[currentQuiz];

}
const answers = document.querySelectorAll('answer');
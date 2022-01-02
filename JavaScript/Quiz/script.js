

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
const submitBtn=document.getElementById('Submit')
const questionE = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text') 

let currentQuiz=0;

loadQuiz()

function loadQuiz(){
    const currentQuizdata = quizdata[currentQuiz];
    questionE.InnerHTML = currentQuizdata.question;
    
    currentQuiz++;
}
function getSelected(){
    Console.log('this is')
    const answers = document.querySelectorAll('answer')
    answers.forEach((answer) => {
        console.log(answers.values)
    })
}
const answers = document.querySelectorAll('answer');
  
submitBtn.addEventListener("click", () =>{ currentQuiz++
        getSelected();
  //  if(currentQuiz<quizdata.length){ loadQuiz();
    //  }else{
    //    alert('enjoy')  ;  }   

     });

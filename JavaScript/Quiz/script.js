

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
      },
      {
        question:'where is WhiteHouse ?',
        a:'US', 
        b:'India',
        c:'China',
        d:'all',
        correct:'a'
      },
      {
        question:'what is color of sun ?',
        a:'yellow', 
        b:'red',
        c:'orange',
        d:'all',
        correct:'a'
      }
]
const submitBtn=document.getElementById('Submit');
const reset=document.getElementById('Reset');

const questionE = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text') ;
//Radio tag select
const rad= document.getElementsByName('answer')

let currentQuiz=0;
display();
function display(){
  questionE.innerHTML = quizdata[currentQuiz].question;
  a_text.innerHTML = quizdata[currentQuiz].a;
  b_text.innerHTML = quizdata[currentQuiz].b;
  c_text.innerHTML = quizdata[currentQuiz].c ;
  d_text.innerHTML = quizdata[currentQuiz].d ;
  
}

submitBtn.addEventListener('click',() => {
  
  if(currentQuiz<quizdata.length-1) {
  currentQuiz++;
   display();}
   else{alert("Test Finished")}
});
reset.addEventListener('click',() => {
  currentQuiz=0;
  display();
});
 
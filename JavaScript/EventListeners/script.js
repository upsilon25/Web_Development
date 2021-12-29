const one=document.querySelector('.one')
const two=document.querySelector('#two')

const four=document.querySelector('.four')
one.addEventListener('click',(e) =>{
   console.log("thisis so how to solve")
})
two.addEventListener('click',calling)

function calling(){
    var i=10;
    while(i>0){
    console.log(i);
    i--;
}
four.addEventListener('click',addd)

function addd(){
    document.querySelector('.three').innerHTML="this is add"
    alert("addd called")
}
}
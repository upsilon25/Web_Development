const person=['peter' , 'meter', 'shooter'];
const bio=[
       {name:'peter',
        age:23,
        school:'KGV'
       },
       {name:'meter',
        age:24,
        school:'RGV'
       }
     ]
const buttons  = document.querySelector('.submit');
const buttons2 = document.querySelector('.submit2');
const selector = document.querySelector('.selector');
const reset = document.querySelector('.reset');
const arr = document.querySelector('.array')
function cl(){
    console.log("calling cl");
    person.forEach(element => {
        console.log(element)
    });
    for (let i in person){
        console.log(i)
        console.log(person[i])
    }
}

function total(){
    console.log("thisisinow");
    bio.forEach(element => {
        console.log(element)
    });
    for (let i in bio){
        console.log(bio[i].name);
        console.log(bio[i].age);
    }
}

function divin(){
    console.log('divin');
    for (i in person){
    arr.innerHTML=person[i];}
}
let count=0
selector.addEventListener('click', () => {
    if(count<person.length){  
    arr.innerHTML=person[count];}
      else
    arr.innerHTML=count;    
    count++;
});

reset.addEventListener('click',()=>{
      count=0;
      arr.innerHTML="starting from zero"
});

buttons.addEventListener('click', cl);
buttons2.addEventListener('click',total);
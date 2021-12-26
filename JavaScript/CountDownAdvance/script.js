
const DaysE    = document.getElementById('days')  
const HoursE   = document.getElementById('hours')
const MinutesE = document.getElementById('minutes')
const SecondsE = document.getElementById('seconds')


const newYear = "1 Jan 2022";
function countdown(){
    const newyear=new Date(newYear);
    const current= new Date();
     
    distance = newyear-current
    console.log(distance);
    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor(distance%(1000*60*60*24)/(1000*60*60));
    const minutes = Math.floor(distance%(1000*60*60)/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/(1000));  
   
    console.log(days+" "+hours+" "+minutes+" "+seconds)
    
    DaysE.innerHTML    = days ;     
    HoursE.innerHTML   = hours ;
    MinutesE.innerHTML = minutes ;
    SecondsE.innerHTML = seconds ;


    


}

countdown();

setInterval(countdown, 1000);
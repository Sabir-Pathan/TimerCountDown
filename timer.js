const months =[
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octomber',
    'November',
    'December'    
] ;
const weekDays =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Frieday',
    'Saturday'
];

 const start = document.querySelector('.launching')
 const items = document.querySelectorAll('.timer-format h3')
 const displayTimeMain = document.querySelector('.timer-main')

 //launching date and time declaration

 const futurDate = new Date(2023,10,15,14,10,20);
 console.log(futurDate);
 const year = futurDate.getFullYear();

//variable declair karnekeliye let ka use kiya hai q k day ki value change karna hai.
 let day = futurDate.getDay(); //day variable me futurDate ke variable ke date ke accourding index number store honga. 
// console.log(day);
 day = weekDays[day];//weekDays array will set days name

 let date = futurDate.getDate()

 let month = futurDate.getMonth();
//  console.log(months[month])

 const houres = futurDate.getHours();
 const minutes = futurDate.getMinutes();
 start.innerHTML = `Starting on : ${day} ${date}  ${months[month]} ${year} , ${houres}:${minutes}pm.`;

 //timer declaration

 const futureTime = futurDate.getTime()//futurDate variable ka time futurTime me aayenga mili second me.
//  console.log(futureTime);

getRemaningTime = ()=>{
const todayTime = new Date ().getTime(); // current time store honga
// console.log(todayTime);

const timedifferent = futurDate - todayTime;
// console.log(timedifferent);

// converting value in milisecond
let oneDay = 24*60*60*1000;
let oneHoure = 60*60*1000;
let oneMinute = 60*1000;

let days = timedifferent / oneDay;
days=Math.floor(days);
// console.log(days);
let houres = Math.floor( (timedifferent % oneDay) / oneHoure);
// console.log(houres);
let minutes = Math.floor( (timedifferent % oneHoure) / oneMinute);
// console.log(minutes);
let seconds = Math.floor( (timedifferent % oneMinute) / 1000);
// console.log(seconds);


//set value in array
const value = [days,houres,minutes,seconds];

format = (item)=>{
    if(item<10){
       return(item=`0${item}`);
    }
    return item;
}
   
items.forEach((item,index)=>{
    item.innerHTML=format(value[index]); //set time on html counter time loop each class one by one
});
if(timedifferent < 0){
    clearInterval (countdown);
    displayTimeMain.innerHTML='<h1> Welcome to JavaScript Tutorial please sign In</h1>';
}

}
// countdown time and display remaning time every second


let countdown = setInterval(getRemaningTime,1000);
 getRemaningTime();
// We need to access the two buttons and the two inputs aswell as the paragraph
let input1 = document.getElementById("time1");
let input2 = document.getElementById("time2");
let btnSet = document.querySelector(".btn1");
let btnStop = document.querySelector(".btn2");
let para = document.querySelector("#para");

window.addEventListener("load" , () => {
    input1.placeholder = new Date().getHours();
    input2.placeholder = new Date().getMinutes();
})

let x;
function alarm() {
    if(input1.value && input2.value) {
        x = setInterval(() => {
            setAlarm();
        }, 1000)
    }
    else {
        alert('Enter the Hours and Minutes')
    }
}

const setAlarm = () => {
    let d = new Date().toLocaleDateString();
    let currentTime = new Date().getTime();
    let setAlarmTime =  new Date(`${d}${input1.value}:${input2.value}`).getTime();
    let distance = setAlarmTime - currentTime;
    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(distance)
  para.innerHTML = `Alarm IN - ${hours} : ${minutes} : ${seconds}`;

    if(distance < 0) {
        clearInterval(x);
        para.innerHTML = `'IT'S TIME!`;
        let audio = new Audio ('AlarmClock_Siemen_sound.mp3');
        audio.play();
        btnStop.addEventListener("click" , () => {
            para.innerHTML = ``;
            audio.pause();
        })
    }
}

btnSet.addEventListener("click" , alarm);
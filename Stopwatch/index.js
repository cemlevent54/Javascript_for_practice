var btnstart = document.getElementById("btnstart")
var btnstop = document.getElementById("btnstop")
var btnreset = document.getElementById("btnreset")
var lbloutput = document.getElementById("lbloutput")
var spanhour = document.getElementById("hr")
var spanminute = document.getElementById("min")
var spansecond = document.getElementById("sec")
var spancount = document.getElementById("count")


let startTime, updatedTime, difference, tInterval;
let timer = false;
let hour = 0;
let minute = 0; 
let second = 0; 
let count = 0;


function startTimer() {
    timer = true;
    mainFunction();
}

function stopTimer() {
    timer = false;
}

function resetTimer() {
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    spanhour.innerHTML = "00"; 
    spanminute.innerHTML = "00"; 
    spansecond.innerHTML = "00"; 
    spancount.innerHTML = "00"; 
}

function mainFunction() {
    if(timer) {
        count++;
        if(count==100) {
            count = 0;
            second++;
        }
        if(second == 60) {
            second = 0;
            minute++;
        }
        if(minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        let hrString = hour.toString().padStart(2, '0');
        let minString = minute.toString().padStart(2, '0');
        let secString = second.toString().padStart(2, '0'); 
        let countString = count.toString().padStart(2, '0');
        
        // if (hour < 10) { 
        //     hrString = "0" + hrString; 
        // } 
  
        // if (minute < 10) { 
        //     minString = "0" + minString; 
        // } 
  
        // if (second < 10) { 
        //     secString = "0" + secString; 
        // } 
  
        // if (count < 10) { 
        //     countString = "0" + countString; 
        // } 
        
        spanhour.textContent = hrString; 
        spanminute.innerHTML = minString; 
        spansecond.innerHTML = secString; 
        spancount.innerHTML = countString; 
        setTimeout(mainFunction, 10); 
    }
}





btnstart.addEventListener('click', startTimer);
btnstop.addEventListener('click', stopTimer);
btnreset.addEventListener('click', resetTimer);

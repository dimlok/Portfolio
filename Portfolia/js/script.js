function displayTime(){
    var now = new Date();
    let result = document.getElementById('clock');
    result.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime,1000);
}
function displayDay(){
    var day = new Date();
    let result_2 = document.getElementById('day');
    result_2.innerHTML = day.toLocaleDateString();
   
}
window.onload = function (){
    displayDay();
    displayTime();
}


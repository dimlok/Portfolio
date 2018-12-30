//TIME
function displayTime(){
    let now = new Date();
    let result = document.getElementById('clock');
    result.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime,1000);
}
function displayDay(){
    let day = new Date();
    let result_2 = document.getElementById('day');
    result_2.innerHTML = day.toLocaleDateString();
   
}
window.onload = function (){
    displayDay();
    displayTime();
}
//ENDE TIME

//SMOOTH SCROOLL
$(function(){
    $('a[href*=#]').stop().click(function(){
        //überprüft den Pfad und den hostname
        if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname){
            var HASH = this.hash;
            var ZIEL = $(this.hash);
            if(ZIEL.length){
                var ABSTAND_TOP =ZIEL.offset().top;
                $('html,body').animate({scrollTop: ABSTAND_TOP},2000,function(){
                    window.location.hash = HASH;
                });
                return false;
            }
        }
    });
});
//ENDE SMOOTH SCROLL
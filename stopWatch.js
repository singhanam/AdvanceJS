var seconds = 00;
var tens =00;
var hour = 00;
var Seconds =document.getElementById("sec");
var Min =document.getElementById("min");
var Hours =document.getElementById("hour");

var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonRestart = document.getElementById("button-reset");
var interval; 

//this function will run when click on start
function startTimer(){
  tens++;
   if(tens < 9){
     Seconds.innerHTML = "0" + tens;
     Hours.innerHTML= "0" + hour;

   }
   if(tens > 9){
    Seconds.innerHTML =tens;
   }
   if(tens > 60){
     seconds++;
     Min.innerHTML = "0" +seconds;
     tens =0;
     Seconds.innerHTML = "0" + 0; 	
   }
   if (seconds>9){
    Min.innerHTML =seconds;
    
   }
   if(seconds>60){
    Hours.innerHTML =  ++hour;
    seconds = 0;
    Min.innerHTML= "0"+0;
   }
}
buttonStart.onclick =function(){
  interval =setInterval(startTimer);
};
buttonStop.onclick=function(){
  clearInterval(interval);
};
buttonRestart.onclick= function(){
  clearInterval(interval);
  tens ="00";
  seconds="00";
  hour="00"
  Min.innerHTML = seconds;
  Seconds.innerHTML = tens;
  Hours.innerHTML = hour;
}
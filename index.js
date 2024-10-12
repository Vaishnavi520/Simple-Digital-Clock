 var showtime=document.getElementsByTagName("p")[0].addEventListener("click",function(){
 showtime.classList.add("position");
    setTimeout(function(){
  showtime.classList.remove("position");
 },100);
 
 var currentDate=new Date();

 document.querySelector("p").style.lineHeight="70px";this.style.fontSize="50px";this.style.marginTop="180px";this.style.color=" rgb(184, 114, 10)";this.style.fontFamily = " ' Roboto Mono', monospace";
 document.querySelector("p").innerHTML=currentDate.toLocaleString();

setInterval(function(){

 var newDate=new Date();
    document.querySelector("p").innerHTML=newDate.toLocaleString();
},1000);


 })
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 80;
      if (elementTop < windowHeight-elementVisible ) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);


 function opacityEnable(){
  var light=document.querySelectorAll(".feature")
  for (let i = 0; i < light.length; i++) {
   var windowHeight=window.innerHeight;
   var elementTop=light[i].getBoundingClientRect().bottom;
   if(elementTop < windowHeight-300 && elementTop > windowHeight-400){
    light[i].classList.add("visible")
   }
   else {
    light[i].classList.remove("visible")
   }
  }
 }
 window.addEventListener("scroll",opacityEnable)
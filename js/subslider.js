let slideWrap =document.querySelector(".slideWrap");
let slideBox = document.querySelector(".slideBox");
var sliderUl = document.querySelector(".slideUl");
var slideCon = document.querySelectorAll(".slideCon");
var slideBtn = document.querySelectorAll(".silde-btn");
var slideSpeed = 1000;
let firstChild = sliderUl.firstElementChild;
let lastChild = sliderUl.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

sliderUl.insertBefore(clonedLast, sliderUl.firstElementChild);
console.log(slideCon.length);

var currentIndex = 0;
var index = 0;
var startSlide;

function auto() {
  startSlide = setInterval(function () {
      index = currentIndex % (slideCon.length);

      slider(index + 1);
    }

    , 2000);
}


function slider(index) {
  sliderUl.style.left = -100 * index + "%";
  console.log(index);
  if(index==0){
      slideBtn[0].classList.add("show");
   
  }
  for(var btn=0; btn<3; btn++){
    if(btn==index){
      
      
        slideBtn[btn].classList.add("show");

    }
    else{
      slideBtn[btn].classList.remove("show");
      
    }
  }

  if (index < slideCon.length) {
    sliderUl.style.transition = "1s";
  }


  if (index == slideCon.length) {
    slideBtn[0].classList.add("show");
    setTimeout(function () {
      slideBtn[0].classList.add("show");
      sliderUl.style.transition = "0s";
      sliderUl.style.left = "0";
      
    }, 1000);


    console.log("출력");
  }

  currentIndex = index;

 

}
slideBtn[0].classList.add("show");
auto();

slideWrap.addEventListener("mouseenter",function(){
  clearInterval(startSlide);
})
slideWrap.addEventListener("mouseleave",function(){
  auto();
})

let boardTit = document.querySelectorAll(".boardTit");
let tit1 = document.querySelectorAll(".boardTit1");
let tit2 = document.querySelectorAll(".boardTit2");
let boardCon = document.querySelectorAll(".boardConBox");

// Array.prototype.forEach()
for (var x = 0; x < tit1.length; x++) {
  tit1[x].setAttribute("data-value", x);
  tit2[x].setAttribute("data-value", x);
}
for (var a = 0; a < boardTit.length; a++) {
  boardTit[a].addEventListener("click", function (e) {
    // if(e.target.dataset.value)
    var b = e.target.dataset.value;
    var c = e.target.className;
    if (c == "boardTit boardTit1") {
      for (var d = 0; d < tit1.length; d++) {
        if (b == d) {
          tit1[d].classList.add("on");
        } else {
          tit1[d].classList.remove("on");
        }
      }
    } else if (c == "boardTit boardTit2") {
      for (var d = 0; d < tit2.length; d++) {
        if (b == d) {
          tit2[d].classList.add("on");
        } else {
          tit2[d].classList.remove("on");
        }
      }
    }
  })
}
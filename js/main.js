var menuHover=document.querySelector(".menuUl");
var depth = document.querySelectorAll(".depth");
var depthBg = document.querySelector(".menu-back");
menuHover.addEventListener("mouseenter",subview);
menuHover.addEventListener("mouseleave",subhidden);
depthBg.addEventListener("mouseenter",subview);
depthBg.addEventListener("mouseleave",subhidden);

function subview(){
    for(var hover=0; hover<depth.length; hover++){
        depth[hover].classList.add('show');
    }
    depthBg.classList.add("show");
}
function subhidden(){
    for(var hover=0; hover<depth.length; hover++){
        depth[hover].classList.remove('show');
    }
    depthBg.classList.remove("show");
}

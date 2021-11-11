var relationBtn = document.querySelectorAll(".relBtn");
var listBox = document.querySelectorAll(".listBox");
// console.log(listBox[0].clientHeight)
var count = true;

for(var da=0; da<listBox.length; da++){
    listBox[da].setAttribute("data-value",da);
}
for(var a=0; a<listBox.length; a++){
    relationBtn[a].addEventListener("click",function(e){
        // for(var b=0; b<listBox.length; b++){
            
        //         listBox[b].classList.remove('view');
            
        // }
    
        
        console.log(e.target.parentNode);

        var parent=e.target.parentNode;
        console.log(parent.lastElementChild.dataset.value);
        if(parent.lastElementChild.className=="listBox view"){
            console.log("출력");
            parent.lastElementChild.classList.remove("view");
        }
       else{
           for(var c=0; c<listBox.length; c++){
               if(parent.lastElementChild.dataset.value==c){
                    parent.lastElementChild.classList.add("view");
               }
               else{
                   listBox[c].classList.remove("view");
               }
           }
       }
        

        
        
    })
}
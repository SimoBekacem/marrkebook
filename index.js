let simple_bookmarking = document.querySelectorAll(".advantages a")
console.log(simple_bookmarking)
let q1 = document.querySelectorAll(".tohide1");
let q2 = document.querySelectorAll(".tohide2");
let q3 = document.querySelectorAll(".tohide3");
let q4 = document.querySelectorAll(".tohide4");
let openq1 = document.querySelector(".openq1");
let openq2 = document.querySelector(".openq2");
let openq3 = document.querySelector(".openq3");
let openq4 = document.querySelector(".openq4");
let test1 = false
let test2 = false
let test3 = false
let test4 = false
let close1 = document.querySelector(".close1")
let close2 = document.querySelector(".close2")
let close3 = document.querySelector(".close3")
let close4 = document.querySelector(".close4")
let img1 = document.querySelector(".q1 img");
let img2 = document.querySelector(".q2 img");
let img3 = document.querySelector(".q3 img");
let img4 = document.querySelector(".q4 img");


function inder_line(x){
    if(x == 0){
        simple_bookmarking[x].classList.add("underline")
        simple_bookmarking[x+1].classList.remove("underline")
        simple_bookmarking[x+2].classList.remove("underline")

    }
    else if (x == 1){
        simple_bookmarking[x].classList.add("underline")
        simple_bookmarking[x-1].classList.remove("underline")
        simple_bookmarking[x+1].classList.remove("underline")
    }
    else{
        simple_bookmarking[x].classList.add("underline")
        simple_bookmarking[x-1].classList.remove("underline")
        simple_bookmarking[x-2].classList.remove("underline")
    }
    
}
simple_bookmarking[0].addEventListener('click',function(){ inder_line(0)})
simple_bookmarking[1].addEventListener('click',function(){ inder_line(1)})
simple_bookmarking[2].addEventListener('click',function(){ inder_line(2)})


openq1.addEventListener('click',function(){
    if(test2==true || test3==true || test4==true){
        q2.forEach(function(element){
            element.style.display="none";
            close2.style.display="none"
            img2.style.display="block"
        })
        test2=false
        q3.forEach(function(element){
            element.style.display="none";
            close3.style.display="none"
            img3.style.display="block"
        })
        test3=false
        q4.forEach(function(element){
            element.style.display="none";
            close4.style.display="none"
            img4.style.display="block"
        })
        test4=false
        q1.forEach(function(element){
            element.style.display="block";
            close1.style.display="block"
            img1.style.display="none"
        })
        test1=true

    }
    else if(test1==true){
        q1.forEach(function(element){
            element.style.display="none";
            close1.style.display="none"
            img1.style.display="block"
        })
        test1=false
    }
    else{
        q1.forEach(function(element){
            element.style.display="block";
            close1.style.display="block"
            img1.style.display="none"
        })
        test1=true
    }
    console.log("hello")
})





openq2.addEventListener('click',function(){
    if(test1==true || test3==true || test4==true){
        q1.forEach(function(element){
            element.style.display="none";
            close1.style.display="none"
            img1.style.display="block"
        })
        test1=false
        q3.forEach(function(element){
            element.style.display="none";
            close3.style.display="none"
            img3.style.display="block"
        })
        test3=false
        q4.forEach(function(element){
            element.style.display="none";
            close4.style.display="none"
            img4.style.display="block"
        })
        test4=false
        q2.forEach(function(element){
            element.style.display="block";
            close2.style.display="block"
            img2.style.display="none"
        })
        test2=true

    }
    else if(test2==true){
        q2.forEach(function(element){
            element.style.display="none";
            close2.style.display="none"
            img2.style.display="block"
        })
        test2=false
    }
    else{
        q2.forEach(function(element){
            element.style.display="block";
            close2.style.display="block"
            img2.style.display="none"
        })
        test2=true
    }
})




openq3.addEventListener('click',function(){
    if(test1==true || test2==true || test4==true){
        q1.forEach(function(element){
            element.style.display="none";
            close1.style.display="none"
            img1.style.display="block"
        })
        test1=false
        q2.forEach(function(element){
            element.style.display="none";
            close2.style.display="none"
            img2.style.display="block"
        })
        test2=false
        q4.forEach(function(element){
            element.style.display="none";
            close4.style.display="none"
            img4.style.display="block"
        })
        test4=false
        q3.forEach(function(element){
            element.style.display="block";
            close3.style.display="block"
            img3.style.display="none"
        })
        test3=true

    }
    else if(test3==true){
        q3.forEach(function(element){
            element.style.display="none";
            close3.style.display="none"
            img3.style.display="block"
        })
        test3=false
    }
    else{
        q3.forEach(function(element){
            element.style.display="block";
            close3.style.display="block"
            img3.style.display="none"
        })
        test3=true
    }
})
openq4.addEventListener('click',function(){
    if(test1==true || test2==true || test3==true){
        q1.forEach(function(element){
            element.style.display="none";
            close1.style.display="none"
            img1.style.display="block"
        })
        test1=false
        q2.forEach(function(element){
            element.style.display="none";
            close2.style.display="none"
            img2.style.display="block"
        })
        test2=false
        q3.forEach(function(element){
            element.style.display="none";
            close3.style.display="none"
            img3.style.display="block"
        })
        test3=false
        q4.forEach(function(element){
            element.style.display="block";
            close4.style.display="block"
            img4.style.display="none"
        })
        test4=true

    }
    else if(test4==true){
        q4.forEach(function(element){
            element.style.display="none";
            close4.style.display="none"
            img4.style.display="block"
        })
        test4=false
    }
    else{
        q4.forEach(function(element){
            element.style.display="block";
            close4.style.display="block"
            img4.style.display="none"
        })
        test4=true
    }
})
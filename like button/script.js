let con = document.querySelector(".card")
let love =  document.querySelector("i")

con.addEventListener("dblclick",function(){
    // console.log("hellow")
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8;



    setTimeout(function(){
        love.style.transform ="translate(-50%,-50%) scale(0)";
    },3000);


    setTimeout(function(){
        love.style.opacity =0;
    },1000);
});


//my js
var add = document.querySelector(".add")
var Remove = document.querySelector(".Remove")
var like = document.querySelector(".Like")
var name1= document.querySelector(".name1")


add.addEventListener("click",function(){
    name1.innerHTML = "ADDED"
    name1.style.color = "red"
//   add.innerHTML = "ADDED"
})



Remove.addEventListener("click",function(){
    name1.innerHTML = "Removed!"
    name1.style.color = "red"
//   add.innerHTML = "ADDED"
})




like.addEventListener("click",function(){
 name1.innerHTML = "GOOD"
    name1.style.color = "red"
//   add.innerHTML = "ADDED"
})
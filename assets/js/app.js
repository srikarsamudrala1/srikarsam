"use-strict";


var cursor = document.querySelector(".cursor1");
var cursorInner = document.querySelector(".cursor-inner");



document.addEventListener("mousemove", function (e) {
    
    var x = e.clientX;
    var y = e.clientY;
    
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})

document.addEventListener("mousemove", function (e) {
    
    var x = e.clientX;
    var y = e.clientY;
    
    cursorInner.style.left = x + "px";
    cursorInner.style.top = y + "px";
})

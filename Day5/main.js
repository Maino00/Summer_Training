// Task 1
var givenName = document.getElementById("name"); 
var givenAge = document.getElementById("Age"); 
var nameSpan = document.getElementById("nameSpan");
var ageSpan = document.getElementById("ageSpan"); 
var btn = document.getElementById('btn2');
btn2.onclick  = function GetNameAge() {
    if (givenName.length > 3 && givenAge > 18) {
        nameSpan.textContent = givenName.value;
        ageSpan.textContent = givenAge.value;
    }
}



// Task2
var p = document.getElementById('your_paragraph');
var btn = document.getElementById('btn3');
var txt = document.getElementById('theText');
btn.onclick = function(){
    p.innerText = txt.value;
};

var p = document.getElementById('your_paragraph');
var btn = document.getElementById('btn4');
var txt = document.getElementById('theText');
btn.onclick = function(){
    p.innerHTML = "<h1>txt.value</h1>";
};

var p = document.getElementById('your_paragraph');
var btn = document.getElementById('btn5');
var txt = document.getElementById('theText');
btn.onclick = function(){
    p.style.color = "violet";
};

var p = document.getElementById('your_paragraph');
var btn = document.getElementById('btn6');
var txt = document.getElementById('theText');
btn.onmouseenter = function(){
    p.style.color = "orange";
};
btn.onmouseleave = function(){
    p.style.color = "blue";
};

var p = document.getElementById('your_paragraph');
var btn = document.getElementById('btn7');
var txt = document.getElementById('theText');
btn.onclick = function(){
    p.textContent = txt.value;
};


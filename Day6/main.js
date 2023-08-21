// Example 1
var a1 = document.getElementById("link1");
function changeLink(link) {
    if (link) {
        a1.setAttribute("href", link);
    } else {
        a1.removeAttribute("href");
    }
}


// Task 1
var gallery = document.getElementById('gallery');
var prevBtn = document.getElementById('previous');
var nextBtn = document.getElementById('next');
var images = ['./Assets/1.jpg', './Assets/2.jpg', './Assets/3.jpg', './Assets/4.jpg'];
var currentIndex = 0;
function prevImg() {
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    updateImage();
}
function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}
function updateImage() { 
    currentImage = gallery.querySelector('#current-img')
    currentImage.classList.add('fade-out');
    setTimeout(() => {
        currentImage.src = images[currentIndex];
        currentImage.alt = images[currentIndex];
        currentImage.classList.remove('fade-out');
    }, 500);
}



// Example 2
var names = ['Ahmed', 'Ali', 'Maroon', 'Marie', 'Maino', 'Qasem', 'Noor', 'Nora', 'Body', 'Waleed'];
    var ulElem = document.getElementById('NamesUl');
function getRandomName() {
    // var parent = document.getElementById('names');
    // parent.innerHTML += "<p>Ahmed</p>";
    // var p = document.createElement('p');
    // p.innerText = "Ahmed";
    // parent.appendChild(p);
    var index = Math.floor(Math.random() * 10);
    var name = names[index];
    var liElem = document.createElement('li');
    var textNode = document.createTextNode(name);
    userImage = document.createElement('img');
    userImage.src = 'https://th.bing.com/th?id=OIP.k7dE2dftQijg3KbpTyIObAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2';
    liElem.appendChild(textNode);
    liElem.appendChild(userImage);
    ulElem.appendChild(liElem);
}


//Task 2

function AddPerson() {
    var number = document.getElementById('Id');
var personName = document.getElementById('Name');
var age = document.getElementById('Age');
var numberValue = number.value;
var personNameValue = personName.value;
var ageValue = age.value;
    var row = document.createElement('tr');
    var td1 = row.appendChild(document.createElement('td'));
    var td2 = row.appendChild(document.createElement('td'));
    var td3 = row.appendChild(document.createElement('td'));
    td1.innerHTML = numberValue;
    td2.innerHTML = personNameValue;
    td3.innerHTML = ageValue;
    var table = document.getElementById('table');
    table.appendChild(row);
}


//Example 3
function openWin() {
    win = window.open('./aboutUs.html', '_blank', 'width=300px; height=300px');
}
function closeWin() { 
    win.close();
}
function moveWinTo() {
    win.moveTo(300, 500);
}
function moveWinBy() {
    win.moveBy(100, 50);
}
function resizeWinTo() {
    win.resizeTo(400, 800);
}
function resizeWinBy() {
    win.resizeBy(100, -50);
}



//Example 4
var counterElem = document.getElementById('counter');
var counterInterval;
function start() {
var counter = 0;
    counterInterval = setInterval(function () {
        counter++;
        counterElem.innerText = counter;
        }, 1000);
}
function stop() {
    clearInterval(counterInterval);
}



//Task 3
var content = document.getElementById('download-content');
function download() {
    var p = document.createElement('p');
    p.innerText = 'Downloading ...';
    content.appendChild(p);
    var link = document.createElement('a');
    link.text = 'The generated link';
    link.href = 'https://www.google.com/';
    content.appendChild(link);
}
setTimeout(download, 3000);

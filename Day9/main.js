var vidBtn = document.getElementById('startVideo');
var progress = document.getElementById('progress');
var percentage = document.getElementById('percentage');
var videoDiv = document.getElementById('videoDiv');
var video = document.getElementById('video');
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var muteBtn = document.getElementById('mute');
var volumeRange = document.getElementById('vRange');
var speedRange = document.getElementById('sRange');


video.style.visibility = 'hidden';
progress.style.visibility = 'hidden';
percentage.style.visibility = 'hidden';

vidBtn.addEventListener('click', function () {
    vidBtn.style.visibility = 'hidden';
    setInterval(function () { 
        progress.style.visibility = 'visible';
        percentage.style.visibility = 'visible';
        progress.value ++;
        percentage.innerHTML = progress.value + '%';             
    }, 10);
video.style.visibility = 'visible';

});

startBtn.addEventListener('click', function () {
        video.play();
});

stopBtn.addEventListener('click', function () { 
        video.pause();
});

muteBtn.addEventListener('click', function () { 
    if (video.muted == false) {
    video.muted = true;
    } else {
    video.muted = false;
    }
});

volumeRange.addEventListener('change', function () { 
    video.volume = volumeRange.value;
});

speedRange.addEventListener('change', function () { 
    video.playbackRate = speedRange.value;
});





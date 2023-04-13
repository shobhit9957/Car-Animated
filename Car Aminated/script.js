var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mpe');
audio.loop = true; // set to false if you don't want the audio to loop
audio.addEventListener('loadedmetadata', function() {
    audio.play();
});

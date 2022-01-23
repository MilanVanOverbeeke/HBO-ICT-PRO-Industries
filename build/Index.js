let isPlaying = false;
document.addEventListener('mousemove', (event) => {
    if (!isPlaying) {
        const audio = new Audio('./assets/audio/SpatialMusic.wav');
        audio.loop = true;
        audio.volume = 0.5;
        console.log('playing');
        audio.play();
        isPlaying = true;
    }
});
//# sourceMappingURL=Index.js.map
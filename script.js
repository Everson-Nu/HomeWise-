// Get DOM elements
const temperatureDisplay = document.getElementById('temperatureDisplay');
const songNameDisplay = document.getElementById('songName');
const playPauseButton = document.getElementById('playPause');
const stopButton = document.getElementById('stop');
const nextTrackButton = document.getElementById('nextTrack');
const increaseTempButton = document.getElementById('increaseTemp');
const decreaseTempButton = document.getElementById('decreaseTemp');
const lightSwitch = document.getElementById('lightSwitch');
const clickSound = document.getElementById('clickSound');

// Initial temperature value
let temperature = 78;
// State for music player
let isPlaying = false;
// State for lighting
let isLightOn = false;
// List of funny song names
const funnySongNames = [
    "Lord You are Great",
    "Love love",
    "Victory",
    "Nthena",
    "My Beloved"
];

// Function to play sound
const playSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
};

// Function to get a random song name
const getRandomSongName = () => {
    const randomIndex = Math.floor(Math.random() * funnySongNames.length);
    return funnySongNames[randomIndex];
};

// Function to update the temperature display
const updateTemperatureDisplay = () => {
    temperatureDisplay.textContent = `${temperature}°F`;
};

// Event handler for play/pause button
const togglePlayPause = () => {
    playSound();
    isPlaying = !isPlaying;
    playPauseButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i> Pause' : '<i class="fas fa-play"></i> Play';
    songNameDisplay.textContent = isPlaying ? getRandomSongName() : "Press Play to Get Groovy!";
};

// Event handler for stop button
const stopPlayback = () => {
    playSound();
    isPlaying = false;
    playPauseButton.innerHTML = '<i class="fas fa-play"></i> Play';
    songNameDisplay.textContent = "Press Play to Get Groovy!";
};

// Event handler for next track button
const playNextTrack = () => {
    playSound();
    if (isPlaying) {
        songNameDisplay.textContent = getRandomSongName();
    }
};

// Event handler for increase temperature button
const increaseTemperature = () => {
    playSound();
    temperature++;
    updateTemperatureDisplay();
};

// Event handler for decrease temperature button
const decreaseTemperature = () => {
    playSound();
    temperature--;
    updateTemperatureDisplay();
};

// Event handler for light switch
const toggleLight = () => {
    playSound();
    isLightOn = !isLightOn;
    document.body.style.backgroundColor = isLightOn ? '#f8f9fa' : '#343a40';
    document.body.style.color = isLightOn ? '#343a40' : '#f8f9fa';
};

// Add event listeners to buttons
playPauseButton.addEventListener('click', togglePlayPause);
stopButton.addEventListener('click', stopPlayback);
nextTrackButton.addEventListener('click', playNextTrack);
increaseTempButton.addEventListener('click', increaseTemperature);
decreaseTempButton.addEventListener('click', decreaseTemperature);
lightSwitch.addEventListener('change', toggleLight);

// Initialize temperature display
updateTemperature

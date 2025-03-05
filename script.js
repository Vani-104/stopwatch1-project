let timer;
let seconds = 0, minutes = 0, hours = 0;
let running = false;
const display = document.querySelector(".stopwatch");
const lapsList = document.querySelector(".laps");

// Update display function
function updateDisplay() {
    display.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start & Pause Stopwatch on Image Click
function toggleTimer() {
    if (!running) {  // Start the stopwatch
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    } else {  // Pause the stopwatch
        clearInterval(timer);
        running = false;
    }
}

// Reset Stopwatch
function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    lapsList.innerHTML = ""; // Clear lap records
}

// Record Lap Time
function recordLap() {
    if (running) { // Only record lap if stopwatch is running
        const lapTime = display.textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
        lapsList.appendChild(lapItem);
    }
}

// Initialize display on load
updateDisplay();

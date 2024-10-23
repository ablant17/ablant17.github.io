function displayDateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    timeDisplay.textContent = `Today is ${now.toLocaleString('en-US', options)}`;
}

window.onload = displayDateTime;

// wait until DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
    // save reference to clock div.
    const clockDiv = document.getElementById('clock');

    const zeroPad = (number, places = 2) => String(number).padStart(places, '0');

    const renderClock = () => {
        const date = new Date();
        clockDiv.innerText = `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}:${zeroPad(date.getSeconds())}`
    }

    // execute it first time
    renderClock();
    
    // schedule the callback.
    setInterval(renderClock, 1000);
});

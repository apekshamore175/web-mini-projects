function formatTime(unit){
    return unit < 10 ? "0" + unit : unit;
}

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerText = timeString;
}

updateClock();

setInterval(updateClock, 1000);
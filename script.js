function updateClock() {
    const now = new Date();
    const hours =String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;

    const days = ['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday'];
    const months =['January','Febuary','March','April','May','June','July','August','September','October','November','December',];


    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = String(now.getDate()).padStart(2,'0');
    const year = now.getFullYear();

    const DateString = `${dayName} ,${day} ${monthName}, ${year}`;
    document.getElementById('date').textContent = DateString;
    
}
setInterval(updateClock,1000);
updateClock();
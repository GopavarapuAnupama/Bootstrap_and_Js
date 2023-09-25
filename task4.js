function showDate() {
    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()]; 
    const year = currentDate.getFullYear();
    const formattedDate = `${day.toString().padStart(2, '0')}/${month}/${year}`;
    document.getElementById("dateResult").textContent = "" + formattedDate;
}
function showTime() {
    const currentDate = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const monthName = monthNames[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const timeZone = 'GMT+0530(Indian Standard Time)';
    const formattedTime = `${dayOfWeek} ${monthName} ${day} ${year} ${hours}:${minutes}:${seconds} ${timeZone}`;
    document.getElementById("timeResult").textContent = "" + formattedTime;
}
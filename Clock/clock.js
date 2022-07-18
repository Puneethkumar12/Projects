function updateClock () {
    
    //Geting the hours,min,seconds
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    //adding zero to the hour,min,sec if the number is a single digit number 
    currentHour = (currentHour < 10  ? "0" : '') + currentHour
    currentMinute = (currentMinute < 10  ? "0" : '') + currentMinute
    currentSeconds = (currentSeconds < 10  ? "0" : '') + currentSeconds

     //setting Am and Pm
    let timeOfDay = (currentTime < 12) ? "AM" : "PM";

    //to make the time as normal time instead of railway time we use blow code were if curenthour is greater then 12 it should subtract with twelve so the vlue will be 1 for 1pm isteasd of 13
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    //when we subtract 12 we will get 0 so instead we need to show as twelve so we use below code
    currentHour = (currentHour == 0) ? 12 : currentHour;



    let currentTimeStr = currentHour + ' : '+ currentMinute + ' : '+ currentSeconds + ' ' + timeOfDay

    let clock = document.getElementById('clock');
    clock.innerHTML = currentTimeStr




}
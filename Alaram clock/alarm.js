let set = document.getElementById('setalarm')
set.addEventListener('click',setAlarm)

function ringbell() {
    alert('Time Up!!')

    let help = document.getElementById('alarmHelp')
    help.innerText = ' Alarm Stopped'
}

function setAlarm  (e) {
    let help = document.getElementById('alarmHelp')
    help.innerText = ' Alarm is Set'
    set.innerText='Set Again'
    e.preventDefault(); 
    const alarm = document.getElementById('alarm')
    alarmDate = new Date(alarm.value)
    console.log(`set alaram for ${alarmDate}...`);

    now = new Date()

    let timetoalarm = alarmDate - now;
    
    console.log(timetoalarm);
    if(timetoalarm >= 0){
        setTimeout(()=>{
           
     ringbell();
        },timetoalarm)
    }

    
}

















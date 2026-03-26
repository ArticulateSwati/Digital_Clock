//DIGITAL CLOCK PROGRAM

function  updateClock(){
    const now =new Date();
    let hours = now.getHours();
    const meridian=hours>=12? " PM" :" AM";
    hours=hours%12||12;
    hours=hours.toString().padStart(2,0);
    let minutes=now.getMinutes();
    minutes=minutes.toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hours}:${minutes}:${seconds}${meridian}`;
    document.getElementById("clock").textContent=timeString;

}
updateClock();
setInterval(updateClock,1000);


// let hrs= document.getElementById("hrs");
// let min= document.getElementById("min");
// let sec= document.getElementById("sec");
// setInterval(()=>{
//     let currentTime = new Date();

//     hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours()
//     min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes()
//     sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds()
// },1000)

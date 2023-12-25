let hh=document.getElementById('hh');
let mm=document.getElementById('mm');
let ss=document.getElementById('ss');

function displayTime(){
let data=new Date();
let hrs=data.getHours();
let min=data.getMinutes();
let sec=data.getSeconds();

let hRotation=30*hrs +hrs/2;
let mRotation=6*min;
let sRotation=6*sec;
hh.style.transform=`rotate(${hRotation}deg)`;
mm.style.transform=`rotate(${mRotation}deg)`;
ss.style.transform=`rotate(${sRotation}deg)`;
}

setInterval(() => {
displayTime()
}, 1000);
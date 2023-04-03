const hourE=document.querySelector(".hour");
const minuteE=document.querySelector(".minute");
const secondE=document.querySelector(".second");
const cd= new Date();
const d= cd.getDate();
const m= cd.getMonth();
const y= cd.getFullYear();
document.querySelector(".date").innerHTML=`${d}/${m}/${y}`;
function Update(){
    setInterval(Update,1000);
    const cd= new Date();
    const hour= cd.getHours();
    const minute= cd.getMinutes();
    const second=cd.getSeconds();
    const hourdeg=(hour/12)*360;
    hourE.style.transform=`rotate(${hourdeg}deg)`;
    const minutedeg=(minute/60)*360;
    minuteE.style.transform=`rotate(${minutedeg}deg)`;
    const seconddeg=(second/60)*360;
    secondE.style.transform=`rotate(${seconddeg}deg)`;
}
Update();
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");




setInterval(() => {

    

    const datetoday = new Date();
    let hr = datetoday.getHours();
   let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();
   
    if(sec<10) sec="0"+sec;
    if(min<10) sec="0"+sec;
    if(hr<10) sec="0"+sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

}, 1);


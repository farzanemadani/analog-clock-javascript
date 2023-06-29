setInterval(setClock,1000);
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
   // console.log('secondRatio',secondRatio);
    // console.log('currentDate.getSeconds()',currentDate.getSeconds());
  

    const minutesRatio = ( secondRatio + currentDate.getMinutes())/ 60;
    console.log('minutesRatio',minutesRatio);
    console.log('currentDate.getSeconds()',currentDate.getMinutes());
    const hoursRatio = ( minutesRatio + currentDate.getHours() ) / 12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hoursRatio);

}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360 )
}
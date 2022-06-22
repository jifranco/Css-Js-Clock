const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const mintHand = document.querySelector('.min-hand');
function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) +90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mints = now.getMinutes();
    const mintDegrees = ((mints/60)*360) +90;
    mintHand.style.transform =  `rotate(${mintDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour/12)*360)+90;
    hourHand.style.transform =  `rotate(${hourDegrees}deg)`
}
setInterval(setDate,1000);
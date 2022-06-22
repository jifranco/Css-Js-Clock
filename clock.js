const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const mintHand = document.querySelector('.min-hand');
function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) +90;
    if (secondsDegrees == 90) {
        secondHand.classList.add("no-transition");
      } else {
        secondHand.classList.remove("no-transition");
      }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mints = now.getMinutes();
    const mintDegrees = ((mints/60)*360) +90;
    if (minutesDegrees == 90) {
        minuteHand.classList.add("no-transition");
      } else {
        minuteHand.classList.remove("no-transition");
      }
    mintHand.style.transform =  `rotate(${mintDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour/12)*360)+90;
    if (hoursDegrees == 90) {
        hourHand.classList.add("no-transition");
      } else {
        hourHand.classList.remove("no-transition");
      }
    hourHand.style.transform =  `rotate(${hourDegrees}deg)`
}

setInterval(setDate,1000);


const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear 
+1 } 00:00:00`);

// ? set background year
year.innerText = currentYear +1;

function updateCountdown(){
  const currentTime = new Date();
  const difference = newYearTime - currentTime;
  //* console.log(difference);

  // ? miliseconds to days conversion
  const diffDays = Math.floor(difference / 1000 / 60 / 60 /24);
  //* console.log(diffDays);

  // ? hours until new year
  const diffHours = Math.floor(difference / 1000 / 60 / 60) % 24;
  //* console.log(diffHours);

  // ? minutes until new year
  const diffMinutes =  Math.floor(difference / 1000 / 60) % 60;
  //* console.log(diffMinutes);

  // ? seconds until new year
    const diffSeconds =  Math.floor(difference / 1000) % 60;
  //*  console.log(diffseconds);


  
  // ? Add values to DOM
  days.innerHTML = diffDays;
  hours.innerHTML = diffHours < 10 ? '0' + diffHours : diffHours;

  minutes.innerHTML = diffMinutes < 10 ? '0' + diffMinutes : diffMinutes;

  seconds.innerHTML = diffSeconds < 10 ? '0' + diffSeconds : diffSeconds;

}

// ? Show spinner on page load
setTimeout(()=> {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);







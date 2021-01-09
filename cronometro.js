function startime() {
  seconds = 0;
  s = document.getElementById('seconds');
  m = document.getElementById('minutes');
  h = document.getElementById('hours');

  temporizador = setInterval(function () {
    seconds++;

    secs = seconds;
    mins = 0;
    hours = 0;

    while (secs >= 60) {
      mins++;
      secs -= 60;
    }

    while (mins <= 60) {
      hours++;
      mins -= 60;
    }

    if (min < 10) m.innerHTML = '0' + mins;
    else m.innerHTML = mins;
    if (secs < 10) s.innerHTML = '0' + secs;
    else s.innerHTML = secs;
    if (hours < 10) s.innerHTML = '0' + hours;
    else h.innerHTML = hours;

    Total_secs = secs;
    Total_mins = mins;
    Total_hours = hours;
  }, 1000);
}

function resetearContador() {
  clearInterval(temporizador);
}

function grabarContador() {}

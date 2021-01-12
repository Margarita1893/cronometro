window.onload = () => {
  h = 0;
  m = 0;
  s = 0;
  mls = 0;
  timeStarted = 0;

  temporizador = document.getElementById('temporizador');
  iniciar = document.getElementById('iniciarS');
  resetear = document.getElementById('resetear');
  parar = document.getElementById('parar');
  grabar = document.getElementById('grabar');
  almacenarTiempos = document.getElementById('almacenarTiempos');

  event();
};

function event() {
  iniciar.addEventListener('click', iniciarContador);
  resetear.addEventListener('click', resetearContador);
  parar.addEventListener('click', pararContador);
  grabar.addEventListener('click', grabarContador);
}

function contar() {
  let ht, mt, st, mlst;
  mls++;

  if (mls > 99) {
    s++;
    mls = 0;
  }
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 24) h = 0;

  mlst = ('0' + mls).slice(-2);
  st = ('0' + s).slice(-2);
  mt = ('0' + m).slice(-2);
  ht = ('0' + h).slice(-2);

  temporizador.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function iniciarContador() {
  contar();
  timeStarted = setInterval(contar, 10);
  iniciar.removeEventListener('click', iniciarContador);
}
function pararContador() {
  clearInterval(timeStarted);
  iniciar.addEventListener('click', iniciarContador);
}

function resetearContador() {
  clearInterval(timeStarted);
  temporizador.innerHTML = '00:00:00.00';
  h = 0;
  m = 0;
  s = 0;
  mls = 0;
  iniciar.addEventListener('click', iniciarContador);
  while (almacenarTiempos.firstChild) {
    almacenarTiempos.removeChild(almacenarTiempos.firstChild);
  }
}

function grabarContador() {
  if (temporizador.textContent === '00:00:00.00') {
    console.log('click en el botón iniciar');
  } else {
    let p = document.createElement('ul');
    p.innerHTML = `
        <li>temporizador: ${h}:${m}:${s}.${mls}</li>
    `;
    almacenarTiempos.appendChild(p);
  }
}
//RESPONSIVE//

h = 0;
m = 0;
s = 0;
mls = 0;
timeStarted = 0;

temporizador = document.getElementById('temporizador');
play = document.getElementById('play');
reset = document.getElementById('reset');
pause = document.getElementById('pause');
record = document.getElementById('record');
saveTime = document.getElementById('saveTime');

init();

function init() {
  play.addEventListener('click', playContador);
  reset.addEventListener('click', resetContador);
  pause.addEventListener('click', pauseContador);
  record.addEventListener('click', recordContador);
}

function count() {
  let ht, mt, st, mlst;
  mls++;

  if (mls > 99) {
    s++;
    mls = 0;
  }
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 24) h = 0;

  mlst = ('0' + mls).slice(-2);
  st = ('0' + s).slice(-2);
  mt = ('0' + m).slice(-2);
  ht = ('0' + h).slice(-2);

  temporizador.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function playContador() {
  count();
  timeStarted = setInterval(count, 10);
  play.removeEventListener('click', playContador);
}
function pauseContador() {
  clearInterval(timeStarted);
  play.addEventListener('click', playContador);
}

function resetContador() {
  clearInterval(timeStarted);
  temporizador.innerHTML = '00:00:00.00';
  h = 0;
  m = 0;
  s = 0;
  mls = 0;
  play.addEventListener('click', playContador);
  while (saveTime.firstChild) {
    saveTime.removeChild(saveTime.firstChild);
  }
}

function recordContador() {
  if (temporizador.textContent === '00:00:00.00') {
    console.log('click en el botón play');
  } else {
    let p = document.createElement('ul');
    p.innerHTML = `
        <li>temporizador: ${h}:${m}:${s}.${mls}</li>
    `;
    saveTime.appendChild(p);
  }
}

//if (verificador == false) {
//  intervalo = setInterval(function () {
//    tiempo += 0.01;
//  temporizador.innerHTML = tiempo.toFixed(2);
// }, 10);
// verificador = true;
// } else {
// verificador = false;
// clearInterval(intervalo);
// }
// }

//function resetearContador() {
// verificador = false;
// tiempo = 0;
// temporizador.innerHTML = tiempo + ':00';
// clearInterval(intervalo);
// while (almacenarTiempos.firstChild) {
// almacenarTiempos.removeChild(almacenarTiempos.firstChild);
// }
// }

//function grabarContador() {
//if (temporizador.textContent === '00:00:00') {
//console.log('click en el botón iniciar');
//} else {
//let p = document.createElement('ul');
//p.innerHTML = `
//  <li>Tiempo : ${tiempo.toFixed(2)}</li>
//  `;
// almacenarTiempos.appendChild(p);
// }
//}

// seconds = 0;
// s = document.getElementById('seconds');
// m = document.getElementById('minutes');
// h = document.getElementById('hours');

// cronometer = setInterval(function () {
// seconds++;
//  secs = seconds;
//  mins = 0;
//  hours = 0;

//  while (secs>=60) {
//    mins++;
//  secs-=60;
//  }
//  while (mins <= 60) {
//    hours++;
//    mins -= 60;
// }

//  if (hours < 10) h.innerHTML = '0' + hours;
//  else h.innerHTML = hours;
//  if (mins<10) m.innerHTML = '0' + mins;
//  else m.innerHTML = mins;
//  if (secs < 10) s.innerHTML = '0' + secs;
//  else s.innerHTML = secs;

//  Total_secs = secs;
//  Total_mins = mins;
//  Total_hours = hours;
// }, 1000);
// }

// function promiseSquare(val){
//     return Promise.resolve(val * val);
// }

// function promiseDouble(val){
//     return Promise.resolve(val + val);
// }

// function filterFunction(val){
//     if ( val > 50)
//         return true;
//     else
//         return false;
// }

// var myPromise1 = Promise.resolve(500);
// var myPromise2 = promiseSquare(10);
// var myPromise3 = promiseDouble(20);

// Promise.all([myPromise1,myPromise2,myPromise3]).then(function(val){
//     var result = val.filter(filterFunction);
//     return result;

// }).then(function(val){
//     var temp = 0;
//     for(var i = 0; i < val.length; i++){
//         temp += val[i]
//     }
//     console.log(temp);

// }).catch(function(err){
//     console.log("Error: " + err)
// });

//if (verificador == false) {
//  intervalo = setInterval(function () {
//    tiempo += 0.01;
//  temporizador.innerHTML = tiempo.toFixed(2);
// }, 10);
// verificador = true;
// } else {
// verificador = false;
// clearInterval(intervalo);
// }
// }

//function resetearContador() {
// verificador = false;
// tiempo = 0;
// temporizador.innerHTML = tiempo + ':00';
// clearInterval(intervalo);
// while (almacenarTiempos.firstChild) {
// almacenarTiempos.removeChild(almacenarTiempos.firstChild);
// }
// }

//function grabarContador() {
//if (temporizador.textContent === '00:00:00') {
//console.log('click en el botón iniciar');
//} else {
//let p = document.createElement('ul');
//p.innerHTML = `
//  <li>Tiempo : ${tiempo.toFixed(2)}</li>
//  `;
// almacenarTiempos.appendChild(p);
// }
//}

// seconds = 0;
// s = document.getElementById('seconds');
// m = document.getElementById('minutes');
// h = document.getElementById('hours');

// cronometer = setInterval(function () {
// seconds++;
//  secs = seconds;
//  mins = 0;
//  hours = 0;

//  while (secs>=60) {
//    mins++;
//  secs-=60;
//  }
//  while (mins <= 60) {
//    hours++;
//    mins -= 60;
// }

//  if (hours < 10) h.innerHTML = '0' + hours;
//  else h.innerHTML = hours;
//  if (mins<10) m.innerHTML = '0' + mins;
//  else m.innerHTML = mins;
//  if (secs < 10) s.innerHTML = '0' + secs;
//  else s.innerHTML = secs;

//  Total_secs = secs;
//  Total_mins = mins;
//  Total_hours = hours;
// }, 1000);
// }

// function promiseSquare(val){
//     return Promise.resolve(val * val);
// }

// function promiseDouble(val){
//     return Promise.resolve(val + val);
// }

// function filterFunction(val){
//     if ( val > 50)
//         return true;
//     else
//         return false;
// }

// var myPromise1 = Promise.resolve(500);
// var myPromise2 = promiseSquare(10);
// var myPromise3 = promiseDouble(20);

// Promise.all([myPromise1,myPromise2,myPromise3]).then(function(val){
//     var result = val.filter(filterFunction);
//     return result;

// }).then(function(val){
//     var temp = 0;
//     for(var i = 0; i < val.length; i++){
//         temp += val[i]
//     }
//     console.log(temp);

// }).catch(function(err){
//     console.log("Error: " + err)
// });

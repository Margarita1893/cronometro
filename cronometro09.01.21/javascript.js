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
  event();
};

function event() {
  iniciar.addEventListener('click', iniciarContador);
  resetear.addEventListener('click', resetearContador);
  parar.addEventListener('click', pararContador);
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
}
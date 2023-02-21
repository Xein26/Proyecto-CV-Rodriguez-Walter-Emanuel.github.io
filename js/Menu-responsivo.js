
let menu = document.getElementById('menu');
let abrir_menu = document.getElementById('abrir_menu');
let cerrar_menu = document.getElementById('cerrar_menu');

abrir_menu.addEventListener('click', toggleMenu);
cerrar_menu.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    abrir_menu.style.display = 'none';
    cerrar_menu.style.display = 'block';
  }
  else {
    abrir_menu.style.display = 'block';
    cerrar_menu.style.display = 'none';
  }
}

/* Formación */

function ocultar() {
    document.getElementById('oculto').style.display = 'none'
    document.getElementById('despliegue').style.display = 'block'
    document.getElementById('detalle').style.display = 'none'
}

function mostrar() {
    document.getElementById('oculto').style.display = 'block'
    document.getElementById('despliegue').style.display = 'none'
    document.getElementById('detalle').style.display = 'block'
}

/* Habilidades */

function ocultar1() {
    document.getElementById('oculto1').style.display = 'none'
    document.getElementById('despliegue1').style.display = 'block'
    document.getElementById('detalle1').style.display = 'none'
}

function mostrar1() {
    document.getElementById('oculto1').style.display = 'block'
    document.getElementById('despliegue1').style.display = 'none'
    document.getElementById('detalle1').style.display = 'block'
}

/* Experiencias */

function ocultar2() {
    document.getElementById('oculto2').style.display = 'none'
    document.getElementById('despliegue2').style.display = 'block'
    document.getElementById('detalle2').style.display = 'none'
}

function mostrar2() {
    document.getElementById('oculto2').style.display = 'block'
    document.getElementById('despliegue2').style.display = 'none'
    document.getElementById('detalle2').style.display = 'block'
}
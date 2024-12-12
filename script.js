function confirmarAsistencia(respuesta) {
  let mensaje = '';

  if (respuesta === 'Sí') {
    mensaje = 'Confirmo que asistiré al cumple de  BELU. Mi nombre es:';
  } else {
    mensaje = 'No podré asistir a la fiesta. Mi nombre es:';
  }

  // Reemplaza "TUNUMERODETELEFONO" con tu número de teléfono, incluyendo el código de país sin el símbolo "+".
  let telefono = '541140709888';

  // Crea un enlace de WhatsApp con el número y el mensaje predefinido.
  let enlaceWhatsApp = document.getElementById('enlaceWhatsApp');
  if (!enlaceWhatsApp) {
    enlaceWhatsApp = document.createElement('a');
    enlaceWhatsApp.id = 'enlaceWhatsApp';
    document.body.appendChild(enlaceWhatsApp);
  }
  enlaceWhatsApp.href = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
  enlaceWhatsApp.target = '_blank';

  // Crea un botón dentro del enlace (puedes personalizar esto según tus necesidades).
  let botonEnlace = document.getElementById('botonEnlace');
  if (!botonEnlace) {
    botonEnlace = document.createElement('button');
    botonEnlace.id = 'botonEnlace';
    enlaceWhatsApp.appendChild(botonEnlace);
  }
  botonEnlace.textContent = 'Ir a WhatsApp';
      // Añade un manejador de eventos al botón
      botonEnlace.addEventListener('click', () => {
        // Ejecuta la función confirmarAsistencia con la respuesta actual
        confirmarAsistencia(respuesta);
      });
      enlaceWhatsApp.appendChild(botonEnlace);

      // Agrega el enlace al contenedor deseado.
      let confirmacion = document.getElementById('confirmacion');
      confirmacion.appendChild(enlaceWhatsApp);
  // Simula un clic en el enlace.
  botonEnlace.click();
}



function createConfeti() {
  const confetiContainer = document.getElementById('confeti-container');

  for (let i = 0; i < 100; i++) {
    const confeti = document.createElement('div');
    confeti.className = 'confeti';
    confeti.style.left = `${Math.random() * 100}vw`;
    confeti.style.animationDuration = `${Math.random() * 2 + 1}s`;
    confeti.style.backgroundColor = getRandomColor();
    confetiContainer.appendChild(confeti);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Llama a la función createConfeti cuando desees activar el efecto de confeti
// Por ejemplo, puedes llamarla cuando se carga la página o cuando un usuario confirma su asistencia.
window.addEventListener('load', createConfeti);

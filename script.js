function confirmarAsistencia(respuesta) {
  let mensaje = '';

  if (respuesta === 'Sí') {
    mensaje = 'Confirmo que asistiré a la fiesta de MARÍA BELÉN. Mi nombre y apellido es:';
  } else {
    mensaje = 'No podré asistir a la fiesta. Mi nombre y apellido es:';
  }

  // Reemplaza "TUNUMERODETELEFONO" con tu número de teléfono, incluyendo el código de país sin el símbolo "+".
  let telefono = '541158045379';

  // Crea un enlace de WhatsApp con el número y el mensaje predefinido.
  let enlaceWhatsApp = document.createElement('a');
  enlaceWhatsApp.href = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
  enlaceWhatsApp.target = '_blank';

  // Crea un botón dentro del enlace (puedes personalizar esto según tus necesidades).
  let botonEnlace = document.createElement('button');
   botonEnlace.textContent = 'Ir a WhatsApp';

  // Agrega el enlace al botón.
  enlaceWhatsApp.appendChild(botonEnlace);

  // Agrega el enlace al DOM (fuera del flujo normal del documento para que no afecte el diseño).
  document.body.appendChild(enlaceWhatsApp);

  // Simula un clic en el enlace.
  botonEnlace.click();

  // Puedes agregar aquí cualquier otro código que necesites ejecutar después de enviar el mensaje.
}

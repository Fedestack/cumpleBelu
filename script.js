function confirmarAsistencia(respuesta) {
  let mensaje = '';

  if (respuesta === 'Sí') {
    mensaje = 'Confirmo mi asistencia a la fiesta. Mi nombre es:';
  } else {
    mensaje = 'No podré asistir a la fiesta. Mi nombre es:';
  }

  // Reemplaza "TUNUMERODETELEFONO" con tu número de teléfono, incluyendo el código de país sin el símbolo "+".
  let telefono = 'TUNUMERODETELEFONO';

  // Abre la interfaz de WhatsApp con el número y el mensaje predefinido.
  window.open(`https://api.whatsapp.com/send?phone=${telefono}&amp;text=${encodeURIComponent(mensaje)}`, '_blank');

  // Puedes agregar aquí cualquier otro código que necesites ejecutar después de enviar el mensaje.
}

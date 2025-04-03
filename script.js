document.addEventListener("DOMContentLoaded", function () {
  // Configuración de Flatpickr para el campo de fecha
  flatpickr("#fecha", {
    dateFormat: "Y-m-d", // Formato de fecha (YYYY-MM-DD)
    minDate: "today", // Deshabilita fechas pasadas
    maxDate: new Date().fp_incr(547), // Permite seleccionar hasta 1 año y medio (547 días)
    locale: "es", // Configuración de idioma en español
    altInput: true, // Muestra un campo alternativo con formato legible
    altFormat: "d-m-Y", // Formato alternativo (DD-MM-YYYY)
  });

  // Configuración de Select2 para el campo de materias
  if (typeof $ !== "undefined" && $.fn.select2) {
    $("#materia").select2({
      placeholder: "Selecciona una materia",
      allowClear: true,
      width: "100%", // Asegura que el select ocupe todo el ancho disponible
    });
  }
});

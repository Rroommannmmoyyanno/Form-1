document.addEventListener("DOMContentLoaded", function () {
  // Configuración de Select2 para el campo de materias
  if (typeof $ !== "undefined" && $.fn.select2) {
    $("#materia").select2({
      placeholder: "Selecciona una materia",
      allowClear: true,
      width: "100%", // Asegura que el select ocupe todo el ancho disponible
    });
  }
});

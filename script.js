document.addEventListener("DOMContentLoaded", function () {
  // Inicializar Select2
  if (typeof $ !== "undefined" && $.fn.select2) {
    $("#materia").select2({
      placeholder: "Selecciona una materia",
      allowClear: true,
      width: "100%",
    });
  }

  // Inicializar Flatpickr
  flatpickr("#fecha", {
    locale: "es",
    dateFormat: "d-m-Y",
  });
});

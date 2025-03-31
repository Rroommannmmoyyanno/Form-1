       // Inicializa el DOM cuando esté completamente cargado
        document.addEventListener("DOMContentLoaded", function () {
            // Inicializa Flatpickr si está disponible
            if (typeof flatpickr !== "undefined") {
                flatpickr("#fecha", {
                    dateFormat: "Y-m-d",  // Formato de fecha (Año-Mes-Día)
                    maxDate: "today",     // No permite fechas futuras
                    minDate: "2020-01-01", // Fecha mínima permitida
                    locale: "es"          // Idioma en español
                });
            } else {
                console.error("Flatpickr no se ha cargado correctamente.");
            }

            // Inicializa Select2 si jQuery y Select2 están disponibles
            if (typeof $ !== "undefined" && $.fn.select2) {
                $('#materia').select2({
                    placeholder: "Selecciona una materia", // Texto de ayuda
                    allowClear: true // Permite limpiar la selección
                });
            } else {
                console.error("Select2 no se ha cargado correctamente.");
            }

            // Agrega dinámicamente opciones al select (si es necesario)
            const materias = ["Matemática", "Historia", "Programación", "Física", "Química"];
            const selectMateria = document.getElementById("materia");

            if (selectMateria) {
                materias.forEach(materia => {
                    const option = document.createElement("option");
                    option.value = materia.toLowerCase(); // Valor en minúsculas
                    option.textContent = materia; // Texto visible
                    selectMateria.appendChild(option);
                });
            }
        });
   
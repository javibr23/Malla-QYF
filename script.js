// 👇 Esto hace que el código espere a que la página esté lista
document.addEventListener("DOMContentLoaded", () => {
  // 🔗 Aquí van los requisitos entre ramos
  const dependencias = {
    "Química general I": ["Química general II", "Laboratorio de Química General", "Fisiología Celular"],
    "Técnicas de Laboratorio Químico": ["Laboratorio de Química General"],
    "Mecánica": ["Electromagnetismo", "Fisicoquímica I"],
    "Introducción al Cálculo": ["Calculo diferencial e integral", "Electromagnetismo"],
    "El Químico Farmacéutico y su Acción": ["El Medicamento y su Evolución"],
    "Inglés I": ["Inglés II"],
    "Química General II": ["Química Orgánica I", "Química Analítica I", "Laboratorio I de Química Orgánica"],
    "Laboratorio de Química General": ["Química analítica I", "Laboratorio I de Química Orgánica"],
    "Electromagnetismo": ["Fisiología celular"],
    "Calculo diferencial e integral": ["Estadísticas y análisis de datos", "Fisicoquímica I"],
    "Biología general": ["Fisiología celular"],
    "El Medicamento y su Evolución": ["Investigación para las Ciencias Farmacéuticas"],
    "Inglés II": ["Inglés III", "Investigación para las Ciencias Farmacéuticas"],
    "Química Orgánica I": ["Química Orgánica II", "Fisicoquímica I"],
    "Química analítica I": ["Química analítica II", "Laboratorio de Análisis Químico"],
    "Estadísticas y análisis de datos": ["Laboratorio de Análisis Químico", "Estadística Farmacéutica"],
    "Fisiología celular": ["Fisiología de Sistemas"],
    "Investigación para las Ciencias Farmacéuticas": ["Practica intermedia", "Gestión de Calidad"],
    "Inglés III": ["Inglés IV"],
    "Química orgánica II": ["Química de Heterocíclicos y Análisis Espectroscópico", "Bioquímica", "Botánica y Farmacognosia"],
    "Laboratorio de Análisis Químico": ["Laboratorio de análisis instrumental", "Farmacología General"],
    "Química analítica II": ["Laboratorio de Análisis Instrumental", "Botánica y Farmacognosia"],
    "Fisicoquímica I": ["Bioquímica", "Fisicoquímica Farmacéutica"],
    "Fisiología de Sistemas": ["Farmacología General", "Fisiopatología Molecular"],
    "Practica intermedia": ["Legislación Farmacéutica"],
    "Laboratorio de análisis instrumental": ["Análisis de medicamentos, Doping y Drogas de Abuso", "Bromatología"],
    "Química de Heterocíclicos y Análisis Espectroscópico": ["Farmoquímica I"],
    "Bioquímica": ["Fisiopatología Molecular", "Microbiología"],
    "Farmacología General": ["Farmoquímica I", "Farmacología de Sistemas I", "Biofarmacia y Farmacocinética"],
    "Gestión de Calidad": ["Legislación Farmacéutica"],
    "Microbiología": ["Farmacología de sistemas II"],
    "Farmoquímica I": ["Farmoquímica II"],
    "Farmacología de sistemas I": ["Farmacología de sistemas II"],
    "Fisiopatología Molecular": ["Fisiopatología y Semiología", "Biotecnología Farmacéutica"],
    "Legislación Farmacéutica": ["Salud Publica", "Tecnología Farmacéutica I"],
    "Fisicoquímica Farmacéutica": ["Operaciones Unitarias para QYF", "Tecnología Farmacéutica I"],
    "Fisiopatología y Semiología": ["Bioquímica Clínica", "Nutrición Clínica"],
    "Farmoquímica II": ["Análisis de medicamentos, Doping y Drogas de Abuso"],
    "Farmacología de sistemas II": ["Toxicología", "Farmacología Clínica"],
    "Salud Publica": ["Estadística Farmacéutica", "Economía en Salud y Marketing Farmacéutico", "Farmacia asistencial"],
    "Tecnología Farmacéutica I": ["Tecnología Farmacéutica II", "Biofarmacia y Farmacocinética", "Administración y Gestión Farmacéutica"],
    "Operaciones Unitarias para QYF": ["Tecnología Farmacéutica II"],
    "Nutrición Clínica": ["Bromatología"],
    "Bioquímica Clínica": ["Toxicología", "Farmacología Clínica"],
    "Biofarmacia y Farmacocinética": ["Farmacología Clínica"],
    "Tecnología Farmacéutica II": ["Tecnología Cosmética", "Biotecnología Farmacéutica"],
    "Administración y Gestión Farmacéutica": ["Practica Profesional en Farmacia Comunitaria", "Farmacia Asistencial", "Economía en Salud y Marketing Farmacéutico"],
    "Estadística Farmacéutica": ["Innovación y Proyectos"],
    "Farmacología Clínica": ["Practica Profesional en Farmacia Comunitaria", "Actividad final de titulación"],
    "Toxicología": ["Practica Profesional en Farmacia Comunitaria"],
    "Farmacia Clínica": ["Actividad final de titulación"],
    "Práctica Profesional en Farmacia Comunitaria": ["Actividad final de titulación"],
    "Biotecnología Farmacéutica": ["Actividad final de titulación"],
    "Economía en Salud y Marketing Farmacéutico": ["Actividad final de titulación"],
    "Innovación y proyectos": ["Actividad final de titulación"]
  };

  // 🧠 Estado de cada ramo (si está aprobado o no)
  const estados = {};
  const malla = document.getElementById("malla");

  // 🧱 Genera todos los botones de ramos
  const ramos = Array.from(
    new Set(Object.keys(dependencias).concat(...Object.values(dependencias)))
  );

  ramos.forEach(ramo => {
    estados[ramo] = false;
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.textContent = ramo;
    div.id = ramo;
    div.addEventListener("click", () => aprobar(ramo));
    malla.appendChild(div);
  });

  // ✅ Cuando apruebas un ramo, desbloquea los que dependían de él
  function aprobar(nombre) {
    if (estados[nombre]) return;

    estados[nombre] = true;
    document.getElementById(nombre).classList.add("aprobado");

    if (dependencias[nombre]) {
      dependencias[nombre].forEach(dep => {
        const requisitos = Object.entries(dependencias)
          .filter(([_, hijos]) => hijos.includes(dep))
          .map(([padre]) => padre);

        if (requisitos.every(req => estados[req])) {
          document.getElementById(dep).classList.remove("deshabilitado");
        }
      });
    }
  }
});

// Estructura: { "Nombre del ramo": [ramos que desbloquea] }
const ramos = {
  "Química general I": ["Química General II", "Laboratorio de Química General", "Fisiología celular"],
  "Técnicas de Laboratorio Químico": ["Laboratorio de Química General"],
  "Mecánica": ["Electromagnetismo", "Fisicoquímica I"],
  "Introducción al Cálculo": ["Calculo diferencial e integral", "Electromagnetismo"],
  "El Químico Farmacéutico y su Acción": ["El Medicamento y su Evolución"],
  "Inglés I": ["Inglés II"],
  "Química General II": ["Química Orgánica I", "Química analítica I", "Laboratorio I de Química Orgánica"],
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
  "Farmacología General": ["Farmoquímica I", "Farmacología de sistemas I", "Biofarmacia y Farmacocinética"],
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
  "Administración y Gestión Farmacéutica": ["Práctica Profesional en Farmacia Comunitaria", "Farmacia Asistencial", "Economía en Salud y Marketing Farmacéutico"],
  "Estadística Farmacéutica": ["Innovación y Proyectos"],
  "Farmacología Clínica": ["Práctica Profesional en Farmacia Comunitaria", "Actividad final de titulación"],
  "Toxicología": ["Práctica Profesional en Farmacia Comunitaria"],
  "Farmacia Clínica": ["Actividad final de titulación"],
  "Práctica Profesional en Farmacia Comunitaria": ["Actividad final de titulación"],
  "Biotecnología Farmacéutica": ["Actividad final de titulación"],
  "Economía en Salud y Marketing Farmacéutico": ["Actividad final de titulación"],
  "Innovación y proyectos": ["Actividad final de titulación"]
};

const aprobados = new Set();
const mallaContainer = document.getElementById("malla");

function generarTodosLosRamos() {
  const todos = new Set(Object.keys(ramos).concat(...Object.values(ramos)));

  [...todos].sort().forEach(nombre => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.innerText = nombre;
    div.id = nombre;
    div.onclick = () => toggleRamo(nombre);
    mallaContainer.appendChild(div);
  });

  actualizarRamos();
}

function toggleRamo(nombre) {
  const el = document.getElementById(nombre);
  if (el.classList.contains("bloqueado")) return;
  if (aprobados.has(nombre)) {
    aprobados.delete(nombre);
  } else {
    aprobados.add(nombre);
  }
  actualizarRamos();
}

function actualizarRamos() {
  document.querySelectorAll(".ramo").forEach(el => {
    const nombre = el.id;
    el.classList.remove("aprobado");
    el.classList.add("bloqueado");

    // Si no tiene requisitos o ya se cumplieron
    const requisitos = Object.entries(ramos).filter(([_, desbloquea]) => desbloquea.includes(nombre)).map(([req]) => req);
    const cumple = requisitos.every(req => aprobados.has(req));

    if (requisitos.length === 0 || cumple) {
      el.classList.remove("bloqueado");
    }

    if (aprobados.has(nombre)) {
      el.classList.add("aprobado");
    }
  });
}

generarTodosLosRamos();

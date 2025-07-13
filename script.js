const ramos = {
  // I Semestre
  "Química general I": ["Química general II", "Laboratorio de Química General", "Fisiología Celular"],
  "Técnicas de Laboratorio Químico": ["Laboratorio de Química General"],
  "Mecánica": ["Electromagnetismo", "Fisicoquímica I"],
  "Introducción al Cálculo": ["Calculo diferencial e integral", "Electromagnetismo"],
  "El Químico Farmacéutico y su Acción": ["El Medicamento y su Evolución"],
  "Inglés I": ["Inglés II"],

  // II Semestre
  "Química General II": ["Química Orgánica I", "Química Analítica I", "Laboratorio I de Química Orgánica"],
  "Laboratorio de Química General": ["Química analítica I", "Laboratorio I de Química Orgánica"],
  "Electromagnetismo": ["Fisiología celular"],
  "Calculo diferencial e integral": ["Estadísticas y análisis de datos", "Fisicoquímica I"],
  "Biología general": ["Fisiología celular"],
  "El Medicamento y su Evolución": ["Investigación para las Ciencias Farmacéuticas"],
  "Inglés II": ["Inglés III", "Investigación para las Ciencias Farmacéuticas"],

  // III Semestre
  "Química Orgánica I": ["Química Orgánica II", "Fisicoquímica I"],
  "Química analítica I": ["Química analítica II", "Laboratorio de Análisis Químico"],
  "Estadísticas y análisis de datos": ["Laboratorio de Análisis Químico", "Estadística Farmacéutica"],
  "Fisiología celular": ["Fisiología de Sistemas"],
  "Investigación para las Ciencias Farmacéuticas": ["Practica intermedia", "Gestión de Calidad"],
  "Inglés III": ["Inglés IV"],

  // IV Semestre
  "Química orgánica II": ["Química de Heterocíclicos y Análisis Espectroscópico", "Bioquímica", "Botánica y Farmacognosia"],
  "Laboratorio de Análisis Químico": ["Laboratorio de análisis instrumental", "Farmacología General"],
  "Química analítica II": ["Laboratorio de Análisis Instrumental", "Botánica y Farmacognosia"],
  "Fisicoquímica I": ["Bioquímica", "Fisicoquímica Farmacéutica"],
  "Fisiología de Sistemas": ["Farmacología General", "Fisiopatología Molecular"],
  "Practica intermedia": ["Legislación Farmacéutica"],

  // V Semestre
  "Laboratorio de análisis instrumental": ["Análisis de medicamentos, Doping y Drogas de Abuso", "Bromatología"],
  "Química de Heterocíclicos y Análisis Espectroscópico": ["Farmoquímica I"],
  "Bioquímica": ["Fisiopatología Molecular", "Microbiología"],
  "Farmacología General": ["Farmoquímica I", "Farmacología de sistemas I", "Biofarmacia y Farmacocinética"],
  "Gestión de Calidad": ["Legislación Farmacéutica"],

  // VI Semestre
  "Microbiología": ["Farmacología de sistemas II"],
  "Farmoquímica I": ["Farmoquímica II"],
  "Farmacología de sistemas I": ["Farmacología de sistemas II"],
  "Fisiopatología Molecular": ["Fisiopatología y Semiología", "Biotecnología Farmacéutica"],
  "Legislación Farmacéutica": ["Salud Publica", "Tecnología Farmacéutica I"],
  "Fisicoquímica Farmacéutica": ["Operaciones Unitarias para QYF", "Tecnología Farmacéutica I"],

  // VII Semestre
  "Fisiopatología y Semiología": ["Bioquímica Clínica", "Nutrición Clínica"],
  "Farmoquímica II": ["Análisis de medicamentos, Doping y Drogas de Abuso"],
  "Farmacología de sistemas II": ["Toxicología", "Farmacología Clínica"],
  "Salud Publica": ["Estadística Farmacéutica", "Economía en Salud y Marketing Farmacéutico", "Farmacia asistencial"],
  "Tecnología Farmacéutica I": ["Tecnología Farmacéutica II", "Biofarmacia y Farmacocinética", "Administración y Gestión Farmacéutica"],
  "Operaciones Unitarias para QYF": ["Tecnología Farmacéutica II"],

  // VIII Semestre
  "Nutrición Clínica": ["Bromatología"],
  "Bioquímica Clínica": ["Toxicología", "Farmacología Clínica"],
  "Biofarmacia y Farmacocinética": ["Farmacología Clínica"],
  "Tecnología Farmacéutica II": ["Tecnología Cosmética", "Biotecnología Farmacéutica"],
  "Administración y Gestión Farmacéutica": ["Practica Profesional en Farmacia Comunitaria", "Farmacia Asistencial", "Economía en Salud y Marketing Farmacéutico"],
  "Estadística Farmacéutica": ["Innovación y Proyectos"],

  // IX Semestre
  "Farmacología Clínica": ["Practica Profesional en Farmacia Comunitaria", "Actividad final de titulación"],
  "Toxicología": ["Practica Profesional en Farmacia Comunitaria"],

  // X Semestre
  "Farmacia Clínica": ["Actividad final de titulación"],
  "Práctica Profesional en Farmacia Comunitaria": ["Actividad final de titulación"],
  "Biotecnología Farmacéutica": ["Actividad final de titulación"],
  "Economía en Salud y Marketing Farmacéutico": ["Actividad final de titulación"],
  "Innovación y proyectos": ["Actividad final de titulación"]
};

const aprobados = new Set();
const mallaContainer = document.getElementById("malla");

function crearMalla() {
  const todosLosRamos = Object.keys(ramos).concat(
    ...Object.values(ramos)
  );

  const ramosUnicos = [...new Set(todosLosRamos)];

  ramosUnicos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.innerText = ramo;
    div.id = ramo;
    div.onclick = () => toggleRamo(ramo);
    mallaContainer.appendChild(div);
  });

  actualizarRamos();
}

function toggleRamo(nombre) {
  const elemento = document.getElementById(nombre);
  if (elemento.classList.contains("bloqueado")) return;

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

    if (
      !Object.values(ramos)
        .flat()
        .includes(nombre) ||
      Object.entries(ramos)
        .filter(([_, deps]) => deps.includes(nombre))
        .every(([req]) => aprobados.has(req))
    ) {
      el.classList.remove("bloqueado");
    }

    if (aprobados.has(nombre)) {
      el.classList.add("aprobado");
    }
  });
}

crearMalla();

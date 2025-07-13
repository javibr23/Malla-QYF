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
};

const asignaciones = [
  ["Química general I", "Técnicas de Laboratorio Químico", "Mecánica", "Introducción al Cálculo", "El Químico Farmacéutico y su Acción", "Inglés I", "Cursos de Formación General 1"],
  ["Química General II", "Laboratorio de Química General", "Electromagnetismo", "Calculo diferencial e integral", "Biología general", "El Medicamento y su Evolución", "Inglés II"],
  ["Química Orgánica I", "Química analítica I", "Laboratorio I de Química Orgánica", "Estadísticas y análisis de datos", "Fisiología celular", "Investigación para las Ciencias Farmacéuticas", "Cursos de Formación General 2", "Inglés III"],
  ["Química Orgánica II", "Laboratorio de Análisis Químico", "Química analítica II", "Fisicoquímica I", "Fisiología de Sistemas", "Practica intermedia", "Inglés IV"]
];

const aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("contenedor-dinamico");

  asignaciones.forEach((ramos, idx) => {
    const semestre = document.createElement("div");
    semestre.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = `${idx + 1}° Semestre`;
    semestre.appendChild(titulo);

    ramos.forEach(nombre => {
      const ramo = document.createElement("div");
      ramo.textContent = nombre;
      ramo.id = nombre;
      ramo.classList.add("ramo", "bloqueado");
      ramo.onclick = () => toggleRamo(nombre);
      semestre.appendChild(ramo);
    });

    contenedor.appendChild(semestre);
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

    const requisitos = Object.entries(ramos)
      .filter(([_, desbloquea]) => desbloquea.includes(nombre))
      .map(([req]) => req);

    const cumple = requisitos.every(req => aprobados.has(req));

    if (requisitos.length === 0 || cumple) {
      el.classList.remove("bloqueado");
    }

    if (aprobados.has(nombre)) {
      el.classList.add("aprobado");
    }
  });
}

crearMalla();

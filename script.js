document.addEventListener("DOMContentLoaded", () => {
  const malla = {
    "Primer año": {
      "I Semestre": [
        "Química general I",
        "Técnicas de Laboratorio Químico",
        "Mecánica",
        "Introducción al Cálculo",
        "El Químico Farmacéutico y su Acción",
        "Inglés I",
        "Cursos de Formación General"
      ],
      "II Semestre": [
        "Química General II",
        "Laboratorio de Química General",
        "Electromagnetismo",
        "Calculo diferencial e integral",
        "Biología general",
        "El Medicamento y su Evolución",
        "Inglés II"
      ]
    },
    "Segundo año": {
      "III semestre": [
        "Química Orgánica I",
        "Química analítica I",
        "Laboratorio I de Química Orgánica",
        "Estadísticas y análisis de datos",
        "Fisiología celular",
        "Investigación para las Ciencias Farmacéuticas",
        "Cursos de Formación General",
        "Inglés III"
      ],
      "IV semestre": [
        "Química orgánica II",
        "Laboratorio de Análisis Químico",
        "Química analítica II",
        "Fisicoquímica I",
        "Fisiología de Sistemas",
        "Practica intermedia",
        "Inglés IV"
      ]
    }
  };

  const dependencias = {
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
    "Química Orgánica I": ["Química orgánica II", "Fisicoquímica I"],
    "Química analítica I": ["Química analítica II", "Laboratorio de Análisis Químico"],
    "Estadísticas y análisis de datos": ["Laboratorio de Análisis Químico"],
    "Fisiología celular": ["Fisiología de Sistemas"],
    "Investigación para las Ciencias Farmacéuticas": ["Practica intermedia"],
    "Inglés III": ["Inglés IV"]
  };

  const estados = {};
  const contenedor = document.getElementById("contenedor");

  for (const [anio, semestres] of Object.entries(malla)) {
    for (const [semestre, ramos] of Object.entries(semestres)) {
      const columna = document.createElement("div");
      columna.classList.add("semestre");

      const titulo = document.createElement("h2");
      titulo.textContent = semestre;
      columna.appendChild(titulo);

      ramos.forEach(ramo => {
        estados[ramo] = false;
        const div = document.createElement("div");
        div.classList.add("ramo");
        if (tieneRequisitos(ramo)) {
          div.classList.add("bloqueado");
        }
        div.textContent = ramo;
        div.id = ramo;
        div.addEventListener("click", () => aprobar(ramo));
        columna.appendChild(div);
      });

      contenedor.appendChild(columna);
    }
  }

  function tieneRequisitos(ramo) {
    return Object.values(dependencias).some(lista => lista.includes(ramo));
  }

  function requisitosCumplidos(ramo) {
    const requisitos = Object.entries(dependencias)
      .filter(([_, hijos]) => hijos.includes(ramo))
      .map(([padre]) => padre);
    return requisitos.every(r => estados[r]);
  }

  function aprobar(nombre) {
    if (estados[nombre]) return;
    if (tieneRequisitos(nombre) && !requisitosCumplidos(nombre)) return;

    estados[nombre] = true;
    const nodo = document.getElementById(nombre);
    nodo.classList.add("aprobado");
    nodo.classList.remove("bloqueado");

    if (dependencias[nombre]) {
      dependencias[nombre].forEach(dep => {
        if (requisitosCumplidos(dep)) {
          const nodoHijo = document.getElementById(dep);
          nodoHijo.classList.remove("bloqueado");
        }
      });
    }
  }
});

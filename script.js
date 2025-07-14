const ramos = [
  { nombre: "Química general I", semestre: "I Semestre", desbloquea: ["Química General II", "Laboratorio de Química General", "Fisiología Celular"] },
  { nombre: "Técnicas de Laboratorio Químico", semestre: "I Semestre", desbloquea: ["Laboratorio de Química General"] },
  { nombre: "Mecánica", semestre: "I Semestre", desbloquea: ["Electromagnetismo", "Fisicoquímica I"] },
  { nombre: "Introducción al Cálculo", semestre: "I Semestre", desbloquea: ["Calculo diferencial e integral", "Electromagnetismo"] },
  { nombre: "El Químico Farmacéutico y su Acción", semestre: "I Semestre", desbloquea: ["El Medicamento y su Evolución"] },
  { nombre: "Inglés I", semestre: "I Semestre", desbloquea: ["Inglés II"] },
  { nombre: "Cursos de Formación General I", semestre: "I Semestre", desbloquea: [] },

  { nombre: "Química General II", semestre: "II Semestre", desbloquea: ["Química Orgánica I", "Química Analítica I", "Laboratorio I de Química Orgánica"] },
  { nombre: "Laboratorio de Química General", semestre: "II Semestre", desbloquea: ["Química analítica I", "Laboratorio I de Química Orgánica"] },
  { nombre: "Electromagnetismo", semestre: "II Semestre", desbloquea: ["Fisiología celular"] },
  { nombre: "Calculo diferencial e integral", semestre: "II Semestre", desbloquea: ["Estadísticas y análisis de datos", "Fisicoquímica I"] },
  { nombre: "Biología general", semestre: "II Semestre", desbloquea: ["Fisiología celular"] },
  { nombre: "El Medicamento y su Evolución", semestre: "II Semestre", desbloquea: ["Investigación para las Ciencias Farmacéuticas"] },
  { nombre: "Inglés II", semestre: "II Semestre", desbloquea: ["Inglés III", "Investigación para las Ciencias Farmacéuticas"] },

  { nombre: "Química Orgánica I", semestre: "III Semestre", desbloquea: ["Química Orgánica II", "Fisicoquímica I"] },
  { nombre: "Química analítica I", semestre: "III Semestre", desbloquea: ["Química analítica II", "Laboratorio de Análisis Químico"] },
  { nombre: "Laboratorio I de Química Orgánica", semestre: "III Semestre", desbloquea: [] },
  { nombre: "Estadísticas y análisis de datos", semestre: "III Semestre", desbloquea: ["Laboratorio de Análisis Químico", "Estadística Farmacéutica"] },
  { nombre: "Fisiología celular", semestre: "III Semestre", desbloquea: ["Fisiología de Sistemas"] },
  { nombre: "Investigación para las Ciencias Farmacéuticas", semestre: "III Semestre", desbloquea: ["Practica intermedia", "Gestión de Calidad"] },
  { nombre: "Cursos de Formación General II", semestre: "III Semestre", desbloquea: [] },
  { nombre: "Inglés III", semestre: "III Semestre", desbloquea: ["Inglés IV"] },

  { nombre: "Química Orgánica II", semestre: "IV Semestre", desbloquea: ["Química de Heterocíclicos y Análisis Espectroscópico", "Bioquímica", "Botánica y Farmacognosia"] },
  { nombre: "Laboratorio de Análisis Químico", semestre: "IV Semestre", desbloquea: ["Laboratorio de análisis instrumental", "Farmacología General"] },
  { nombre: "Química analítica II", semestre: "IV Semestre", desbloquea: ["Laboratorio de Análisis Instrumental", "Botánica y Farmacognosia"] },
  { nombre: "Fisicoquímica I", semestre: "IV Semestre", desbloquea: ["Bioquímica", "Fisicoquímica Farmacéutica"] },
  { nombre: "Fisiología de Sistemas", semestre: "IV Semestre", desbloquea: ["Farmacología General", "Fisiopatología Molecular"] },
  { nombre: "Practica intermedia", semestre: "IV Semestre", desbloquea: ["Legislación Farmacéutica"] },
  { nombre: "Inglés IV", semestre: "IV Semestre", desbloquea: [] },

  { nombre: "Laboratorio de análisis instrumental", semestre: "V Semestre", desbloquea: ["Análisis de medicamentos, Doping y Drogas de Abuso", "Bromatología"] },
  { nombre: "Botánica y Farmacognosia", semestre: "V Semestre", desbloquea: [] },
  { nombre: "Química de Heterocíclicos y Análisis Espectroscópico", semestre: "V Semestre", desbloquea: ["Farmoquímica I"] },
  { nombre: "Bioquímica", semestre: "V Semestre", desbloquea: ["Fisiopatología Molecular", "Microbiología"] },
  { nombre: "Farmacología General", semestre: "V Semestre", desbloquea: ["Farmoquímica I", "Farmacología de Sistemas I", "Biofarmacia y Farmacocinética"] },
  { nombre: "Gestión de Calidad", semestre: "V Semestre", desbloquea: ["Legislación Farmacéutica"] },

  { nombre: "Microbiología", semestre: "VI Semestre", desbloquea: ["Farmacología de sistemas II"] },
  { nombre: "Farmoquímica I", semestre: "VI Semestre", desbloquea: ["Farmoquímica II"] },
  { nombre: "Farmacología de Sistemas I", semestre: "VI Semestre", desbloquea: ["Farmacología de sistemas II"] },
  { nombre: "Fisiopatología Molecular", semestre: "VI Semestre", desbloquea: ["Fisiopatología y Semiología", "Biotecnología Farmacéutica"] },
  { nombre: "Legislación Farmacéutica", semestre: "VI Semestre", desbloquea: ["Salud Publica", "Tecnología Farmacéutica I"] },
  { nombre: "Fisicoquímica Farmacéutica", semestre: "VI Semestre", desbloquea: ["Operaciones Unitarias para QYF", "Tecnología Farmacéutica I"] },

  { nombre: "Fisiopatología y Semiología", semestre: "VII Semestre", desbloquea: ["Bioquímica Clínica", "Nutrición Clínica"] },
  { nombre: "Farmoquímica II", semestre: "VII Semestre", desbloquea: ["Análisis de medicamentos, Doping y Drogas de Abuso"] },
  { nombre: "Farmacología de sistemas II", semestre: "VII Semestre", desbloquea: ["Toxicología", "Farmacología Clínica"] },
  { nombre: "Salud Publica", semestre: "VII Semestre", desbloquea: ["Estadística Farmacéutica", "Economía en Salud y Marketing Farmacéutico", "Farmacia Asistencial"] },
  { nombre: "Tecnología Farmacéutica I", semestre: "VII Semestre", desbloquea: ["Tecnología Farmacéutica II", "Biofarmacia y Farmacocinética", "Administración y Gestión Farmacéutica"] },
  { nombre: "Operaciones Unitarias para QYF", semestre: "VII Semestre", desbloquea: ["Tecnología Farmacéutica II"] },

  { nombre: "Análisis de medicamentos, Doping y Drogas de Abuso", semestre: "VIII Semestre", desbloquea: [] },
  { nombre: "Nutrición Clínica", semestre: "VIII Semestre", desbloquea: ["Bromatología"] },
  { nombre: "Bioquímica Clínica", semestre: "VIII Semestre", desbloquea: ["Toxicología", "Farmacología Clínica"] },
  { nombre: "Biofarmacia y Farmacocinética", semestre: "VIII Semestre", desbloquea: ["Farmacología Clínica"] },
  { nombre: "Tecnología Farmacéutica II", semestre: "VIII Semestre", desbloquea: ["Tecnología Cosmética", "Biotecnología Farmacéutica"] },
  { nombre: "Administración y Gestión Farmacéutica", semestre: "VIII Semestre", desbloquea: ["Practica Profesional en Farmacia Comunitaria", "Farmacia Asistencial", "Economía en Salud y Marketing Farmacéutico"] },
  { nombre: "Estadística Farmacéutica", semestre: "VIII Semestre", desbloquea: ["Innovación y proyectos"] },

  { nombre: "Farmacología Clínica", semestre: "IX Semestre", desbloquea: ["Practica Profesional en Farmacia Comunitaria", "Actividad final de titulación"] },
  { nombre: "Bromatología", semestre: "IX Semestre", desbloquea: [] },
  { nombre: "Toxicología", semestre: "IX Semestre", desbloquea: ["Practica Profesional en Farmacia Comunitaria"] },
  { nombre: "Farmacia Asistencial", semestre: "IX Semestre", desbloquea: [] },
  { nombre: "Tecnología Cosmética", semestre: "IX Semestre", desbloquea: [] },
  { nombre: "Electivo Especializado I", semestre: "IX Semestre", desbloquea: [] },

  { nombre: "Farmacia Clínica", semestre: "X Semestre", desbloquea: ["Actividad final de titulación"] },
  { nombre: "Práctica Profesional en Farmacia Comunitaria", semestre: "X Semestre", desbloquea: ["Actividad final de titulación"] },
  { nombre: "Biotecnología Farmacéutica", semestre: "X Semestre", desbloquea: ["Actividad final de titulación"] },
  { nombre: "Economía en Salud y Marketing Farmacéutico", semestre: "X Semestre", desbloquea: ["Actividad final de titulación"] },
  { nombre: "Innovación y proyectos", semestre: "X Semestre", desbloquea: ["Actividad final de titulación"] },
  { nombre: "Electivo Especializado II", semestre: "X Semestre", desbloquea: [] },

  { nombre: "Actividad final de titulación", semestre: "XI Semestre", desbloquea: [] }
];

const estadoRamos = {};

function guardarProgreso() {
  const aprobados = Object.keys(estadoRamos).filter(r => estadoRamos[r].aprobado);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

function cargarProgreso() {
  const aprobados = JSON.parse(localStorage.getItem("ramosAprobados")) || [];
  aprobados.forEach(nombre => aprobarRamo(nombre, true));
}

document.addEventListener("DOMContentLoaded", () => {
  const malla = document.getElementById("malla-container");
  const semestres = [...new Set(ramos.map(r => r.semestre))];
  const mapaSemestres = {};

  semestres.forEach(sem => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>${sem}</h2>`;
    malla.appendChild(div);
    mapaSemestres[sem] = div;
  });

  ramos.forEach(r => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.innerHTML = r.nombre;

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado") || div.classList.contains("aprobado")) return;
      aprobarRamo(r.nombre);
    });

    mapaSemestres[r.semestre].appendChild(div);

    estadoRamos[r.nombre] = { aprobado: false, contenedor: div, desbloquea: r.desbloquea };
  });

  desbloquearIniciales();
  cargarProgreso();

  // Botón para reiniciar la malla
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reiniciar malla";
  resetBtn.style.cssText = `
    display: block;
    margin: 30px auto;
    padding: 10px 20px;
    border: none;
    background-color: #f06292;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: background-color 0.3s;
  `;
  resetBtn.addEventListener("mouseenter", () => {
    resetBtn.style.backgroundColor = "#ec407a";
  });
  resetBtn.addEventListener("mouseleave", () => {
    resetBtn.style.backgroundColor = "#f06292";
  });
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("ramosAprobados");
    location.reload();
  });

  document.body.appendChild(resetBtn);
});

function desbloquearIniciales() {
  const ramosConPrerequisitos = ramos.map(r => r.desbloquea).flat();
  const ramosIniciales = ramos.filter(r => !ramosConPrerequisitos.includes(r.nombre));

  ramosIniciales.forEach(r => {
    estadoRamos[r.nombre].contenedor.classList.remove("bloqueado");
  });
}

function aprobarRamo(nombre, cargando = false) {
  const ramo = estadoRamos[nombre];
  if (ramo.aprobado) return;

  ramo.aprobado = true;
  ramo.contenedor.classList.add("aprobado");
  ramo.contenedor.classList.remove("bloqueado");

  ramo.desbloquea.forEach(nombreDesbloqueado => {
    if (estadoRamos[nombreDesbloqueado]) {
      const requisitos = ramos.filter(r => r.desbloquea.includes(nombreDesbloqueado));
      const aprobados = requisitos.every(r => estadoRamos[r.nombre].aprobado);
      if (aprobados) {
        estadoRamos[nombreDesbloqueado].contenedor.classList.remove("bloqueado");
      }
    }
  });

  if (!cargando) guardarProgreso();
}

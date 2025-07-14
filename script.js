const grid = document.getElementById('grid');

// Lista de cursos con sus requisitos
const courses = {
  // CBC
  "CBC - Dibujo": [],
  "CBC - Proyectual 1": [],
  "CBC - Proyectual 2": [],
  "CBC - Semiología": [],
  "CBC - Matemática": [],
  "CBC - Pensamiento Científico": [],
  "CBC - Sociedad y Estado": [],

  // Primer Año
  "Diseño Gráfico 1": ["CBC - Dibujo", "CBC - Proyectual 1", "CBC - Proyectual 2", "CBC - Semiología", "CBC - Matemática", "CBC - Pensamiento Científico", "CBC - Sociedad y Estado"],
  "Morfología 1": ["Diseño Gráfico 1"],
  "Tipografía 1": ["Diseño Gráfico 1"],
  "Historia 1": ["Diseño Gráfico 1"],
  "Comunicación 1": ["Diseño Gráfico 1"],
  "Tecnología 1": ["Diseño Gráfico 1"],
  "Electiva (Fotografía/Ilustración)": ["Diseño Gráfico 1"],

  // Segundo Año
  "Diseño Gráfico 2": ["Diseño Gráfico 1", "Morfología 1", "Tipografía 1"],
  "Morfología 2": ["Morfología 1"],
  "Historia 2": ["Historia 1"],
  "Comunicación 2": ["Comunicación 1"],
  "Tecnología 2": ["Tecnología 1"],
  "Medios Expresivos 1": ["Electiva (Fotografía/Ilustración)"],

  // Tercer Año
  "Diseño Gráfico 3": ["Diseño Gráfico 2", "Morfología 1", "Tipografía 1", "Morfología 2", "Comunicación 1", "Historia 1", "Tecnología 1", "Electiva (Fotografía/Ilustración)"],
  "Tipografía 2": ["Morfología 1", "Tipografía 1"],
  "Medios Expresivos 2": ["Medios Expresivos 1"],
  "Legislación y Práctica Profesional": ["Diseño Gráfico 2", "Morfología 2", "Comunicación 1", "Historia 1", "Tecnología 1", "Electiva (Fotografía/Ilustración)"],
  "Electiva sociohumanística": ["Diseño Gráfico 2", "Morfología 2", "Comunicación 1", "Historia 1", "Tecnología 1", "Electiva (Fotografía/Ilustración)"],

  // Cuarto Año
  "Diseño Gráfico 4": ["Diseño Gráfico 3", "Morfología 2", "Tipografía 2", "Medios Expresivos 1", "Comunicación 2", "Historia 2", "Tecnología 2"],
  "Materia Optativa 1": ["Diseño Gráfico 2", "Morfología 2", "Medios Expresivos 1", "Tecnología 2"],
  "Materia Optativa 2": ["Diseño Gráfico 2", "Morfología 2", "Medios Expresivos 1", "Tecnología 2"],
  "Seminario Optativo 1": ["Diseño Gráfico 2", "Morfología 2", "Medios Expresivos 1", "Tecnología 2"],
  "Seminario Optativo 2": ["Diseño Gráfico 2", "Morfología 2", "Medios Expresivos 1", "Tecnología 2"],
  "Seminario Optativo 3": ["Diseño Gráfico 2", "Morfología 2", "Medios Expresivos 1", "Tecnología 2"],
  "Electiva de Formación Orientada 1": ["Diseño Gráfico 3", "Morfología 2", "Tipografía 2", "Medios Expresivos 1", "Tecnología 2"],
  "Electiva de Formación Orientada 2": ["Diseño Gráfico 3", "Morfología 2", "Tipografía 2", "Medios Expresivos 1", "Tecnología 2"],
};

let completed = new Set();

function isUnlocked(course) {
  const requirements = courses[course];
  return requirements.every(req => completed.has(req));
}

function updateCourses() {
  document.querySelectorAll('.course').forEach(el => {
    const courseName = el.dataset.name;
    const unlocked = isUnlocked(courseName);
    if (completed.has(courseName)) {
      el.classList.add('completed');
      el.classList.remove('unlocked');
    } else if (unlocked) {
      el.classList.add('unlocked');
    } else {
      el.classList.remove('unlocked');
    }
  });
}

function createGrid() {
  Object.keys(courses).forEach(course => {
    const div = document.createElement('div');
    div.classList.add('course');
    div.textContent = course;
    div.dataset.name = course;

    div.addEventListener('click', () => {
      if (!isUnlocked(course)) return;

      if (completed.has(course)) {
        completed.delete(course);
      } else {
        completed.add(course);
      }
      updateCourses();
    });

    grid.appendChild(div);
  });

  updateCourses();
}

createGrid();


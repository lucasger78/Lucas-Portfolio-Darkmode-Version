//Traducción de la página

// const flagsElement = document.getElementById("flags");

// const textsToChange = document.querySelectorAll("[data-section]");

// const changeLanguage = async language=>{
//     const requestJson = await fetch(`./languages/${language}.json`)
//     const texts = await requestJson.json(); 

//     for (const textToChange of textsToChange) {
//         const section = textToChange.dataset.section;
//         const value = textToChange.dataset.value;

//         textToChange.innerHTML = texts[section][value];
//     }
// }

// flagsElement.addEventListener("click", (e) =>{
//     changeLanguage(e.target.parentElement.dataset.language);
// });

// //Efecto de css hover activo según el idioma seleccionado 
// const flags = document.querySelectorAll(".flags-ar, .flags-br, .flags-gb");

// const selectFlag = (flag) => {
//   // Eliminar la clase "hovered" de todos los elementos
//   flags.forEach((flag) => flag.classList.remove("hovered"));
//   // Agregar la clase "hovered" al elemento seleccionado
//   flag.classList.add("hovered");

//   // Almacenar la selección de la bandera en el almacenamiento local del navegador
//   localStorage.setItem("selectedFlag", flag.dataset.language);
// };

// const loadFlag = () => {
//   // Obtener la bandera seleccionada almacenada en el almacenamiento local del navegador
//   const selectedFlag = localStorage.getItem("selectedFlag");

//   if (selectedFlag) {
//     // Buscar el elemento de bandera correspondiente a la selección almacenada
//     const flagElement = document.querySelector(`[data-language="${selectedFlag}"]`);
//     if (flagElement) {
//       flagElement.classList.add("hovered");
//     }
//   }
// };

// flags.forEach((flag) => {
//   flag.addEventListener("click", () => {
//     selectFlag(flag);
//   });
// });

// // Cargar la bandera al cargar la página
// loadFlag();
// const flagsElement = document.getElementById("flags");

// const textsToChange = document.querySelectorAll("[data-section]");

// const changeLanguage = async language=>{
//     const requestJson = await fetch(`./languages/${language}.json`)
//     const texts = await requestJson.json(); 

//     for (const textToChange of textsToChange) {
//         const section = textToChange.dataset.section;
//         const value = textToChange.dataset.value;

//         textToChange.innerHTML = texts[section][value];
//     }
// }

// flagsElement.addEventListener("click", (e) =>{
//     changeLanguage(e.target.parentElement.dataset.language);
// });

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }

  // Almacena el idioma seleccionado en el almacenamiento local del navegador
  localStorage.setItem("selectedLanguage", language);
};

const loadLanguage = () => {
  // Obtiene el idioma seleccionado almacenado en el almacenamiento local del navegador
  const selectedLanguage = localStorage.getItem("selectedLanguage");

  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  } else {
    // Establece un idioma predeterminado si no se ha seleccionado ninguno
    changeLanguage("es");
  }
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
  
});

// Carga el idioma al cargar la página
loadLanguage();

// // FLAGS

const flags = document.querySelectorAll(".flags-ar, .flags-br, .flags-gb");

const selectFlag = (flag) => {
  // Eliminar la clase "hovered" de todos los elementos
  flags.forEach((flag) => flag.classList.remove("hovered"));
  // Agregar la clase "hovered" al elemento seleccionado
  flag.classList.add("hovered");

  // Almacenar la selección de la bandera en el almacenamiento local del navegador
  localStorage.setItem("selectedFlag", flag.dataset.language);
};

const loadFlag = () => {
  // Obtener la bandera seleccionada almacenada en el almacenamiento local del navegador
  const selectedFlag = localStorage.getItem("selectedFlag");

  if (selectedFlag) {
    // Buscar el elemento de bandera correspondiente a la selección almacenada
    const flagElement = document.querySelector(`[data-language="${selectedFlag}"]`);
    if (flagElement) {
      flagElement.classList.add("hovered");
    }
  }
};

flags.forEach((flag) => {
  flag.addEventListener("click", () => {
    selectFlag(flag);
  });
});

// Cargar la bandera al cargar la página
loadFlag();



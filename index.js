import {agregarTarea} from "./assets/componentes/agregarTarea.js"
import { leerTareas } from "./assets/componentes/leerTareas.js"

const enviarForm = document.querySelector('form')

//Eventos
enviarForm.addEventListener('submit', agregarTarea)
leerTareas()
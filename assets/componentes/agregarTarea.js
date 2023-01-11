import {borrarTarea} from "./borrarTarea.js"
import {checkTarea} from "./checkTarea.js"
import elementoFecha from "./elementoFecha.js"

export const agregarTarea = (e) =>{
    e.preventDefault()
    const ul = document.querySelector('ul')
    const tarea = crearTarea(e)

    if(tarea == null){
        return
    }else{
        ul.appendChild(tarea)
    }
}

//Listado de tareas
const listaTareas = []

//Crear una nueva tarea
const crearTarea = () =>{
    const textoTarea = document.querySelector('.inputForm')
    const myDatetime = document.querySelector('.inputDatetime').value

    if(textoTarea.value.trim() === ''){
        Swal.fire({
        title: 'Atención!',
        text: 'No puede haber una tarea vacía',
        icon: 'info',
        width:350
        })

        textoTarea.value = ''
        textoTarea.focus()
        return null
    }

    //FECHA
    //ordena la fecha en el formato (dia-mes-año)
    // let dia = myDatetime.slice(8,10)
    // let mes = myDatetime.slice(5,7)
    // let año = myDatetime.slice(0,4)
    // let fecha = `${dia}-${mes}-${año}`

    let fecha = moment(myDatetime).format('DD/MM/YYYY')


    //localStorage
    const tareaObj = {
        valorTexto: textoTarea.value,
        valorFecha: fecha
    }

    listaTareas.push(tareaObj)
    localStorage.setItem('tareas',JSON.stringify(listaTareas))


    const newCard = document.createElement('li')
    newCard.classList.add('card')

    const newDiv = document.createElement('div')

    const newTask = document.createElement('span')
    newTask.classList.add('task')

    //asigna el string con la primer letra en mayuscula y el resto en minuscula
    newTask.textContent = textoTarea.value.charAt(0).toUpperCase() + textoTarea.value.slice(1).toLowerCase()

    newDiv.appendChild(checkTarea()) //crea el check y es agregado dentro del div
    newDiv.appendChild(newTask)
    newCard.appendChild(newDiv)
    newCard.appendChild(elementoFecha(fecha))
    newCard.appendChild(borrarTarea())

    textoTarea.value = ''
    textoTarea.focus()

    return newCard
}





//Forma corta de agregar tarea
// let agregarTarea = (e) =>{
//     e.preventDefault()
//     let textoTarea = document.querySelector('.inputForm')
//     const myCardsList = document.querySelector('.cardsList') //uls

//     //creo el nuevo li
//     const newCard = document.createElement('li') //li
//     newCard.className = 'card'

//     let liContent = `<div>
//                         <i class="far fa-check-square icon"></i>
//                         <span class="task">${textoTarea.value}</span>
//                     </div>
//                     <i class="fas fa-trash-alt trashIcon icon"></i>`

//     newCard.innerHTML = liContent //agrega al nuevo 'li' toda la estructura html
//     myCardsList.appendChild(newCard)
    
//     textoTarea.value = ''
// }
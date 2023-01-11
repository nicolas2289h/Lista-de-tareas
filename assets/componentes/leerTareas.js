export const leerTareas = () =>{
    const ul = document.querySelector('ul')
    const listaTareas = JSON.parse(localStorage.getItem('tareas')) || []
    console.log(listaTareas)

    listaTareas.forEach(item => {
       console.log(item)
    });
}
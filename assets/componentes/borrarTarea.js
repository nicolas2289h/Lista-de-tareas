export const borrarTarea = ()=>{
    const i = document.createElement('i')
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon')

    //agregar evento al nuevo elemento creado
    i.addEventListener('click',(e)=>{
        const li = e.target.parentNode //padre de este elemento en particular
  
        // let respuesta = confirm('Borrar definitivamente?')
        // if(respuesta){
        //     li.remove()
        // }  

        Swal.fire({
            title: 'Estás seguro?',
            text: "La tarea se borrará definitivamente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar',
            cancelButtonText: 'Cancelar',
            width: 300
          }).then((result) => {
            if (result.isConfirmed) {
              li.remove()
            }
          })
    })

    return i
}

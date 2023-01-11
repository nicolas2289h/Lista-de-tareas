//Se crea el 'i' mediante una funcion para poder agregar el evento a cada 'li' nuevo que sea creado
export const checkTarea = () =>{
    const i = document.createElement('i')
    //i.classList.add('far', 'fa-check-square', 'icon')
    i.setAttribute('class','far fa-check-square icon')

    i.addEventListener('click',(e) =>{
        const element = e.target
        element.classList.toggle('fas')
        element.classList.toggle('completeIcon')
    })

    return i
}

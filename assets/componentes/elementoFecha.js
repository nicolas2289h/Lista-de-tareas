export default (date) =>{
    const dateElement = document.createElement('span')
    dateElement.classList.add('dateCard')
    dateElement.textContent = date

    return dateElement
}
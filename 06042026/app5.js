const boton = document.querySelector('#botonID1');
const parrafo = document.querySelector('#parrafoID1');

boton.addEventListener('click', () => {
    parrafo.textContent = "Nuevo texto del parrafo"
    parrafo.style.color = '#000066';
    parrafo.style.fontSize = '20px';
    parrafo.style.textTransform = 'uppercase';
    parrafo.style.textAling = 'center';
    parrafo.style.backgroundColor = '#33ffcc';
    parrafo.style.padding = '20px';
    parrafo.style.bordeRadius = '10px';
    parrafo.style.border = '3px solid black';
    parrafo.style.width = '300px';
    parrafo.style.margin = '20px auto';
}) 
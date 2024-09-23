let main = document.querySelector('main');
let h1 = document.querySelector('h1');

main.addEventListener('click', () =>{
    const question = prompt('Ingresa una pregunta w...')
    const random = Math.floor(Math.random() * 8);
    const options = [
        'Ey',
        'Simon',
        'NOOOOOOO MI COMPA',
        'Preguntale al Santy',
        'A veces',
        'Eh que pedo que es esto',
        '✈️🏢🏢💥'
    ]

    h1.innerText = options[random];
})




// high order Functions
// Funciones de Orden Superior
// Son funciones que reciben funciones como 
// Parametros
const suma =(a,b)=> a + b;
const resta = (a,b)=> a-b;

const operation =(a,b,callback)=>{
    const resul = callback(a,b);
    console.log('El resultado es: ' + resul);
}

operation(12,5,suma);
operation(12,5, resta);
operation(12,5, (a, b) => a * b );

const cars = ['vocho', 'athos', 'pointer', 'tsuru', 'bmw'];

 cars.forEach(car => {
    console.log(car);
 });

let filtrados = cars.filter(car =>car === 'tsuru');
console.log(filtrados)

filtrados = cars.filter(car =>car.includes('o'));
console.log(filtrados);

filtrados = cars.filter(car =>car.startsWith('a'));
console.log(filtrados);

filtrados = cars.filter(car =>car.endsWith('u'));
console.log(filtrados);

filtrados = cars.filter(car =>car.length < 5);
console.log(filtrados);

filtrados = cars.filter(car =>car.includes('z'));
console.log(filtrados);

// Metodo Map

console.log('=====================================================')

const CARS  =  cars.map(car => car.toUpperCase());
console.log(cars);
console.log(CARS);

console.log('=====================================================')

const reves = cars.map(car =>{
    return car.split('').reverse().join('')
})

console.log(reves);

console.log('=====================================================')

function wrapping(gifts) {
  
       //return envueltos;
      return gifts.map(gift =>{
        let tapa= '*'.repeat(gift.length + 2);
        let g =  `${tapa}\n*${gift}*\n${tapa}`; 
        return g;
      })
    };

console.log('=====================================================');
const carrosEnvueltos = wrapping(cars);
carrosEnvueltos.forEach(car => console.log(car));

//reduce 
console.log('=====================================================');
const numbers = [1,2,3,4,5,6,7,8,9,10];
const sumatoria = numbers.reduce((a,b)=> a+b);

console.log(numbers);
console.log(sumatoria);
console.log('=====================================================');
const factorial = numbers.reduce((a,b) => a*b);
console.log(factorial);

//every regresa si todos cumplen con una condicion dada

console.log('=====================================================');
const ages = [23,14,17,19,18,22,27];
const olders = ages.every(age=> age>=18);
const youngers = ages.every(age => age < 18);

console.log(olders);
console.log(youngers);

//Some regresa verdadero con tan solo uno que cumpla la condicion
console.log('=====================================================');
const olders2 = ages.some(age=> age>=18);
const youngers2 = ages.some(age => age < 18);

console.log(olders2);
console.log(youngers2);

console.log('=====================================================');

//para copiar el elementos de un array se utiliza la funcion[...nombreDelArray]

let ejercicios = [1,2,3,4,5,6,7,8,9,10];
let pruebas = ejercicios.map(ejercicio => ejercicio*ejercicio );
console.log(pruebas);

pruebas = ejercicios.map(ejercicios => ejercicios * ejercicios * ejercicios);
console.log(pruebas);

pruebas = ejercicios.map(ejercicio => ejercicio /2);
console.log(pruebas);

pruebas = ejercicios.filter(ejercicio => ejercicio % 2 == 0);
console.log(pruebas);

pruebas = ejercicios.filter(ejercicio => ejercicio % 2 != 0);
console.log(pruebas);

pruebas = ejercicios.filter(ejercicio => ejercicio >3 && ejercicio<8);
console.log(pruebas);



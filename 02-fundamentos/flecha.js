// function sumar(a, b) {
//     return a + b;
// }

let sumar = (a, b) => a + b

// function saludar() {
//     return 'Hola mundo';
// }

// let saludar = () => 'hola!'

// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// let saludar = (nombre) => `Hola que tal ${nombre}`



// console.log(sumar(10, 15));
// console.log(saludar('cinthya'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wingston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - ${this.poder}`
    }
};

console.log(deadpool.getNombre());
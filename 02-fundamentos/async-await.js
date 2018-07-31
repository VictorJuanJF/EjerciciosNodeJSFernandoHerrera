/**
 * Async Await
 * 
 * 
 * 
 */

// let getNombre = async(nombre) => {

//     if (nombre == 'Victor') {
//         return 'Tu si eres Victor el billonario';
//     } else {
//         throw new Error(`Tu no eres Victor, eres ${nombre} `);
//     }
// };

let getNombre = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Victor');
        }, 3000);

    });
}

let saludo = async() => {

    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});
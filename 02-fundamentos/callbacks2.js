let empleados = [{
        id: 1,
        nombre: 'Victor'
    },
    {
        id: 2,
        nombre: 'Cinthya'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
]

let salarios = [{
            id: 1,
            salario: 1000
        },
        {
            id: 2,
            salario: 2000
        }
    ]
    //INTENTO FALLIDO DE TAREA
    // let getSalario = (empleadoID, callback) => {
    //     var nombreEmpleado = getEmpleado(empleadoID, (err, empleado) => {
    //         if (err) {
    //             return console.log(err);
    //         } else {
    //             return empleado.nombre;
    //         }
    //     });
    //     let salarioEmpleado = salarios.find(salario => salario.id == empleadoID);
    //     callback(`El empleado ${nombreEmpleado} tiene un salario de S/. ${salarioEmpleado}`);
    // }

// getSalario(1, (callback) => {
//     console.log(callback);
// })

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id == empleado.id);
    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}






let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id == id);
    //console.log(empleadoDB);
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);

    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
});
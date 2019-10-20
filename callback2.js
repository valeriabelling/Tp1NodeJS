let empleados = [{
    id: 1,
    nombre: 'Valeria'
}, {
    id: 2,
    nombre: 'Juana'
}, {
    id: 3,
    nombre: 'Celeste'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${id} `)
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (id, callback) => {
    let salarioDB = salarios.find(salario => salario.id === id)
    if (!salarioDB) {
        callback(`No existe un salario con el id ${id} `)
    } else {
        callback(null, salarioDB);
    }
}

getEmpleado(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

getSalario(2, (err, salario) => {

    if (err) {
        return console.log(err);
    }
    console.log(salario);

})
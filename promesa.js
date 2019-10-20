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
    salario: 3000
}, {
    id: 2,
    salario: 4000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id == empleado.id)

        if (!salarioDB) {
            reject(`No existe el salario con el id ${empleado.id}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })
}

getEmpleado(2).then(empleado => {
    getSalario(empleado).then(salario => {
        console.log('El salario de', salario.nombre, 'es de $', salario.salario);
    }, (error) => {
        console.log(error);
    })
}, (error) => {
    console.log(error);
})
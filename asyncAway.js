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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${id}`)
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        throw new Error(`No existe el salario con el ID ${id}`)
    } else {
        return salarioDB;
    }
}

getEmpleado(1).then(empleado => {
    getSalario(empleado).then(salario => {
        console.log('El salario de', empleado.nombre, 'es de $', salario.salario);
    }, (error) => {
        console.log(error);
    })
}, (error) => {
    console.log(error);
})
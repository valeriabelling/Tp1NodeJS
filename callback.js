let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Valeria",
        id
    }

    if (id == 20) {
        callback(`El usuario con id ${id}, no existe en la Base de datos`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(20, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);

})

/*
Si modifico el id en el if por otro número que no sea 20,
devuelve el nombre del usuario. Dado que ya esta definido 
el id en el metodo getUsuarioById.
*/
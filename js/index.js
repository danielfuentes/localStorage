//Capturar los elementos
let formulario = document.querySelector('form');
let usuarios = JSON.parse(localStorage.getItem('usuarios'));
//console.log(usuarios);

//Debemos controlar el formulario
formulario.addEventListener('submit', function(evento){
    console.log(evento);
    //Evita que se ejecute el trabajo de envio por defecto
    evento.preventDefault();
    //Capturar los elemetos del Formulario
    let nombreInput = document.getElementById('nombre');
    let apellidoInput = document.getElementById('apellido');
    let correoInput = document.getElementById('correo');
    let direccionInput = document.getElementById('direccion');
    console.log(nombreInput.value);
    if(usuarios === null){
        usuarios= [];
    }
    usuarios.push({
        nombre : nombreInput.value,
        apellido: apellidoInput.value,
        correo : correoInput.value,
        direccion : direccionInput.value
    })
    console.log(usuarios);
    //Limpiar la visual en el navegador
    nombreInput.value= '';
    apellidoInput.value='';
    correoInput.value='';
    direccion.value = '';
    //Limpiar los contenidos de los datos capturados
    nombreInput.innerHTML = '';
    apellidoInput.innerHTML='';
    correoInput.innerHTML = '';
    direccionInput.innerHTML = '';
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Los datos se guardaron exitosamente!!!');
    formulario.nombre.focus();

})

//Controlando el mostrar por pantalla los datos almacenados en el localStorage
//Capturo los elementos
let tabla = document.getElementById('tabla');
let botonImprimir = document.getElementById('botonImprimir');
let cuerpoTabla = document.getElementById('cuerpoTabla');
//Controlo el evento - Cuando el usuario le da clic sobre el boton de "Mostrar los usuarios registrados"
botonImprimir.addEventListener('click', function(evento){
    //Evito que se recargue la página
    evento.preventDefault()
    //Aquí limpio la visual de la tabla - Es decir que se limpie la pantalla de los usuarios previamente listados
    cuerpoTabla.innerHTML = '';  
    if(usuarios === null){
        alert('No hay usuarios registrados');
    }else{
        //Activo la visualización de la tabla
        tabla.style.display = 'block';
        //Muestro los datos que estan guardados en el localStorage
        usuarios.forEach(usuario => {
            cuerpoTabla.innerHTML += `
                <tr>
                    <td>${usuario.nombre} </td>
                    <td>${usuario.apellido} </td>
                    <td>${usuario.correo} </td>
                    <td>${usuario.direccion} </td>
                </tr>
            `
        });
    }

});


//Aquí controlo el borrar todos los registros registrados y guardados en el localStorage
let botonBorrar = document.getElementById('botonBorrar');
botonBorrar.addEventListener('click', function(){
    //Aquí verifico si en el localStorage hay o no hay datos guardados
    if(usuarios === null){
        alert('No hay usuarios para borrar');
    }else{
        //Aquí borro los usuarios que estaban guardados o persistidos en el localStorage
        localStorage.removeItem('usuarios');
        alert('Registros borrados satisfactoriamente !!!');
        //Seteo el display de la tabla para que no se vea el listado
        tabla.style.display = 'none';
        //Esto lo que hace es recargar la página
        location.reload();
    }
})
//Ejemplo: Archivo en formato JSON - Objeto Literal
let productos =[
    {
        codigo: 1,
        nombre: 'Lavadora',
        precio: 200000
    },
    {
        codigo: 2,
        nombre: 'Nevera',
        precio: 300000
    },
    {
        codigo: 3,
        nombre: 'Cocina',
        precio: 400000
    }
];

console.log(productos);
let archivoJSON = JSON.stringify(productos);
console.log(archivoJSON);

localStorage.setItem('productos',archivoJSON);

let misDatosLocalStore = localStorage.getItem('productos');
console.log(misDatosLocalStore);

let localStorageArray = JSON.parse(misDatosLocalStore);
console.log(localStorageArray);

let listadoProductos = document.getElementById('listadoProductos');
localStorageArray.forEach(producto => {
    listadoProductos.innerHTML+= `<li class="text-white">${producto.nombre} </li>`;
});
//Borrar los datos
localStorage.removeItem('productos')
alert('Todos los datos fueron borrados');

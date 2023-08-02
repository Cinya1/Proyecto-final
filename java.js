//elementos de html
let $caja = document.getElementById('caja')
let $mujerB = document.getElementById('mujer')
//variable
let todosPersonajes =[];

//mostrar personajes en html
function mostrar (array){
    for(let i=0; i<array.length; i++){
        $caja.innerHTML +=` <div id="caja">
        <img src="${array[i].image}">
        <h2>Nombre: ${array[i].name} </h2>
        <p>genero: ${array[i].gender}  </p>
        <p>especie: ${array[i].species} </p>
        
    </div>`
    }

}

//fetch
fetch('https://rickandmortyapi.com/api/character')
.then((data)=>{
    return data.jason();
})
.then((data)=>{
    todosPersonajes = data.results;
    mostrar (todosPersonajes)
    
});


function mostrarMujeres (){
   let resultado = todosPersonajes.filter((personajes)=> {
        return personajes.gender === 'Female';
    })
    mostrar(resultado);
}
function todos (){
    //mostrar en el html todos
}

//eventos
$mujerB.addEventListener('click', mostrarMujeres)
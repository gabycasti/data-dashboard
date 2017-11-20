Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


/*funcionalidad de pestañas*/

/*variables globales*/
var main= document.getElementsByTagName('main');
var lkgen= document.getElementById('gen');
var lkover= document.getElementById('over');
var lkstud= document.getElementById('stud');
var lkteach= document.getElementById('teachers');
var overContainer= document.getElementById('overview');
var studentsContainer= document.getElementById('students');
var jedisContainer= document.getElementById('jedis');

/*evento al clickear el link de estudiantes*/
lkstud.addEventListener('click', function(){
	overContainer.classList.add('ocultar');
	jedisContainer.classList.add('ocultar');
	studentsContainer.classList.remove('ocultar')
})

evento al click en link de jedis*/
lkteach.addEventListener('click', function(){
	overContainer.classList.add('ocultar');
	studentsContainer.classList.add('ocultar');
	jedisContainer.classList.remove('ocultar');
})

/*evento al click de link overview*/
lkover.addEventListener('click', function(){
	studentsContainer.classList.add('ocultar');
	jedisContainer.classList.add('ocultar');
	overContainer.classList.remove('ocultar');
})


/*Overview SCL16-2*/

var deserters = document.getElementById("deserters");

/*Recorro  a las alumnas dentro de la base de datos,
para saber cuantas han desertado*/

for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	console.log(data.SCL['2016-2'].students[i].active);
	var parrafo = document.createElement('p');
	var nodoParrafo = document.createTextNode('La estudiante número ' + [i + 1] + ' está: ' + data.SCL['2016-2'].students[i].active);
	parrafo.appendChild(nodoParrafo);
	deserters.appendChild(parrafo);

	
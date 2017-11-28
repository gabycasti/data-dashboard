/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

//for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
//	console.log(data.SCL['2016-2'].students[i].name);
//	container.innerHTML += '<p>La estudiante número ' + [i+1] + ' es: ' + data.SCL['2016-2'].students[i].name + '</p>';
//}

//Total estudiantes por sede y por generación
function procesarDatos()
{

	//Buscar que sede esta seleccionada
    // Buscar periodo seleccionado

    var totalinscritas = 0;
    var totaldesertoras = 0;
    var porcentajedesertoras = 0;

//Calculando el total de inscritas en santiago periodo 2015I
    if (document.getElementById('santiago').checked == true) 
    {
    	if (document.getElementById('santiago2016II').checked == true)
    	{

    		totalinscritas = data.SCL['2016-2'].students.length;
        	 /////////////////////////////////////////////////////////////////
         	//Calculando el total de desertoras
    		for (var i =0; i < totalinscritas; i++){
    			if (data.SCL['2016-2'].students[i].active == false){
    				totaldesertoras = totaldesertoras + 1;
    			}
    		}

    		//calcular el porcentaje de desertoras con una regla de tres

    		porcentajedesertoras = (totaldesertoras * 100 )/ totalinscritas;
    	

    	     //Mostrar los datos en pantalla
    	     document.getElementById('alumnas_inscritas_valor').innerHTML = totalinscritas;
    	     document.getElementById('alumnas_inscritas_porcentaje').innerHTML = number_format(porcentajedesertoras,0,'','')+'%';

    	   ////////////////////////////////////////////////////////////////////

           ///////////////////////////////////////////////////////////////////
    	   //PROMEDIO DE TECH Y HSE DE TODOS LOS SPRINT
		       var totaltech = 0;
		       var totalhse = 0;
		       var totaltechstudent = 0;
		       var totalhsestudent = 0;


		        for (var i =0; i < totalinscritas; i++)
		        {
		        	  if(data.SCL['2016-2'].students[i].sprints.length > 0)
		        	  {
		        	  	//Inicializo en 0 porque cuando voy al otro estudiante no guarde registro del estudiante anterior
		    			totaltechstudent = 0;
		    			totalhsestudent = 0;
		    			totaltechstudentAcum=0;
		    			totalhsestudentAcum=0;

		    			//console.log (totaltechstudentAcum)
		                //Calculando el totla de porcentajes en puntajes tech y hse
		    			for (j=0; j<data.SCL['2016-2'].students[i].sprints.length; j++)
		    			{
		                     totaltechstudent= data.SCL['2016-2'].students[i].sprints[j].score.tech;
		                      totaltechstudentAcum += (totaltechstudent*100)/1800;
		                      //console.log (totaltechstudentAcum)

		                     totalhsestudent = data.SCL['2016-2'].students[i].sprints[j].score.hse;
		                      totalhsestudentAcum += (totalhsestudent*100)/1200;
		                      //console.log (totaltechstudentAcum+" "+totalhsestudentAcum)
		                  	 
		                  }
		                 totaltechstudentAcum = (totaltechstudentAcum / 4);
		                 totalhsestudentAcum =   (totalhsestudentAcum / 4);

		                 if (totaltechstudentAcum >= 70 &&  totalhsestudentAcum >= 70)
		                 {

		                  	totaltech++;

		                 }

		                   document.getElementById('promedio_estudiante').innerHTML = totaltech;
		                  

		    		}
		    	}	


		    //DETERMINANDO NPS

		    var promoters = 0;
		    var passive = 0;
		    var detractors= 0;
		    var nps = 0;


	      
	        for (var j =0; j < data.SCL['2016-2'].ratings.length; j++)
	        {
	        	   promoters+= data.SCL['2016-2'].ratings[j].nps.promoters;
	        	   detractors+= data.SCL['2016-2'].ratings[j].nps.detractors;
	        	   passive+= data.SCL['2016-2'].ratings[j].nps.passive;

	    	}
	    	       nps = (promoters - detractors) / 4;
                   promoters = promoters / 4;
                   passive = passive / 4;
                   detractors = detractors / 4;

          
	    	  //console.log("nps "+nps+" "+promoters+" "+detractors)
               document.getElementById('nps_valor').innerHTML = number_format(nps,0,'','')+" <br>Promedio NPS ";
               document.getElementById('nps_porcentaje').innerHTML = "Promoters "+number_format(promoters,0,'','')+'% Passive '+number_format(passive,0,'','')+'% Detractors '+number_format(detractors,0,'','')+'%<br>';

	    	//DETERMINANDO La cantidad y el porcentaje que representa el total de estudiantes que superan 
	    	//la meta de puntos técnicos en promedio y por sprint.	

            var  cantidadstudentsprint1 = 0;
            var  cantidadstudentsprint2 = 0;
            var  cantidadstudentsprint3 = 0;
            var  cantidadstudentsprint4 = 0;
            var  porcentajestudentsupera1 = 0;
            var  porcentajestudentsupera2 = 0;
            var  porcentajestudentsupera3 = 0;
            var  porcentajestudentsupera4 = 0;

             
           for (var i =0; i < totalinscritas; i++)
             {

	             if(data.SCL['2016-2'].students[i].sprints.length > 0)
	        	  {
		        	  	// temp es una variable temporal para saber si el promedio es mayor a 70
		                //sprint 1
		                temp = 0;
		                temp =  data.SCL['2016-2'].students[i].sprints[0].score.tech;
		                temp = (temp*100)/1800;
		                if (temp >=70){
		                   porcentajestudentsupera1 += temp;
		                   cantidadstudentsprint1++;
		               } 
		                //sprint 2
		                temp = 0;
		                temp =  data.SCL['2016-2'].students[i].sprints[1].score.tech;
		                temp = (temp*100)/1800;

		                if (temp >=70){
		                   porcentajestudentsupera2 += temp;
		                   cantidadstudentsprint2++;
		               } 

		               //sprint 3
		                temp = 0;
		                temp =  data.SCL['2016-2'].students[i].sprints[2].score.tech;
		                temp = (temp*100)/1800;

		                if (temp >=70){
		                   porcentajestudentsupera3 += temp;
		                   cantidadstudentsprint3++;
		               }     
		               //alert(porcentajestudentsupera3)
		                 //sprint 4
		                temp = 0;
		                temp =  data.SCL['2016-2'].students[i].sprints[3].score.tech;
		                temp = (temp*100)/1800;
		                if (temp >=70){
		                   porcentajestudentsupera4 += temp;
		                   cantidadstudentsprint4++;
		               }     

                }

            }

            //Calcular los promedios acumulados
            if (porcentajestudentsupera1 > 0)
            	porcentajestudentsupera1 = porcentajestudentsupera1 / cantidadstudentsprint1;
            if (porcentajestudentsupera2 > 0)
            	porcentajestudentsupera2 = porcentajestudentsupera2 / cantidadstudentsprint2;
			if (porcentajestudentsupera3 > 0)
				porcentajestudentsupera3 = porcentajestudentsupera3 / cantidadstudentsprint3;
			if (porcentajestudentsupera4 > 0)
				porcentajestudentsupera4 = porcentajestudentsupera4 / cantidadstudentsprint4;

			//console.log (porcentajestudentsupera1+" "+porcentajestudentsupera2+" "+porcentajestudentsupera3+" "+porcentajestudentsupera4)
			//console.log (cantidadstudentsprint1+" "+cantidadstudentsprint2+" "+cantidadstudentsprint3+" "+cantidadstudentsprint4)

                 
             document.getElementById('prom_tech').innerHTML = "Sprint1 "+number_format(cantidadstudentsprint1,0,'','')+'% Sprint2 '+number_format(cantidadstudentsprint2,0,'','')+'% Sprint3 '+number_format(cantidadstudentsprint3,0,'','')+'Sprint4 '+number_format(cantidadstudentsprint4,0,'','')+'%<br>';

         // DETERMINANDO HSE


         //DETERMINANDO La cantidad y el porcentaje que representa el total de estudiantes que superan 
	    	//la meta de puntos HSE en promedio y por sprint.	

            var  cantidadstudentsprint1 = 0;
            var  cantidadstudentsprint2 = 0;
            var  cantidadstudentsprint3 = 0;
            var  cantidadstudentsprint4 = 0;
            var  porcentajestudentsupera1 = 0;
            var  porcentajestudentsupera2 = 0;
            var  porcentajestudentsupera3 = 0;
            var  porcentajestudentsupera4 = 0;

             
           for (var i =0; i < totalinscritas; i++)
             {

	             if(data.SCL['2016-2'].students[i].sprints.length > 0)
	        	  {
		        	  	// temp es una variable temporal para saber si el promedio es mayor a 70
		                //sprint 1
		                temp = 0;
		                temp =  data.SCL['2016-2'].students[i].sprints[0].score.hse;
		                temp = (temp*100)/1200;
		                if (temp >=70){
		                   porcentajestudentsupera1 += temp;
		                   cantidadstudentsprint1++;
		               } 
		                //sprint 2
		                temp = 0;
		                temp =  data.SCL['2016-2'].students[i].sprints[1].score.hse;
		                temp = (temp*100)/1200;

		                if (temp >=70){
		                   porcentajestudentsupera2 += temp;
		                   cantidadstudentsprint2++;
		               } 

		               //sprint 3
		                temp = 0;
		                temp =  data.SCL['2016-2'].students[i].sprints[2].score.hse;
		                temp = (temp*100)/1200;

		                if (temp >=70){
		                   porcentajestudentsupera3 += temp;
		                   cantidadstudentsprint3++;
		               }     
		               //alert(porcentajestudentsupera3)
		                 //sprint 4
		                temp = 0;
		                temp =  data.SCL['2016-2'].students[i].sprints[3].score.hse;
		                temp = (temp*100)/1200;
		                if (temp >=70){
		                   porcentajestudentsupera4 += temp;
		                   cantidadstudentsprint4++;
		               }     

                }

            }

            //Calcular los promedios acumulados
            if (porcentajestudentsupera1 > 0)
            	porcentajestudentsupera1 = porcentajestudentsupera1 / cantidadstudentsprint1;
            if (porcentajestudentsupera2 > 0)
            	porcentajestudentsupera2 = porcentajestudentsupera2 / cantidadstudentsprint2;
			if (porcentajestudentsupera3 > 0)
				porcentajestudentsupera3 = porcentajestudentsupera3 / cantidadstudentsprint3;
			if (porcentajestudentsupera4 > 0)
				porcentajestudentsupera4 = porcentajestudentsupera4 / cantidadstudentsprint4;

			//console.log (porcentajestudentsupera1+" "+porcentajestudentsupera2+" "+porcentajestudentsupera3+" "+porcentajestudentsupera4)
			//console.log (cantidadstudentsprint1+" "+cantidadstudentsprint2+" "+cantidadstudentsprint3+" "+cantidadstudentsprint4)

           document.getElementById('prom_hse').innerHTML = "Sprint1 "+number_format(porcentajestudentsupera1,0,'','')+'% Sprint2 '+number_format(porcentajestudentsupera2,0,'','')+'% Sprint3'+number_format(porcentajestudentsupera3,0,'','')+'Sprint4 '+number_format(porcentajestudentsupera4,0,'','')+'%<br>';
 
               
	       //DETERMINANDO PORCENTAJE DE ESTUDIANTES SATISFECHAS
	       var estiduantesAcum = 0;
	      
	        for (var i =0; i < data.SCL['2016-2'].ratings.length; i++)
	        {
	        	  estiduantesAcum += data.SCL['2016-2'].ratings[i].student.cumple + data.SCL['2016-2'].ratings[i].student.supera;
		  
	    	}

	    	estiduantesAcum = estiduantesAcum / 4;
	    	
            document.getElementById('estudiantesSatis').innerHTML = number_format(estiduantesAcum,0,'','');
            estiduantesAcum;
	    	//DETERMINANDO LA PUNTUACIÓN PROMEDIO DE LAS PROFESORAS

	    	var promteacher = 0;

	    	for (var i =0; i < data.SCL['2016-2'].ratings.length; i++)
	        {
	        	  promteacher+= data.SCL['2016-2'].ratings[i].teacher;
		  
	    	}

	    	promteacher = promteacher / 4;
	    	
	        
            document.getElementById('promedio_teacher').innerHTML = number_format(promteacher,0,'','');

	        //DETERMINANDO LA PUNTUACIÓN PROMEDIO DE LAS JEDIS
	        
	        var promjedi = 0;

	    	for (var i =0; i < data.SCL['2016-2'].ratings.length; i++)
	        {
	        	  promjedi+= data.SCL['2016-2'].ratings[i].jedi;
		  
	    	}

	    	promjedi = promjedi / 4;
    	
             document.getElementById('prom_jedi').innerHTML = number_format(promjedi,0,'','');
    			 
    	   ///////////////////////////////////////////////////////////////////



    	   ///////////////////////////////////////////////////////////////////




    	   ///////////////////////////////////////////////////////////////////




    		

    	} 
    }
}





///////////////////////////////////////////////////////////////////////////////////
// Código Students 

var input = document.querySelectorAll("label.check input");
if(input !== null) {
  [].forEach.call(input, function(el) {
    if(el.checked) {
      el.parentNode.classList.add('c_on');
    }
    el.addEventListener("click", function(event) {
      event.preventDefault();
      el.parentNode.classList.toggle('c_on');
    }, false);
  });
}
console.log(data);
var studentFinder = document.getElementById('studentFinder');
studentFinder.addEventListener('click', function() {
    alert('touch me')
})

// Código students agregados por majo que no se pudieron subir por problemas con github


var input = document.querySelectorAll("label.check input");
if(input !== null) {
  [].forEach.call(input, function(el) {
    if(el.checked) {
      el.parentNode.classList.add('c_on');
    }
    el.addEventListener("click", function(event) {
      event.preventDefault();
      el.parentNode.classList.toggle('c_on');
    }, false);
  });
}
console.log(data);
var studentFinder = document.getElementById('studentFinder');
studentFinder.addEventListener('click', function() {
    alert('touch me')
})

//Función para formatear el resultado del porcentaje
function number_format( number, decimals, dec_point, thousands_sep ) {
 
    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? "," : dec_point;
    var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}
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
    	if (document.getElementById('santiago2016II').checked == true){
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

    			console.log (totaltechstudentAcum)

    			for (j=0; j<data.SCL['2016-2'].students[i].sprints.length; j++)
    			{
                     totaltechstudent= data.SCL['2016-2'].students[i].sprints[j].score.tech;
                      totaltechstudentAcum += (totaltechstudent*100)/1800;
                      //console.log (totaltechstudentAcum)

                     totalhsestudent = data.SCL['2016-2'].students[i].sprints[j].score.hse;
                      totalhsestudentAcum += (totalhsestudent*100)/1200;
                      console.log (totaltechstudentAcum+" "+totalhsestudentAcum)
                  	 
                  }
                 totaltechstudentAcum = (totaltechstudentAcum / 4);
                 totalhsestudentAcum =   (totalhsestudentAcum / 4);

                 if (totaltechstudentAcum >= 70 &&  totalhsestudentAcum >= 70)
                 {

                  	totaltech++;

                 }


                   document.getElementById('promedio_estudiante').innerHTML = totaltech;
                  

    		}
    			//console.log(data.SCL['2016-2'].students[i].sprints[0].score.tech)
    	}

    				
    			 
    		}




    	   ///////////////////////////////////////////////////////////////////



    	   ///////////////////////////////////////////////////////////////////




    	   ///////////////////////////////////////////////////////////////////




    	} else if (document.getElementById('santiago2015II').checked == true){
    		totalinscritas = data.SCL['2015-2'].students.length;
         
         //Calculando el total de desertoras
    		for (var i =0; i < totalinscritas; i++){
    			if (data.SCL['2015-2'].students[i].active == false){
    				totaldesertoras = totaldesertoras + 1;
    			}
    		}

    		//calcular el porcentaje de desertoras con una regla de tres

    		porcentajedesertoras = (totaldesertoras * 100 )/ totalinscritas;
    	

    	   //Mostrar los datos en pantalla
    	   document.getElementById('alumnas_inscritas_valor').innerHTML = totalinscritas;
    	   document.getElementById('alumnas_inscritas_porcentaje').innerHTML = number_format(porcentajedesertoras,0,'','')+'%';



    	} 
    }





//Función para formatear el resultado del porcentaje
function number_format( number, decimals, dec_point, thousands_sep ) {
 
    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? "," : dec_point;
    var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}
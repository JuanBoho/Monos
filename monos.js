/*MENÚ*/
var a=0;
function dropdown(){
    a=a+1;

    if(a%2==1){
        document.getElementById("nav-respo").style.display = "block";
    }
    else{
        document.getElementById("nav-respo").style.display = "none";
    }
     
}

/*FORMULARIO*/

function valida() { 
	
   	if (document.formu.nombre.value.length==0){ 
      	 alert("Por favor complete el campo Nombre") 
      	 document.formu.nombre.focus() 
      	 return false; 
   	} 
	
   	if (document.formu.apellido.value==""){ 
      	 alert("Por favor complete el campo Apellido") 
      	 document.formu.apellido.focus() 
      	 return false; 
   	} 
	
	var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	valor = document.getElementById("mail").value;
	if( !(ck_email.test(valor)) ) {
 	 alert("Por favor ingrese un mail válido")
 	 return false;
	}
	
   	alert("¡Gracias por contactarse!"); 
   	document.formu.submit(); 

}

/*TRANSICIONES*/

window.sr = ScrollReveal();
sr.reveal('.monos', {
    duration: 4000,
    delay: 2000,
    origin:'bottom'
  });
/*sr.reveal('.actores', {
    duration: 2000,
    origin:'top',
    distance: '200px'
}); */ 
sr.reveal('.contenido-info', {
  duration: 2000,
  origin:'top',
  distance:'300px'
});

sr.reveal('.titulo-js', {
  duration: 2000,
  origin:'top',
  distance:'100px'
});

sr.reveal('#icono-der', {
  duration: 3000,
  origin:'right',
  distance:'300px'
});

sr.reveal('#icono-izq', {
    duration: 3000,
    origin:'left',
    distance:'300px'
  });

sr.reveal('#cosmos', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('#cairo', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});

start()
function start(){
const rango = document.getElementById('rangeInput');
const chexboxMayusculas = document.getElementById('checkboxMayusculas')
const chexboxMinusculas = document.getElementById('checkboxMinusculas')
const chexboxNumeros = document.getElementById('checkboxNumeros')
const chexboxLestrasExtras = document.getElementById('checkboxMiTxt')
const chexboxletrasEspeciales = document.getElementById('checkboxLestrasEspeciales');
const contentGenradorItem = document.getElementById('itemPassword');
const buttonCopiar = document.getElementById('buttonCopiar');
const aplicadordecambios = document.getElementById('aplicarCambios');
var mayusculas = false;
var minusculas = false;
var numeros = false;
var letrasEspeciales = false;


function actulizaraRango(){
	  let valorRango = rango.value;
	    rangeP.textContent = valorRango;
	    return valorRango;
}

rango.addEventListener('input', actulizaraRango);

actulizaraRango();


chexboxMayusculas.addEventListener('change', function(){
	if (chexboxMayusculas.checked){
		    mayusculasP.innerHTML = ` Listo | <P style ="color:grey; display:inline-block; font-size :12px;">MAYUSCULAS : ABC</P>`;
		    mayusculas = true;
	}else{
		mayusculasP.textContent = "Mayusculas";
		mayusculas = false;
	}
})
chexboxMinusculas.addEventListener('change', function(){
	if (chexboxMinusculas.checked){
		   minusculasP.innerHTML = ` Listo | <P style ="color:grey; display:inline-block; font-size :12px;">minusculas : abc</P>`;
		   minusculas = true;
	}else{
		minusculasP.textContent = "Minusculas";
		minusculas = false;

	}
})
chexboxletrasEspeciales.addEventListener('change', function(){
	if (chexboxletrasEspeciales.checked){
		    letrasExtrasP.innerHTML = ` Listo | <P style ="color:grey; display:inline-block; font-size :12px;">signos : $%!</P>`;
		    letrasEspeciales = true;
	}else{
		letrasExtrasP.textContent = "Signos";
		letrasEspeciales = false;
	}
})
chexboxNumeros.addEventListener('change', function(){
	if (chexboxNumeros.checked){
		    numerosP.innerHTML = ` Listo | <P style ="color:grey; display:inline-block; font-size :12px;">Numeros : 1234</P>`;
		    numeros = true;
	}else{
		numerosP.textContent = "Numeros";
		numeros = false;
	}
})



buttonCopiar.addEventListener('click', () => {
	  const copiar = document.createRange();
	  copiar.selectNode(contentGenradorItem)
	  window.getSelection().removeAllRanges();
	  window.getSelection().addRange(copiar);
	  try { 
   const exito = document.execCommand('copy');
   const mensaje = exito ? ' contenido copiado ' : 'la copia no fue exitosa';
   buttonCopiar.innerHTML = mensaje + ' <i class="fa-solid fa-thumbs-up fa-fade"></i>';
   buttonCopiar.style.background = 'royalblue'
   setTimeout(()=> { buttonCopiar.innerHTML = `copiar  <i class="fa-sharp fa-solid fa-copy"></i>`;
   buttonCopiar.style.background = 'black'
}, 1000)
	  }catch(err){
	  	console.error('error al copiar el contenido : ', err);
	  }
	  window.getSelection().removeAllRanges();
})

function numberAleatorio(){
	let num = [1,2,3,4,5,6,7,8,9,0];
    var numeros = Math.floor(Math.random() * num.length);
    var datoAleatorio = num[numeros]; 
    return datoAleatorio;
}

function letraAleatorias(){
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letra = Math.floor(Math.random() * letras.length);
    var LetraAleatoria = letras[letra]; 
    return LetraAleatoria;
}

function letraAleatoriasMayus(){
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letraMayus = Math.floor(Math.random() * letras.length);
    var LetraAleatoriaMayus = letras[letraMayus]; 
    return LetraAleatoriaMayus;
}
function letraAleatoriasEspeciales(){
	let signos =  [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*',
        '+', ',', '-', '.', '/', ':', ';', '<', '=', '>',
        '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
    ];
    var signosR = Math.floor(Math.random() * signos.length);
    var signosAleatorios = signos[signosR]; 
    return signosAleatorios;
}
aplicadordecambios.addEventListener('click', function() {
 	buttonCopiar.style.display = "none";
 if (mayusculas === false && minusculas === false && numeros === false && letrasEspeciales === false  ) {
pAlert.textContent = "Selecione los terminos que desea en la configuracion";
 configID.style.border = "solid 2px grey"
 contentValue.style.opacity = "0.2";
 } else{
    contentValue.style.opacity = "20";
    pAlert.textContent = "";
 	configID.style.border = "none";
	contentGenradorItem.style.display = "block";
 	resultado.innerHTML= `Espere <i class="fa-solid fa-spinner fa-spin"></i>`;
generator()
 }
});


function generator(){
	buttonCopiar.style.display = "block"; 
	const resultado = document.getElementById('resultado')
	 	resultado.textContent = "";
	 	var txtExtraBucle = 0;
     for(i = 0; i < rango.value; i++){
 txtExtraBucle++
      console.log(resultado.childElementCount);

  if (numeros === true){
 let pNew = document.createElement('B');
 pNew.innerHTML = numberAleatorio();
     pNew.classList.add("pNew");
 resultado.appendChild(pNew);
  }
  

  if (minusculas === true){
  	 let pNew1 = document.createElement('B');
  	  pNew1.innerHTML = letraAleatorias(); 
  	   pNew1.classList.add("pNew1");
      resultado.appendChild(pNew1)
  }
if (mayusculas === true) {
 let pNew2 = document.createElement('B');
      pNew2.innerHTML = letraAleatoriasMayus().toUpperCase(); 
           pNew2.classList.add("pNew2");
           resultado.appendChild(pNew2);
}    
 if (letrasEspeciales === true) {
 let pNew3 = document.createElement('B');
      pNew3.innerHTML = letraAleatoriasEspeciales().toUpperCase(); 
           pNew3.classList.add("pNew3");
           resultado.appendChild(pNew3);
} 



 }
  if (resultado.childElementCount > rango.value){
       console.log("se ha pasado el limite de caracteres a peticion del usario");
       let repeticiondefor = resultado.childElementCount - rango.value;
       console.log(`Los elementos exedidos son ${repeticiondefor}`);
       console.log("borrando lo excesos de caracteres");
       for(i=0; i < repeticiondefor; i++){
        let elementosExedidos = resultado.firstElementChild;
      resultado.removeChild(elementosExedidos)
        console.log("listo")
        console.log(`ahora los elementos estan correctamente : ${resultado.childElementCount}`)
       }
      }
  
}
}
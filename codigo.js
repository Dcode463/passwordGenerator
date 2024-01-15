
const rango = document.getElementById('rangeInput');
const chexboxMayusculas = document.getElementById('checkboxMayusculas')
const chexboxMinusculas = document.getElementById('checkboxMinusculas')
const chexboxNumeros = document.getElementById('checkboxNumeros')
const chexboxLestrasExtras = document.getElementById('checkboxMiTxt')
const chexboxletrasEspeciales = document.getElementById('checkboxLestrasEspeciales');
let contentGenradorItem = document.getElementById('itemPassword');
let contentGenradorItemTwo = document.getElementById('itemPassword')
const buttonCopiar = document.getElementById('buttonCopiar');
const aplicadordecambios = document.getElementById('aplicarCambios');
const buttonRegenerar = document.getElementById('regenerar')
const containerButton = document.getElementById('prompButtons')
const buttonOpenContainerKey = document.getElementById('buttonMenuKey');
const resultado = document.getElementById('resultado')
var mayusculas = true;
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

const copiar = (element) => 
	{ 
	  const copiar = document.createRange();
	  copiar.selectNode(element)
	  window.getSelection().removeAllRanges();
	  window.getSelection().addRange(copiar);
	  try { 
   const exito = document.execCommand('copy');
   const mensaje = exito ? '  copiado ' : 'la copia no fue exitosa';
   buttonCopiar.innerHTML = mensaje + ' <i class="fa-solid fa-thumbs-up fa-fade"></i>';
   buttonCopiar.style.background = 'royalblue'
   setTimeout(()=> { buttonCopiar.innerHTML = `copiar  <i class="fa-sharp fa-solid fa-copy"></i>`;
   buttonCopiar.style.background = 'black'
}, 1000)
	  }catch(err){
	  	console.error('error al copiar el contenido : ', err);
	  }
	  window.getSelection().removeAllRanges();
}


buttonCopiar.addEventListener('click', () => copiar(document.getElementById('itemPassword')))

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

const validor = () => {
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
}
validor()
function generator(){
	buttonCopiar.style.display = "block"; 
	containerButton.style.opacity = '1'
	 	resultado.textContent = "";
	 	var txtExtraBucle = 0;
     for(i = 0; i < rango.value; i++){
 txtExtraBucle++

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
       let repeticiondefor = resultado.childElementCount - rango.value;
       for(i=0; i < repeticiondefor; i++){
        let elementosExedidos = resultado.firstElementChild;
      resultado.removeChild(elementosExedidos)
       }
      }
  
}

////////////////////////////update >>> 7/1/2024
const objectDocument = {
	containerKeys : {
		element : document.getElementById('containerKeys'),
		open : () => objectDocument.containerKeys.element.style.display = 'block',
		close : () => objectDocument.containerKeys.element.style.display = 'none'
	},
	sobrePonerBody : {
		element : document.getElementById('sobrePoner'),
		open : () => objectDocument.sobrePonerBody.element.style.display = 'block',
		close : () => objectDocument.sobrePonerBody.element.style.display = 'none'
	},
 //////////////// buttons
		 buttoncloseContainerKey :  document.getElementById('closeContainerKey'),
		 buttonSaveKey : document.getElementById('guardar'),
	//// container saveKey
	containerSaveKey : {
	  element : document.getElementById('containerSave'),
	  open : () => objectDocument.containerSaveKey.element.style.display = 'block',
	  close : () => objectDocument.containerSaveKey.element.style.display = 'none'
	},
inputPasswordS : document.getElementById('PasswordOfSave'),
inputCommitS : document.getElementById('commitOfSave'),
noKeysContainerKey : {
	element : document.getElementById('noKeys'),
	open : () => objectDocument.noKeysContainerKey.element.style.display = 'flex',
	close : () => objectDocument.noKeysContainerKey.element.style.display = 'none'
}, 
containerPushPassword : {
 element : document.getElementById('pushContainer'),
 add : child => objectDocument.containerPushPassword.element.appendChild(child)
},
containerView : {
	element : document.getElementById('containerView'),
	open : () => objectDocument.containerView.element.style.display = 'flex',
	close : () => objectDocument.containerView.element.style.display = 'none'
},
alertCommit : {
	element : document.getElementById('alertCommit'),
	open : () => objectDocument.alertCommit.element.style.display = 'flex',
	close : () => objectDocument.alertCommit.element.style.display = 'none'
},
textContainer : document.getElementById('commentALERT'),
objectFunctionCommitAlert :  (funcion,alerta) => {
  if(funcion) {
objectDocument.errorSound.play()
	objectDocument.alertCommit.element.style.opacity = '1'
objectDocument.alertCommit.open(); setTimeout(()=> {objectDocument.alertCommit.element.style.opacity = '0'},2500);
objectDocument.textContainer.textContent = alerta
}
},
errorSound : document.getElementById('errorSound'),
passwordView : document.getElementById('passwordView'),
exitContainerView : document.getElementById('exitContainerView'),
copiarView : document.getElementById('copiarView'),
/// buttons of saveKey
buttonCancelSave : document.getElementById('saveCancel'),
buttonSave : document.getElementById('saveConfirm')
}
const openDataBase = nameDataBase => new Promise ((resolve,reject) => { 
	const dataBase = indexedDB.open(nameDataBase); 
	dataBase.onupgradeneeded = () => {
		const result = dataBase.result;
		const requestCreatorTable = result.createObjectStore('memori',{autoIncrement : true})
		requestCreatorTable.createIndex('commit','commit', {unique : false});
		requestCreatorTable.createIndex('password', 'password', {unique : false});
		requestCreatorTable.createIndex('fecha', 'fecha', {unique : false});
		resolve(true)
	}
	dataBase.onsuccess = () => resolve (false);
   dataBase.onerror = () => resolve(20);
	})
const pushDataBase = (password, commit, date) => new Promise ((resolve,reject) => {
	let dt = indexedDB.open('memori');
	dt.onsuccess = () => {
		 let db = dt.result;
		 let trasaction = db.transaction('memori','readwrite');
		 let objectStore = trasaction.objectStore('memori');
		 let dataSend = {commit : commit, password : password, fecha : date};
		 objectStore.add(dataSend);
		 trasaction.oncomplete = () => resolve(true);
		 trasaction.onerror = () => reject(true);
	}
  })
const requestPasswords = () => new Promise ((resolve,reject) => {
	let db = indexedDB.open('memori');
	  db.onsuccess = () => {
         let rs = db.result;
		 let trasaction = rs.transaction('memori', 'readwrite');
		 let objectStore = trasaction.objectStore('memori')
		 let response = objectStore.getAll();
		 trasaction.oncomplete = (e) => resolve(response.result)
		 trasaction.onerror = (e) => reject(e)
}
})
const whatMyKeyid = nameKey => 
{
return console.log('sss')
}
const openContainerKey = async () => {
	objectDocument.sobrePonerBody.open(); objectDocument.containerKeys.open();
	let openDataBaseRequest = await openDataBase('memori')
   let resquestObjectKeys = await requestPasswords();
if(resquestObjectKeys.length === 0) { objectDocument.noKeysContainerKey.open(); objectDocument.containerKeys.element.classList.replace('two','one')}
else { objectDocument.noKeysContainerKey.close(); objectDocument.containerKeys.element.classList.replace('one','two')
for(let i = 0; i < resquestObjectKeys.length; i++){
	let fragmento = document.createDocumentFragment();
    let divContainer = document.createElement('div'); divContainer.classList.add ('push');
	let commit = document.createElement('p'); commit.classList.add ('commitPush'); commit.textContent = resquestObjectKeys[i].commit;
	let fecha = document.createElement('p'); fecha.classList.add ('fechaPush'); fecha.textContent =  resquestObjectKeys[i].fecha;
let whatKey = await whatMyKeyid(resquestObjectKeys[i].commit)
divContainer.onclick = () => openViewData({password : resquestObjectKeys[i].password})

// divContainer.appendChild(fecha)
divContainer.appendChild(commit); 
fragmento.appendChild(divContainer)
objectDocument.containerPushPassword.add(fragmento)
}
}
}
const closeContainerKey = () => {objectDocument.containerPushPassword.element.innerHTML = '';objectDocument.sobrePonerBody.close(); objectDocument.containerKeys.close();}
const saveFunction = () => { objectDocument.sobrePonerBody.open(); objectDocument.containerSaveKey.open();
   objectDocument.inputPasswordS.value = resultado.textContent;
}
const closeSaveFunction = () => { objectDocument.sobrePonerBody.close(); objectDocument.containerSaveKey.close()
	objectDocument.inputPasswordS.value = ''
}
const validorIdCommit  = async name => {
let password = await requestPasswords()
let validor  = password.some(e => e.commit === name)
if(validor) return false
else if (validor === false) return true
}
const saveKeyFunction = async () => {

let validorCommitId = await validorIdCommit(objectDocument.inputCommitS.value)
	if(objectDocument.inputCommitS.value.length != 0 && objectDocument.inputCommitS.value != ' '  && validorCommitId)
		{
			objectDocument.buttonSave.innerHTML  = 'Guardando <i class="fa-solid fa-database fa-fade"></i>'
			let date = new Date();
			let fecha =  date.getDate() + "-"  + date.getMonth() + 1 + "-" + (date.getDate() < 10 ? "0" : "") + date.getFullYear()
			let validorDataBase = await openDataBase('memori');
			let pushData = await pushDataBase(objectDocument.inputPasswordS.value,objectDocument.inputCommitS.value,fecha)
			if(pushData) {objectDocument.buttonSave.innerHTML  = 'Contraseña guardada <i class="fa-solid fa-check"></i>'; setTimeout(()=> {
				objectDocument.buttonSave.innerHTML = 'Guardar';
			   objectDocument.sobrePonerBody.close(); objectDocument.containerSaveKey.close();
			},1000)}
			}else if (validorCommitId) objectDocument.objectFunctionCommitAlert(true, 'Ingrese Un comentario para registralo')
			else objectDocument.objectFunctionCommitAlert(true, 'Hmm, Ya tienes registrado ese comentario')
}
let matrizID;
const openViewData = (data) => {
	objectDocument.containerKeys.close();
  objectDocument.containerView.open();
  objectDocument.passwordView.textContent = data.password;
  matrizID = data.id
}
const closeViewData = () => 
{
	objectDocument.containerKeys.open();
	objectDocument.containerView.close();
}
//////////////////////////////////////////////////// Events

buttonRegenerar.onclick = () => {buttonRegenerar.innerHTML = `Regenerar <i class="fa-solid fa-rotate fa-spin"></i>`; validor(); setTimeout(()=> {buttonRegenerar.innerHTML = `Regenerar <i class="fa-solid fa-rotate"></i></i>`},100)}

aplicadordecambios.onclick = () => validor()

buttonOpenContainerKey.onclick = () => openContainerKey()

objectDocument.buttoncloseContainerKey.onclick = () => closeContainerKey ()

objectDocument.buttonSaveKey.onclick = () => saveFunction ()

objectDocument.buttonCancelSave.onclick = () => closeSaveFunction ()

objectDocument.inputPasswordS.onchange = () => resultado.textContent = objectDocument.inputPasswordS.value;

objectDocument.buttonSave.onclick = () => saveKeyFunction()

objectDocument.exitContainerView.onclick = () => closeViewData();

objectDocument.copiarView.onclick = () => {contentGenradorItemTwo = objectDocument.passwordView; copiar(document.getElementById('passwordView'))}
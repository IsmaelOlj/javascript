if (window.location.href === "https://alejandrodietista.com/product/consulta-reserva/"){
preparacionPagina();
var contenedorTexto;
var fecha;
var contadorCambios;
var options;
var desactivados = [];
var flipflop = 0;
var intervalId = window.setInterval(actualizador, 500);
	/*
var intervalId2 = window.setInterval(guardaInfo, 20);
*/
}

if(document.body.classList.contains("post-in-category-blo-g")){
	document.body.style.backgroundColor = "white";
}

function guardaInfo(){
	var wrap = document.getElementsByClassName("mvvwb_wrap")[0];
	if(wrap.classList.contains("mvvwb_loading")){
		console.log("xD")
		flipflop = 1;
	}
	if (!wrap.classList.contains("mvvwb_loading") && flipflop == 1){
			setTimeout(function () {		flipflop = 0;
		desactivados = getDisabled();
		console.log(desactivados);     
    }, 20);

	}
	
}

function preparacionPagina(){
	var consideraciones = document.getElementsByClassName("woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab")[0].children[1];
	var horasiniciales = [];
	document.getElementsByClassName("woocommerce-product-gallery")[0].remove();
	document.getElementsByClassName("woocommerce-Price-amount")[1].remove();
	document.getElementsByClassName("related products")[0].remove();
	document.getElementsByClassName("owp-product-nav-wrap clr")[0].remove();
	document.getElementsByClassName("woocommerce-tabs wc-tabs-wrapper")[0].remove();
	if(document.body.contains(document.getElementsByClassName("button wc-forward")[0])){
		if(document.getElementsByClassName("button wc-forward")[0].textContent = "Ver carrito"){
			window.location.replace("https://alejandrodietista.com/checkout/");
		}
	}
	creaOpciones(horasiniciales);
	
	
	var titulo = document.createElement("h2");
	titulo.innerText = "TENGA EN CUENTA QUE LOS HORARIOS A RESERVAR SE ENCUENTRAN EN SU TOTALIDAD DEFINIDOS EN HORA ESPAÑOLA PENINSULAR"; 
	titulo.style.textAlign = "center";
	document.getElementsByClassName("site-main clr")[0].insertBefore(titulo,document.getElementsByClassName("site-main clr")[0].firstChild);
	titulo.appendChild(consideraciones);

	setTimeout(function () {     
    }, 200);
	
	
	
}

function actualizador(){
	var hijos = Array.from(document.getElementsByClassName("dayContainer")[0].children);
	var elegido = document.getElementsByClassName("flatpickr-day selected")[0];
	var indice = hijos.indexOf(elegido);
	var dia = indice % 7;
	
	var horaslunespm = ["5:00 pm","7:00 pm","8:00 pm"];
	var horaslunes24 = ["17:00","19:00","20:00"];
	var valoreslunes = [1020,1140,1200];
	
	var horasmartespm = ["4:00 pm", "6:00 pm"];
	var horasmartes24 = ["16:00","18:00"];
	var valoresmartes
	
	var horasmiercolespm = ["10:00 am", "11:00 am", "1:00 pm"];
	var horasmiercoles24 = ["10:00","11:00","13:00"];
	var valoresmiercoles
	
	var horasjuevespm = ["5:00 pm","6:00 pm"];
	var horasjueves24 = ["17:00","18:00"];
	var valoresjueves
	
	var disabled
	
	
	switch (dia){
		case 0: 			
			var select = creaOpciones(horaslunes24);
			var disabled = getDisabled();			
			contenedor(horaslunespm,horaslunes24);
			
			break;
		case 1:
			var select = creaOpciones(horasmartes24);
			var disabled = getDisabled();						
			contenedor(horasmartespm,horasmartes24);			
			
			break;
		case 2:
						
			var select = creaOpciones(horasmiercoles24);
			var disabled = getDisabled();									
			contenedor(horasmiercolespm,horasmiercoles24);
			
			break;
		case 3:
			
			var select = creaOpciones(horasjueves24);	
			var disabled = getDisabled();
			contenedor(horasjuevespm,horasjueves24);
			break;
			
		default:
			break;						
	}
	
}

function creaOpciones(horas24){
	
			var select = document.getElementsByName("mvvwb_timeStart")[0];
			var hijos = Array.from(select.children);
			

			for (i = 0; i<hijos.length;i++){
				if (!horas24.includes(hijos[i].innerText)) {
					hijos[i].hidden = true;
					hijos[i].disabled = true;
					}
				else{
					hijos[i].hidden = false;

					hijos[i].disabled = false;
					

					}

			}

			return select;
}

function getDisabled(){
	var select =  document.getElementsByName("mvvwb_timeStart")[0];
	var disabled = [];
	var hijos = Array.from(select.children);
	
	for (i=0;i<hijos.length;i++){
		if (hijos[i].disabled){
			disabled[i] = hijos[i].value;
		}
		else{
			disabled[i] = -1;
		}
	}
	return disabled;
}

function contenedor(horaslunespm,horaslunes24){

			if (contenedorTexto == null){
				contenedorTexto = document.createElement('div');
				/*document.getElementsByClassName("mvvwb_summary")[0].insertBefore(contenedorTexto,document.getElementsByClassName("mvvwb_booking_date")[0]);*/
				document.getElementsByClassName("mvvwb_time_start")[0].appendChild(contenedorTexto);
			}
	
	
			if(document.body.contains(document.getElementsByClassName("mvvwb_message")[0])){
				mensaje_error = document.getElementsByClassName("mvvwb_message")[0].innerText;
				contenedorTexto.innerText = " "
				document.getElementsByClassName("mvvwb_message")[0].style.color = "black";
			}
	
	if(document.body.contains(document.getElementsByClassName("mvvwb_booking_date")[0])){
			fecha = document.getElementsByClassName("mvvwb_booking_date")[0].innerText;
			document.getElementsByClassName("mvvwb_booking_date")[0].style.color = "#d0d0d0";


				var fechasplit = fecha.split(" ");
				var fechaelegida = fechasplit[3] +" "+ fechasplit[4];
				if (horaslunespm.includes(fechaelegida)){
				contenedorTexto.innerText = "Ha elegido la fecha: " + fechasplit[0] + " " + fechasplit[1]+ " " + fechasplit[2]+ " a las: " + horaslunes24[horaslunespm.indexOf(fechaelegida)] + " / " + fechaelegida;
				document.getElementsByClassName("single_add_to_cart_button button alt")[0].disabled = false;
				}
				else{
					contenedorTexto.innerText = "Por favor escoja una hora valida";
					document.getElementsByClassName("single_add_to_cart_button button alt")[0].disabled = true;
				}
			
	}
	
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
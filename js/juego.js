var x = $(document);
x.ready(main);
var score = 0;
var vidas;
var imagen_vida = "";
var vida_x = 230;
var vida_y = 10;
var ancho_vida = 60;
var altura_vida = 15;
var num_vidas = 3;
var vidastotales = 6;
//pelota
var pelota;
var lado = 20;
var x = 100;
var y = 130;
var vx = 0;
var vy = vidastotales;

//contantes barras

var ancho_t = 200;
var altura_t = 12;

//veloidad
var vel = vidastotales;

//barra 1
var barra1;
var b1_x= 10;
var b1_y = 80 ;
//barra2
var barra2;
var b2_x= 100;
var b2_y = 160;

//barra3
var barra3;
var b3_x= 200;
var b3_y = 240;

//barra4
var barra4;
var b4_x= 50;
var b4_y = 320;

//barra5
var barra5;
var b5_x = 150;
var b5_y = 400;

//barra5
var barra6;
var b6_x = 250;
var b6_y = 480;

//controles



function main(){
	canvas = document.getElementById('mi_canvas');
	ctx = canvas.getContext('2d');

	var derecha = $("#derecha").click(mover_derecha);
	var izquierda = $("#izquierda").click(mover_izquierda);
	
	
	
	//barras
	

	
	setInterval(inicio,100);
}

function inicio(){
	$("#score").html(score);
	ctx.clearRect(0,0,canvas.width, canvas.height);
	//ctx.fillRect(b1_x,b1_y,ancho_t,altura_t);
	
	//vidas
	vidas = new Image();


	pelota = new Image();
	barra1 = new Image();
	barra2 = new Image();
	barra3 = new Image();
	barra4 = new Image();
	barra5 = new Image();
	barra6 = new Image();

	pelota.onload = function(){
		ctx.beginPath();
		ctx.drawImage(pelota,x,y,lado,lado);
		ctx.drawImage(barra1,b1_x,b1_y,ancho_t,altura_t);
	ctx.drawImage(barra2,b2_x,b2_y,ancho_t,altura_t);
		ctx.drawImage(barra3,b3_x,b3_y,ancho_t,altura_t);
		ctx.drawImage(barra4,b4_x,b4_y,ancho_t,altura_t);
		ctx.drawImage(barra5,b5_x,b5_y,ancho_t,altura_t);
		ctx.drawImage(barra6,b6_x,b6_y,ancho_t,altura_t);

		//vidas
		ctx.drawImage(vidas,vida_x,vida_y,ancho_vida,altura_vida);

	}
	pelota.src = "img/bola.png";
	barra1.src = "img/barra.png";
	barra2.src = "img/barra.png";
	barra3.src = "img/barra.png";
	barra4.src = "img/barra.png";
	barra5.src = "img/barra.png";
	barra6.src = "img/barra.png";
	switch(num_vidas){
		case 3: imagen_vida = "img/vida3.png";
		break;
		case 2: imagen_vida = "img/vida2.png";
		break;
		case 1: imagen_vida = "img/vida1.png"
		break;
	}
	vidas.src = imagen_vida;

	moverBarra1();
	moverBarra2();
	moverBarra3();
	moverBarra4();
	moverBarra5();
	moverBarra6();

	moverBola();
	
	
}

function mover_derecha(){
	vx =10;
}

function mover_izquierda(){
	vx = -10;
}

function moverBarra1(){
	if(b1_y - vel >= 480){
		vel = -5;
	}
	if(b1_y < -10){
		b1_y = 480;
			//xb1 = ra.nextInt(500);
			b1_x = Math.floor(Math.random() *200);
	}
		b1_y = b1_y - vel;
}

function moverBarra2(){
	if(b2_y - vel >= 480){
		vel = -5;
	}
	if(b2_y < -10){
		b2_y = 480;
			//xb1 = ra.nextInt(500);
			b2_x = Math.floor(Math.random() *200);
	}
		b2_y = b2_y - vel;
}

function moverBarra3(){
	if(b3_y - vel >= 480){
		vel = -5;
	}
	if(b3_y < -10){
		b3_y = 480;
			//xb1 = ra.nextInt(500);
			b3_x = Math.floor(Math.random() *200);
	}
		b3_y = b3_y - vel;
}

function moverBarra4(){
	if(b4_y - vel >= 480){
		vel = -5;
	}
	if(b4_y < -10){
		b4_y = 480;
			//xb1 = ra.nextInt(500);
			b4_x = Math.floor(Math.random() *200);
	}
		b4_y = b4_y - vel;
}

function moverBarra5(){
	if(b5_y - vel >= 480){
		vel = -5;
	}
	if(b5_y < -10){
		b5_y = 480;
			//xb1 = ra.nextInt(500);
			b5_x = Math.floor(Math.random() *200);
	}
		b5_y = b5_y - vel;
}

function moverBarra6(){
	if(b6_y - vel >= 480){
		vel = -5;
	}
	if(b6_y < -10){
		b6_y = 480;
			//xb1 = ra.nextInt(500);
			b6_x = Math.floor(Math.random() *200);
	}
		b6_y = b6_y - vel;
}


function moverBola(){
	if(x + vx > 0  && x + vx < canvas.width - lado ){
		x = x + vx;
	}

	if(y < 320){
		vy = 10;
	}

	if(y < 0 || y > 430){
		num_vidas--;
		y = 130;
	}else{
		score++;
		
		

	}
	if(num_vidas == 0){
		
		localStorage.setItem('score',score);
		location.href="final.html";
		//$('#mostrar_el_score').html(score);

	}
	
	
	//colision barra 1
	if(colision(x,y,lado,lado,b1_x,b1_y,ancho_t,altura_t)){
		vy = -6;
	}

	//colision barra 2
	if(colision(x,y,lado,lado,b2_x,b2_y,ancho_t,altura_t)){
		vy = -6;
	}

	//colision barra 3
	if(colision(x,y,lado,lado,b3_x,b3_y,ancho_t,altura_t)){
		vy = -6;
	}

	//colision barra 4
	if(colision(x,y,lado,lado,b4_x,b4_y,ancho_t,altura_t)){
		vy = -6;
	}

	//colision barra 5
	if(colision(x,y,lado,lado,b5_x,b5_y,ancho_t,altura_t)){
		vy = -6;
	}
	if(colision(x,y,lado,lado,b6_x,b6_y,ancho_t,altura_t)){
		vy = -6;
	}
	

	y = y + vy;
}

function colision(x1,y1,lado,lado1,x2,y2,ancho2,alto2){
	var choque = false;
	/*if(x1 - lado >= x2 && x1 <= x2 + ancho2){
		if(y1 -lado >= y2 && y1 <= y2 + alto2){
			choque = true;
		}
	}*/
	if(x1 > x2 && x1 < x2 + ancho2){
		if(y1 + lado > y2 && y1 < y2 + alto2){
			choque = true;
		}
	}
	
	
	return choque;
}

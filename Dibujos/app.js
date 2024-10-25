const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
/**
 * fillRect(x, y, width, height)
 * strokeRect(x, y, width, height)
 * arc(x, y,  radio, ini, fin, sentidohorario)
 */

// ctx.strokeRect(0, 0, 200, 200);
// ctx.fillRect(20, 20, 160, 160);
 
// ctx.fillStyle = 'orange';
// ctx.beginPath();
// ctx.arc(100, 100, 60, 0, Math.PI *2, true);
// ctx.fill();

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(80, 90);
// ctx.lineTo(130, 90);
// ctx.lineTo(105, 130);
// ctx.fill();


// ctx.fillStyle = 'black';
// ctx.beginPath();
// ctx.arc( 300, 200, 50, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.fillStyle = 'yellow';
// ctx.fillRect(270, 180, 20, 5);
// ctx.fillRect(310, 180, 20, 5);


// ctx.beginPath();
// ctx.arc( 280, 190, 5, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc( 320, 190, 5, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc( 300, 200, 30, 0, Math.PI, false);
// ctx.fill();

// ctx.beginPath();//Redondo el cuadrado
// ctx.roundRect(100, 100, 50, 20 ,5)
// ctx.fill();

// ctx.beginPath();//como hoja 
// ctx.roundRect(280, 135, 50, 20 ,[0,20,0,20]);
// ctx.fill();
// ctx.stroke();


// Dibujar la cabeza
ctx.arc(150, 100, 50, Math.PI, 0, false); // Cabeza del fantasma

//  cuerpo 
ctx.lineTo(200, 180); // Cuerpo izquierdo
ctx.quadraticCurveTo(175, 210, 150, 180); // Primera curva inferior
ctx.quadraticCurveTo(125, 210, 100, 180); // Segunda curva inferior
ctx.lineTo(100, 150); // Cuerpo derecho

// Dibujar los brazos (alas de fantasma)
ctx.moveTo(100, 150); 
ctx.quadraticCurveTo(70, 120, 100, 100); // Brazo izquierdo
ctx.moveTo(200, 150);
ctx.quadraticCurveTo(230, 120, 200, 100); // Brazo derecho

// Terminar el dibujo
ctx.closePath();
ctx.fillStyle = "white"; // Rellenar 
ctx.fill();
ctx.strokeStyle = "black"; // Contorno 
ctx.stroke();

// los ojos del fantasma
ctx.beginPath();
ctx.arc(135, 90, 10, 0, Math.PI * 2, true); // Ojo izquierdo
ctx.arc(165, 90, 10, 0, Math.PI * 2, true); // Ojo derecho
ctx.fillStyle = "black";
ctx.fill();

//  la boca del fantasma
ctx.beginPath();
ctx.moveTo(140, 110); 
ctx.lineTo(160, 110); 
ctx.lineTo(150, 120);
ctx.closePath();
ctx.fill();

// Cuerpo de la calabaza
ctx.fillStyle = 'orange';

// Segmento central
ctx.beginPath();
ctx.arc(120, 350, 60, 0, Math.PI * 2, true); // Círculo central de la calabaza
ctx.fill();

// Segmento izquierdo
ctx.beginPath();
ctx.arc(90, 350, 50, 0, Math.PI * 2, true); // Segmento izquierdo
ctx.fill();

// Segmento derecho
ctx.beginPath();
ctx.arc(150, 350, 50, 0, Math.PI * 2, true); // Segmento derecho
ctx.fill();

// Ojos de la calabaza
ctx.beginPath();
ctx.arc(100, 340, 10, 0, Math.PI * 2, true); // Ojo izquierdo
ctx.arc(140, 340, 10, 0, Math.PI * 2, true); // Ojo derecho
ctx.fillStyle = "black";
ctx.fill();

// Hoja de la calabaza
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.roundRect(110, 290, 20, 20, [0, 20, 0, 20]); // Forma de hoja
ctx.fill();
ctx.stroke();

// Nariz de la calabaza
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(140, 360);
ctx.lineTo(100, 360);
ctx.lineTo(120, 380);
ctx.fill();

// Configuración del contorno de la calabaza
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

// Dibujar cuerpo de la araña
ctx.beginPath();
ctx.arc(300, 280, 50, 0, Math.PI * 2, true); // Cuerpo redondeado
ctx.fill();

// los ojos de la araña  
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(280, 260, 15, 0, Math.PI * 2, true); // Ojo izquierdo
ctx.arc(320, 260, 15, 0, Math.PI * 2, true); // Ojo derecho
ctx.fill();

// Pupilas  de la araña
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(280, 260, 7, 0, Math.PI * 2, true); // Pupila izquierda
ctx.arc(320, 260, 7, 0, Math.PI * 2, true); // Pupila derecha
ctx.fill();

// sonrisa de la araña 
ctx.beginPath();
ctx.arc(300, 290, 20, 0, Math.PI, false); // Sonrisa
ctx.stroke();

//Boca de la araña 
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(300, 295, 7, 0, Math.PI * 2, true); // Pupila izquierda
ctx.fill();

//  fantasma
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(110, 60);
ctx.lineTo(190, 60);
ctx.lineTo(150, 0);
ctx.fill(); // Triángulo para la parte delantera

ctx.fillStyle = 'purple';
ctx.fillRect(110, 50, 80, 10); // Ala del sombrero

// hebilla del sombrero
ctx.fillStyle = 'yellow';
ctx.fillRect(142, 50, 20, 10); // Rectángulo para la hebilla


//ctx.strokeStyle = 'black';
ctx.lineWidth = 4;

// Pata izquierda superior
ctx.beginPath();
ctx.moveTo(260, 260); // Punto inicial más cercano al cuerpo
ctx.lineTo(220, 230); // Primera articulación
ctx.lineTo(180, 260); // Extremo de la pata
ctx.stroke();

// Pata izquierda media-superior
ctx.beginPath();
ctx.moveTo(260, 280);
ctx.lineTo(220, 270);
ctx.lineTo(180, 290);
ctx.stroke();

// Pata izquierda media-inferior
ctx.beginPath();
ctx.moveTo(260, 300);
ctx.lineTo(220, 310);
ctx.lineTo(180, 350);
ctx.stroke();

// Pata izquierda inferior
ctx.beginPath();
ctx.moveTo(270, 310);  // Punto inicial más cercano al cuerpo
ctx.lineTo(250, 330);  // Primera articulación
ctx.lineTo(230, 370);  // Extremo de la pata
ctx.stroke();

// Patas de la araña derecha

// Pata derecha superior
ctx.beginPath();
ctx.moveTo(340, 260);
ctx.lineTo(380, 230);
ctx.lineTo(420, 260);
ctx.stroke();

// Pata derecha media-superior
ctx.beginPath();
ctx.moveTo(340, 280);
ctx.lineTo(380, 270);
ctx.lineTo(420, 290);
ctx.stroke();

// Pata derecha media-inferior
ctx.beginPath();
ctx.moveTo(340, 300);
ctx.lineTo(380, 310);
ctx.lineTo(420, 350);
ctx.stroke();

// Pata derecha inferior
ctx.beginPath();
ctx.moveTo(330, 310);  // Punto inicial más cercano al cuerpo
ctx.lineTo(355, 330);  // Primera articulación
ctx.lineTo(370, 370);  // Extremo de la pata
ctx.stroke();



ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(300, 240);
ctx.lineTo(215, 120);
ctx.stroke();




















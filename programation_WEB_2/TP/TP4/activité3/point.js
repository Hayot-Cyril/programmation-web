/* 
	Act 3
*/

//Variables globales
var point = new Object();
point.life = 100;
point.etat = "";
point.x = 20;
point.y = 30;
var j=0;

// A compléter..
/* Initialiser la position du point */
document.querySelector(".point").style.left=point.x+"%";
document.querySelector(".point").style.bottom=point.y+"%";
console.log("largeur fenetre:"+window.innerWidth+"px")
console.log("hauteur fenetre:"+window.innerWidth+"px")

/* Initialiser la position du feu pour palier au probleme de taille fenetre (l'emplacement du feu n'est calculer qu'une
 fois si la taille de la fenettre est modifié pendant l'execution les colisions point-feu seront faussées) */
var lFeu = Math.round(window.innerWidth*30/100+80);
var rFeu =lFeu+105;
var lFeu = Math.round(lFeu*100/window.innerWidth);
var rFeu =Math.round(rFeu*100/window.innerWidth);
console.log("position x feu ="+lFeu+"%");
console.log("position x+largeur feu "+rFeu+"%");

var start=0;

//Fonctions
function move(evt) {
	console.log(evt.key);
	
	switch (evt.keyCode){
		case 113:
			console.log('left');
			// A compléter..
			/* Déplacer le point */
			if((point.x<71 && point.y>29) ||((point.x>70 && point.y<40)))
				point.x=point.x-1;
			console.log(point.x);
			console.log(document.querySelector(".point").className);
			/* Mettre à jour la position du point */
			document.querySelector(".point").style.left=point.x+"%";
			checkPosition();
			break;
		case 100 :
			console.log('right');
			// A compléter..
			/* Déplacer le point */
				point.x=point.x+1;
			console.log(point.x);
			console.log(document.querySelector(".point").className);
			/* Mettre à jour la position du point */
			document.querySelector(".point").style.left=point.x+"%";
			checkPosition();
			break;
		case 122:
			if(point.x<71){e=30}
			if(point.x>70){e=10}
			console.log('jump');
			if( point.y == e){
				console.log('up');
				jump();
				checkPosition();
		
					break;
			}

		
}

}

function checkPosition() {
	// A compléter..
	/* Verifier la position */
	/* Changer d'etat class .fire ou .water */
	/* Perdre de la vie */
	printJSON()
	if(point.x<lFeu || point.x>rFeu){
		document.querySelector(".point").className=("point");
		loseLife();
	}
	if(point.x>lFeu-1 && point.x<rFeu+1){
		document.querySelector(".point").className=("point fire");
		loseLife();
	}
	if(point.x>69 && point.y<29){
		document.querySelector(".point").className=("point water");
		loseLife();
	}gavite()
	
	
	
}

function gavite() {
	// A compléter.. USAGE OBLIGATOIRE DU TRY-CATCH
	/* Garder le point est au sol */
	
	if(point.y==50){
		a = setInterval(function(){
			console.log("tombe");
			point.y -= 1;
			document.querySelector(".point").style.bottom = point.y + "%";
			checkPosition();
			if(point.y==30){clearInterval(a); a=null;
			}
	}, 25);
	
}
}

var etat=0;
function loseLife() {
	// A compléter..
	if(document.querySelector(".point").className=="point fire" && etat==0){
		etat=1;
		a = setInterval(function(){
			point.life -= 1;
			document.getElementById("life-stat").style.width = point.life*2 + "px";
			if(document.querySelector(".point").className==("point")){clearInterval(a);  a=null; etat=0;}
	}, 500);
	}
	
	/* Perdre de la vie toute les 1s dans l'eau */
	if(document.querySelector(".point").className=="point water" && etat==0){
		etat=1;
		a = setInterval(function(){
			point.life -= 1;
			document.getElementById("life-stat").style.width = point.life*2 + "px";
			if(document.querySelector(".point").className==("point")){clearInterval(a);  a=null; etat=0;}
	}, 1000);
	}
}

function printJSON() {
	console.log(point);
}

/* ALLER PLUS LOIN */
var isJumping = 0;

function jump() {
  if (isJumping == 0) {
    isJumping = 1;
	a = setInterval(function(){
			point.y += 1;
			document.querySelector(".point").style.bottom = point.y + "%";
			if(point.y==50){clearInterval(a);  a=null;}
	}, 25);	
}
     isJumping = false;
  }



window.focus();
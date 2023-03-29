/*
JS | Activité 2
*/

document.querySelector('#jeu').style.visibility = 'hidden';

var j1 = new Object();
var j2 = new Object();

var current_player = 1;

j1.ins = false;
j2.ins = false;

//Rempli le plateau de pions
function init_plateau() {
	var plateau = document.querySelector('#plateau');
	/* Remplir le plateau */
	for (var i = 0; i < 49; i++) {
		
 		plateau.innerHTML += '<div class="pion" id='+i+" onclick=\"touch(id)\"></div>" ;

	}
	document.querySelector('#jeu').style.visibility = 'visible';
}


//Fontion d'inscription
function ins(player) {

	// Completer pour vérifier l'inscription
	if (player==1) {
		j1.ins = true;
		var x = document.getElementsByName('j1');
		x = x[0];
		
document.getElementById('j1-name').innerHTML = x.value;
		x.disabled = true;
	
	}
	else{
		j2.ins = true;
		var x = document.getElementsByName('j2');
		x = x[0];

		document.getElementById('j2-name').innerHTML = x.value;
		x.disabled = true;
	}

	if (j1.ins && j2.ins) {

		// Retirer le panneau d'inscription
		var ins = document.getElementById('ins');
		
            ins.parentNode.removeChild(ins);

		//Initialise le plateau
		init_plateau();

		//lien avec les logo
		j1.logo = document.querySelector('.fas.fa-user.j1');
		j2.logo = document.querySelector('.fas.fa-user.j2');

		//Instruction de jeu
		
            document.querySelector('#player-name').innerHTML = document.getElementById('j1-name').innerHTML;
	
		//ne joue pas pour le moment
		j2.logo.classList.toggle("fas");
		j2.logo.classList.toggle("far");

	}
}
var j =0;
var col0 =6;
var col1=6;
var col2 =6;
var col3 =6;
var col4 =6;
var col5 =6;
var col6 =6;
var array = Array(49).fill(0);
console.log(array);

function touch(id){

    var pions = document.querySelectorAll('.pion');
    var col = id % 7;
//console.log(col);
console.log(current_player);
   /* Completer... */
   if (col==0){
	if (col0>=0){
	pions[0+col0*7].classList.toggle("playing");
	if(current_player==1){
		pions[0+col0*7].classList.toggle("j1");
		array[0+col0*7]=1;
		}
	if(current_player==2){
		pions[0+col0*7].classList.toggle("j2");
		array[0+col0*7]=2;
		}
	col0 = col0-1;
	changement();
	}
}

   if (col==1){
		if (col1>=0){
		pions[1+col1*7].classList.toggle("playing");
		if(current_player==1){
			pions[1+col1*7].classList.toggle("j1");
			array[1+col1*7]=1;
			}
		if(current_player==2){
			pions[1+col1*7].classList.toggle("j2");
			array[1+col1*7]=2;
			}
		col1 = col1-1;
		changement();
		}
   }
   if (col==2){
		if (col2>=0){
		pions[2+col2*7].classList.toggle("playing");
		if(current_player==1){
			pions[2+col2*7].classList.toggle("j1");
			array[2+col2*7]=1;
			}
		if(current_player==2){
			pions[2+col2*7].classList.toggle("j2");
			array[2+col2*7]=2;
			}
		col2 = col2-1;
		changement();
		
	}
}
	if (col==3){
        if (col3>=0){
		pions[3+col3*7].classList.toggle("playing");
        if(current_player==1){
            pions[3+col3*7].classList.toggle("j1");
			array[3+col3*7]=1;
            }
        if(current_player==2){
            pions[3+col3*7].classList.toggle("j2");
			array[3+col3*7]=2;
            }
        col3 = col3-1;
        changement();
        	}
		}

	if (col==4){
		if (col4>=0){
		pions[4+col4*7].classList.toggle("playing");
		if(current_player==1){
			pions[4+col4*7].classList.toggle("j1");
			array[4+col4*7]=1;
			}
		if(current_player==2){
			pions[4+col4*7].classList.toggle("j2");
			array[4+col4*7]=2;
			}
		col4 = col4-1;
		changement();
		}
	}
	if (col==5){
        if (col5>=0){
        pions[5+col5*7].classList.toggle("playing");
        if(current_player==1){
            pions[5+col5*7].classList.toggle("j1");
			array[5+col5*7]=1;
            }
        if(current_player==2){
            pions[5+col5*7].classList.toggle("j2");
			array[5+col5*7]=2;
            }
        col5 = col5-1;
        changement();
        }
    }
    if (col==6){
        if (col6>=0){
        pions[6+col6*7].classList.toggle("playing");
        if(current_player==1){
            pions[6+col6*7].classList.toggle("j1");
			array[6+col6*7]=1;
            }
        if(current_player==2){
            pions[6+col6*7].classList.toggle("j2");
			array[6+col6*7]=2;
            }
        col6 = col6-1;
        changement();
        }
    }
	console.log(array);
	checkwin();
	

	
}


function checkwin(){
	for (var i = 0; i < 46; i++) {
		if(array != 0){
			if(array[i]==array[i+7]  && array[i]==array[i+14] && array[i]==array[i+21]){
				if(i<28){
				if(array[i]==1){alert("victoir du joueur bleu");}
				if(array[i]==2){alert("victoir du joueur rouge");}
				}
			}
			if(array[i]==array[i+1]  && array[i]==array[i+2] && array[i]==array[i+3] ){
				if(i%7!=4 && i%7!=5 && i%7!=6){
					if(array[i]==1){alert("victoir du joueur bleu");}
					if(array[i]==2){alert("victoir du joueur rouge");}
				}
			}
			if(array[i]==array[i+6]  && array[i]==array[i+12] && array[i]==array[i+18]){
				if(i%7!=0 && i%7!=1 && i%7!=2 ){
					if(array[i]==1){alert("victoir du joueur bleu");}
					if(array[i]==2){alert("victoir du joueur rouge");}
				}
			}
			if(array[i]==array[i+8]  && array[i]==array[i+16] && array[i]==array[i+24]){
				if(i%7!=4 && i%7!=5 && i%7!=6 ){
					if(array[i]==1){alert("victoir du joueur bleu");}
					if(array[i]==2){alert("victoir du joueur rouge");}
					
				}
			}
		}
		
   }
}

function changement(){

	if(current_player==2){
		current_player=1;
		document.querySelector('#player-name').innerHTML = document.getElementById('j1-name').innerHTML;
		}
		else{
		if(current_player==1){
			current_player=2;
			document.querySelector('#player-name').innerHTML = document.getElementById('j2-name').innerHTML;
		}}
		j1.logo.classList.toggle("fas");
		j1.logo.classList.toggle("far");
		j2.logo.classList.toggle("fas");
		j2.logo.classList.toggle("far");
}




   
  


var id="";
var Nc=0;

function creerCompte() {
  var pseudo = document.getElementById("pseudo").value;
  var email = document.getElementById("email").value;
  var service = "https://trankillprojets.fr/wal/wal.php?inscription&identite=" + pseudo + "&mail=" + email;

  fetch(service)
    .then(response => response.json())
    .then(json => {
      if (json.etat.reponse === 1) {
        // Compte créé avec succès
        alert("Compte créé avec succès !");
      } 
    })
    .catch(error => console.log(error));
}

function connexion() {
  document.getElementById("authentification").style.display = "none";
  document.getElementById("connexion").style.display = "block";
}

function activerCompte() {
  var identifiant = document.getElementById("identifiant").value;
  var cle = document.getElementById("cle").value;
  var service = "https://trankillprojets.fr/wal/wal.php?activation=" + cle;

  fetch(service)
    .then(response => response.json())
    .then(json => {
      if (json.etat.reponse == 1) {
        // Récupération des informations
        id = json.identifiant;
        console.log(id);
        var service = "https://trankillprojets.fr/wal/wal.php?information&identifiant=" + json.identifiant;

        fetch(service)
          .then(response => response.json())
          .then(json => {
            if (json.etat.reponse == 1) {
              // Identification réussie
              document.getElementById("connexion").style.display = "none";
              document.getElementById("pageAccueil").style.display = "block";
              document.getElementById("identite").innerHTML += json.identite;
              document.getElementById("Identifiant").innerHTML +=id;
              document.getElementById("mail").innerHTML += json.mail;
            } else {
              // Erreur lors de l'identification
              alert("Erreur lors de l'identification. " + json.etat.message);
            }
          })
          .catch(error => console.log(error));
      } else {
        // Erreur lors de l'activation du compte
        alert("Erreur lors de l'authentification " + json.etat.message);
      }
    })
    .catch(error => console.log(error));
}


function afficherListeContacts() {
  document.getElementById("pageAccueil").style.display = "none";
  document.getElementById("listeContacts").style.display = "block";
  var service='https://trankillprojets.fr/wal/wal.php?relations&identifiant='+id;
  fetch(service)
  .then(reponse => reponse.json())
  .then(json => {
  if(json.etat.reponse==1 /*&& json.relation.length>0*/)
  {
    console.log(json);
    console.log(json.relations);
    document.getElementById('scroller').innerHTML="";
    for(var i=0; i<json.relations.length; i++){
      document.getElementById('scroller').innerHTML+=`
      <div class="contact" onclick="vidercache();discution(`+json.relations[i].relation+`)" id="`+json.relations[i].relation+`">
      <img src="img/PP.png">`+json.relations[i].identite+'</div>';
    }
    Nc=json.relations.length;
    
  }
  
  })
  
  .catch(erreur => console.log(erreur));
  
  }


function afficherAjouterAmi() {
  document.getElementById("pageAccueil").style.display = "none";
  document.getElementById("ajouterAmi").style.display = "block";
}


document.getElementById("bB").addEventListener("click", function() {
    document.getElementById("listeContacts").style.display = "none";
    document.getElementById("ajouterAmi").style.display = "none";
    document.getElementById("pageAccueil").style.display = "block";
  });
document.getElementById("bB2").addEventListener("click", function() {
    document.getElementById("listeContacts").style.display = "none";
    document.getElementById("ajouterAmi").style.display = "none";
    document.getElementById("pageAccueil").style.display = "block";
  });
document.getElementById("bB3").addEventListener("click", function() {
    document.getElementById("listeContacts").style.display = "none";
    document.getElementById("ajouterAmi").style.display = "none";
    document.getElementById("pageAccueil").style.display = "block";
  });


var listeContacts = document.getElementById("listeContacts");

//fonction ajout de l'ami
function AjouterAmi(Amie){
  {
    console.log(id);
    console.log(Amie);
    // On prepare la demande au service
    var service='https://trankillprojets.fr/wal/wal.php?lier&identifiant='+id+'&mail='+Amie.value;
    // On contacte le service
    fetch(service)
    .then(reponse => reponse.json())
    .then(json => {
    if(json.etat.reponse==1)
    
    {
      console.log(json);
    }
    
    })
    
    .catch(erreur => console.log(erreur));
    
    }

}

var Dcourant=0;

function discution(relation){
  Dcourant=relation;
  console.log(relation);
  var service='https://trankillprojets.fr/wal/wal.php?lire&identifiant='+id+'&relation='+relation;
   // On contacte le service
   fetch(service)
   
   .then(reponse => reponse.json())
   .then(json => {
   if(json.etat.reponse==1)  
   {
    console.log(json);
    var elems = document.querySelectorAll("#scroller div");
    for ( var i=0; i < Nc; i++) {
        elems[i].style.backgroundColor="rgb(196, 238, 196)";
    }
    document.getElementById(relation).style.backgroundColor="green"; 
     for(i=0;i<json.messages.length;i++){
      document.getElementById('scroller2').innerHTML+="<div>"+json.messages[i].identite+": "+json.messages[i].message+"</div>";
     }
     
   }
   
   })
   
   .catch(erreur => console.log(erreur));
   
}

function vidercache(){document.getElementById('scroller2').innerHTML="";}

function actualiser(){discution(Dcourant)
}

function envoyermessage(){
  var text= document.getElementById("message").value;
  discution(Dcourant);
  var service="https://trankillprojets.fr/wal/wal.php?ecrire&identifiant="+id+"&relation="+Dcourant+"&message="+text;
   // On contacte le service
   fetch(service)
   .then(reponse => reponse.json())
   .then(json => {
   if(json.etat.reponse==1)  
   {
     discution(Dcourant);
   }
   
   })
   
   .catch(erreur => console.log(erreur));
   
}

function supprimer(){
  var service="https://trankillprojets.fr/wal/wal.php?delier&identifiant="+id+"&relation="+Dcourant;
  fetch(service)
   .then(reponse => reponse.json())
   .then(json => {
   if(json.etat.reponse==1)  
   {
    afficherListeContacts();
   }
   
   })
   
   .catch(erreur => console.log(erreur));
   
}

var color="#ffffff";
function changercouleur(nom){
  afficherListeContacts();
  document.getElementById(nom).style.background=color;
}




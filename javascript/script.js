

// responsive boutton

const menuBurgeur = document.querySelector('.menu-burgeur')
const navlink = document.querySelector('.navlink')

menuBurgeur.onclick = function(){
    navlink.classList.toggle('open')
};

// boutton de retour


 // Sélectionnez le bouton par son identifiant
 const boutonRetour = document.getElementById('up');

 // Ajoutez un gestionnaire d'événement de clic au bouton
 boutonRetour.addEventListener('click', () => {
   // Faites défiler la page vers le haut
   window.scrollTo({
     top: 0,
     behavior: 'smooth' // Cette option rendra le défilement fluide
   });
 });


// variable marque voiture 


const marqueCar1 = "Ferrari"
const marqueCar2 = "Ferrari"
const marqueCar3 = "Ferrari"
const marqueCar4 = "Audi"
const marqueCar5 = "Mercedes"
const marqueCar6 ="Aston Martin"
const marqueCar7 ="Lamborguini"
const marqueCar8 = "Rolls Royce"
const marqueCar9 ="Nissan"
const marqueCar10 = "BMW"
const marqueCar11 = "Toyota"
const marqueCar12 = "Cadillac"
const marqueCar13 = "BMW"
const marqueCar14 = "Mercedes"
const marqueCar15 = "Mercedes"


// modele voiture
 
const modeleCar1 = "812 Superfast"
const modeleCar2 = "812 Superfast"
const modeleCar3 = "812 Superfast"
const modeleCar4 = "RS6"
const modeleCar5 = "Marco Polo"
const modeleCar6 = "DBX"
const modeleCar7 = "Urus"
const modeleCar8 = "Ghost"
const modeleCar9 = "GTR"
const modeleCar10 = "X7"
const modeleCar11= "Rav4"
const modeleCar12= "Escalade"
const modeleCar13 = "S8 Coupé"
const modeleCar14 = "S63 AMG"
const modeleCar15 = "C63 AMG"

// variable Puissance

const puissanceCar1 = 812
const puissanceCar2 = 812
const puissanceCar3 = 812
const puissanceCar4 = 450
const puissanceCar5 = 350
const puissanceCar6 = 620
const puissanceCar7 = 700
const puissanceCar8 = 550
const puissanceCar9 = 460
const puissanceCar10 = 650
const puissanceCar11 = 200
const puissanceCar12 = 520
const puissanceCar13 = 500
const puissanceCar14 = 600
const puissanceCar15 = 560

// variable  prix car

const prixCar1 = 300000 
const prixCar2 = 300000 
const prixCar3 = 300000 
const prixCar4 = 250000
const prixCar5 = 200000 
const prixCar6 = 280000 
const prixCar7 = 280000 
const prixCar8 = 350000 
const prixCar9 = 300000 
const prixCar10 = 220000 
const prixCar11 = 100000 
const prixCar12 =200000 
const prixCar13 = 280000 
const prixCar14 = 250000 
const prixCar15 = 270000 




// fontion APPEL 

function appel() {

    const  pageLocation = document.querySelector('.page-location')
    const croix = document.querySelector('.croix')
   
    pageLocation.classList.toggle('ouvert') 

    croix.onclick = function () {
   
        pageLocation.classList.toggle('ouvert')
   }

  
}


function augmenter(numeroCar) {
  
  var counter = 0; // Valeur initiale du compteur
  
 

  // Fonction appelée au clic sur le bouton d'incrémentation
  function incrementCounter() {
    counter++; // Incrémente le compteur de 1
    
    document.getElementById("totalPrice").textContent = counter; // Met à jour la valeur affichée dans l'élément avec l'id "counter"
  }
  
  // Fonction appelée au clic sur le bouton de décrémentation
  function decrementCounter() {
   if ( counter>0) {
    counter--;
   } // Décrémente le compteur de 1
 
    document.getElementById("totalPrice").textContent = counter; // Met à jour la valeur affichée dans l'élément avec l'id "counter"
  }
  
  // Ajoute des gestionnaires d'événements aux boutons
  document.getElementById("add").addEventListener("click", incrementCounter);
  document.getElementById("dim").addEventListener("click", decrementCounter);
  
  
}





// AFFICHAGE Information de chaque voiture

function car(numeroCar) {

      
switch (numeroCar){

 case 1 :

 appel();                            
 document.getElementById(`marqueCar`).innerHTML = marqueCar1;
 document.getElementById(`prixCar`).innerHTML =  `${prixCar1} CFA`;
 document.getElementById(`modeleCar`).innerHTML = modeleCar1;
 document.getElementById(`puissanceCar`).innerHTML =`${puissanceCar1} CV`;
 augmenter();
 

 
 
  break;

 case 2 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar2;
 document.getElementById(`prixCar`).innerHTML =  `${prixCar2} CFA`;
 document.getElementById(`modeleCar`).innerHTML = modeleCar2;
 document.getElementById(`puissanceCar`).innerHTML =`${puissanceCar2} CV`;
 augmenter();
 
 

break;

 case 3 :

  appel();
 document.getElementById(`marqueCar`).innerHTML = marqueCar3;
 document.getElementById(`prixCar`).innerHTML =  `${prixCar3} CFA`;
 document.getElementById(`modeleCar`).innerHTML = modeleCar3;
 document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar3} CV`;
 augmenter();

break;
 case 4 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar4;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar4} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar4;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar4} CV`;
  augmenter();

break;
 case 5 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar5;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar5} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar5;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar5} CV`;
  augmenter();

break;
 case 6 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar6;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar6} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar6;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar6} CV`;
  augmenter();

break;
 case 7 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar7;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar7} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar7;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar7} CV`;
  augmenter();

break;
 case 8 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar8;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar8} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar8;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar8} CV`;
  augmenter();

break;
 case 9 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar9;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar9} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar9;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar9} CV`;
  augmenter();

break;
 case 10 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar10;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar10} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar10;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar10} CV`;
  augmenter();

break;
 case 11 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar11;
  document.getElementById(`prixCar`).innerHTML = prixCar11;
  document.getElementById(`modeleCar`).innerHTML = modeleCar11;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar11} CV`;
  augmenter();

break;
 case 12 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar12;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar12} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar12;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar12} CV`;
  augmenter();

break;
 case 13 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar13;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar13} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar13;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar13} CV`;
  augmenter();

break;
 case 14 :
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar14;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar14} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar14;
  document.getElementById(`puissanceCar`).innerHTML = `${puissanceCar14} CV`;
  augmenter();

break;
 case 15:
  appel();
  document.getElementById(`marqueCar`).innerHTML = marqueCar15;
  document.getElementById(`prixCar`).innerHTML =  `${prixCar15} CFA`;
  document.getElementById(`modeleCar`).innerHTML = modeleCar15;
  document.getElementById(`puissanceCar`).innerHTML =`${puissanceCar15} CV`;
  augmenter();
  
break;

}
 
}



// validation formulaire de contact


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  var nom = document.getElementById("nom").value.trim();
  var prenom = document.getElementById("prenom").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();

  if (nom === "" || prenom === "" || email === "" || phone === "") {
    alert("Veuillez remplir tous les champs."); // Affiche un message d'erreur si un champ est vide
    return;
  }

  if (!isValidEmail(email)) {
    alert("Veuillez entrer une adresse email valide."); // Affiche un message d'erreur si l'email est invalide
    return;
  }

  if (!isValidPhone(phone)) {
    alert("Veuillez entrer un numéro de téléphone valide."); // Affiche un message d'erreur si le numéro de téléphone est invalide
    return;
  }

  // Si toutes les validations sont réussies, vous pouvez effectuer les actions supplémentaires ici
  // Par exemple, envoyer les données du formulaire à un serveur par exemple apres le projet gomycode

  // alert("Formulaire validé !");

  // Réinitialisation du formulaire
  document.getElementById("myForm").reset();
  
  const succer1 = document.getElementById('succer1');
   succer1.classList.toggle('val1');
  

});

// Fonction pour valider l'email
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fonction pour valider le numéro de téléphone
function isValidPhone(phone) {
  var phoneRegex = /^(00221|\+221)?[76|77|78|70|75][0-9]{8}$/;
  return phoneRegex.test(phone);
}



// validation formulaire location


document.getElementById("location").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  var permis = document.getElementById("permis").value.trim();
  var date = document.getElementById("date").value.trim();
  var region = document.getElementById("region").value.trim();
  var telephone = document.getElementById("telephone").value.trim();

  if (permis === "" || date === "" || region === "" || telephone === "") {
    alert("Veuillez remplir tous les champs."); // Affiche un message d'erreur si un champ est vide
    return;
  }

  

  if (!isValidtelePhone(telephone)) {
    alert("Veuillez entrer un numéro de téléphone valide."); // Affiche un message d'erreur si le numéro de téléphone est invalide
    return;
  }

  // Si toutes les validations sont réussies, vous pouvez effectuer les actions supplémentaires ici
  // Par exemple, envoyer les données du formulaire à un serveur par exemple apres le projet gomycode

  // alert("Formulaire validé !");

  // Réinitialisation du formulaire
  document.getElementById("location").reset();
  
 
  const succer = document.getElementById('succer');
   succer.classList.toggle('val');
  

});



// Fonction pour valider le numéro de téléphone
function isValidtelePhone(phone) {
  var phoneRegex = /^(00221|\+221)?[76|77|78|70|75][0-9]{8}$/;
  return phoneRegex.test(phone);
}




AOS.init();
// Envoie une requête GET à l'URL de l'api pour récupérer des données
fetch("patisseries.json")
  // Une fois que la réponse est reçue
  .then((rep) => {
    // transforme la reponse obtenu en JSON
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then((data) => {
    // Appelle la fonction addProducts() avec les données JSON en entrée
    addProducts(data);
    clients(data.entreprise.avantagesClients);
    douce(data.entreprise.produits);
    cours(data.entreprise.services);
    avis(data.entreprise.temoignages);
  });

// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addProducts(data) {
  // Affiche les données dans la console du navigateur
  console.log(data);
}
function addProducts(data) {
  // Affiche les données dans la console du navigateur
  console.log(data);
  document.querySelector("#user").innerHTML += ` 
    
    <div class="absolute">
    
      <h1 class="titre">${data.entreprise.nomCommercial}  </h1>
      <p> ${data.entreprise.phraseAccroche}</p>
                <a href="">${data.entreprise.texteAppelAction}</a>
               
    </div>`;
}
/*partie avantages clients
 */
function clients(avantagesclients) {
  let avantage = "";
  avantagesclients.forEach((element) => {
    avantage += `
           
            <p>${element}</p>
            
        `;
  });
  document.querySelector("#large").innerHTML += avantage;
}

/*partie des produits avec les images et description*/
function douce(produits) {
  let douceur = "";
  produits.forEach((tarte) => {
    douceur += `
      <div class="card">
           
           <div class="limite"> <img src="${tarte.images}" alt=""></div>
           <h3>${tarte.nom}</h3>
            <p>${tarte.description}</p>
            <a href="" class="cardbtn">Commander</a>
           
        </div>
    
    `;
  });
  document.querySelector("#carte").innerHTML += douceur;
}

/*partie des services */
function cours(services) {
  let traiteur = "";
  services.forEach((gateau) => {
    traiteur += `
    <div class="carte-service"  data-aos="zoom-in-up">
    <img src="${gateau.image}" alt="">
    <h3>${gateau.nom}</h3>
       <p>${gateau.description}</p>
    <a href="">Réservez</a>
    
    
    </div>
    `;
  });
  document.querySelector("#pflex").innerHTML += traiteur;
}
/*partie des témoignages*/
function avis(temoignages) {
  let notes = "";
  temoignages.forEach((element) => {
    notes += `
    <div class="carte-temoin">
    <i class="fa-solid fa-quote-left"></i>
    <h3>${element.prenom}</h3>
    <h4>${element.typeExperience}</h4>
    <p>${element.commentaire}</p>
    <p class"avis"> note${element.note}</p>
    <i class="fa-regular fa-face-smile"></i>

</div>
    
    `;
  });
  document.querySelector("#bflex").innerHTML += notes;
}


var map = L.map('map').setView([45, 47], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([3 ,34, 2]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
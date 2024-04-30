AOS.init();
// Envoie une requête GET à l'URL de l'api pour récupérer des données
fetch("patisseries.json")
  // Une fois que la réponse est reçue
  .then(rep => {
    // transforme la reponse obtenu en JSON 
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then(data => {
    // Appelle la fonction addProducts() avec les données JSON en entrée
    addProducts(data);
    clients(data.entreprise.avantagesClients)
    douce(data.entreprise.produits)
    cours(data.entreprise.services)
    avis(data.entreprise.temoignages)
  });

// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addProducts(data) {
  // Affiche les données dans la console du navigateur
  console.log(data);
}
function addProducts(data) {
    // Affiche les données dans la console du navigateur
    console.log(data)
document.querySelector("#user").innerHTML += 
    ` 
    
    <div class="absolute">
    
      <h1 class="titre">${data.entreprise.nomCommercial}  </h1>
      <p> ${data.entreprise.phraseAccroche}</p>
                <a href="">${data.entreprise.texteAppelAction}</a>
               
    </div>`
  
  }

  
function clients(avantagesclients) {let avantage = "";
    avantagesclients.forEach(element => {
        avantage += `
           
            <p>${element}</p>
            
        `;
    });
    document.querySelector("#large").innerHTML += avantage;
}

  /*partie des produits avec les images et description*/
function douce(produits){ 
  let douceur="";
  produits.forEach(tarte => {
    douceur+=`
      <div class="card">
            <h3>${tarte.nom}</h3>
           <div class="limite"> <img src="${tarte.images}" alt=""></div>
            <p>${tarte.description}</p>
        </div>
    
    `
    
  });
  document.querySelector("#carte").innerHTML += douceur;
}

/*partie des services */
function cours(services){
  let traiteur="";
  services.forEach(gateau => {
    traiteur+=`
    <div class="carte-service">
    <h3>${gateau.nom}</h3>
    <img src="${gateau.image}" alt="">
    <p>${gateau.description}</p>
    <a href="">Réservez</a>
    </div>
    `
    
  });
  document.querySelector("#pflex").innerHTML += traiteur;
}
/*partie des témoignages*/
function avis(temoignages){
  let notes=""
  temoignages.forEach(element => {
    notes+=`
    <div class="carte-temoin">
    <h3>${element.prenom}</h3>
    <p>${element.typeExperience}</p>
    <p>${element.commentaire}</p>
    <p>${element.note}</p>

</div>
    
    `
    
  });
  document.querySelector("#bflex").innerHTML +=notes ;
}
   
    
    
    
    
  
  
   





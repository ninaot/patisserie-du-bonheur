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
            <img src="${tarte.images}" alt="">
            <p>${tarte.description}</p>
        </div>
    
    `
    
  });
  document.querySelector("#carte").innerHTML += douceur;
}


   
    
    
    
    
  
  
   





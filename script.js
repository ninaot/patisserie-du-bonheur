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

 /* let avantage = "";

function clients(avantagesclients) {
    avantagesclients.forEach(element => {
        avantage += `
            <h2>${data.entreprise.avantagesclients}</h2>
            <p>${entreprise.element}</p>
            <p></p>
            <p></p>
        `;
    });
    document.querySelector("#large").innerHTML += avantage;
}
   */

const avantagesclients=[0]
 avantagesclients=document.createElement(h2)

   
    
    
    
    
  
  
   





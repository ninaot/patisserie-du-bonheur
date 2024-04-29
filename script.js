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
    
    <div>
    
      <h1 class="titre">${data.entreprise.nomCommercial}</h1>
      <p> ${data.entreprise.phraseAccroche}</p>
                <a href="">${data.entreprise.texteAppelAction}</a>
    </div>`
      
   
}  
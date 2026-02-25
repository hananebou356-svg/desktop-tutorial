// Demander à l'utilisateur trois nombres
// let a = prompt("Entrez le premier nombre:");
// let b = prompt("Entrez le deuxième nombre:");
// let c = prompt("Entrez le troisième nombre:");

// let plusGrand;

// if (a > b && a > c) {
//   plusGrand = a;
// } else if (b > a && b > c) {
//   plusGrand = b;
// } else {
//   plusGrand = c;
// }
// console.log("Le plus grand nombre est " + plusGrand);

//validation d'age
// let age = prompt("entre ton age")
// age = Number(age)

// if (age <13 ){
//     console.log("Accès interdit ")
// }else if (age >= 13 && age < 17){
//     console.log("Accès limité (contenu ado")
// }else{
//     console.log("Accès autorisé")
// }

//calcul de remise

// let remise = prompt( "un montant")
// remise = Number(remise)
// remise10 = remise*0.1
// remise20 = remise*0.2
// if(remise < 100){
//     console.log("Aucune remise")
// }else if( remise >= 100 && remise < 500){
//     console.log(remise - remise10)
// }else{
//     console.log(remise - remise20)
// }

//SWITCH
// Jour de la semaine
// let jour = prompt("Entrez un nombre entre 1 et 7 :");
// jour = Number(jour);
// switch (jour) {
//   case 1:
//     jour = "Lundi";
//     break;
//   case 2:
//     jour = "Mardi";
//     break;
//   case 3:
//     jour = "Mercredi";
//     break;
//   case 4:
//     jour = "Jeudi";
//     break;
//   case 5:
//     jour = "Vendredi";
//     break;
//   case 6:
//     jour = "Samedi";
//     break;
//   case 7:
//     jour = "Dimanche";
//     break;
//   default:
//     jour = "Nombre invalide ! Veuillez entrer un nombre entre 1 et 7.";
//     break; 
// }
// console.log(jour);


//calculatrice simple

// let nomber1 = prompt("entre 1er number")
// let nomber2 = prompt("entre 2eme number")
// nomber1 = Number(nomber1)
// nomber2 = Number(nomber2)
// let operation = prompt("entre un operation (+,-,*,/)")
// switch (operation){
//     case "+":
//         console.log(nomber1+nomber2)
//      break;
//     case "-":
//         console.log(nomber1-nomber2);
//      break;
//     case "*":
//         console.log(nomber1*nomber2);
//      break;
//      case "/":
//         if(nomber2 == 0){console.log("error")}
//         else 
//         {console.log(nomber1/nomber2)}
//     default :
//     console.log("aucun operation") 
// }

// let mois =prompt("entre un number de moiss ")
// mois = Number(mois)
// switch(mois){
//     case 1:  
//         console.log("janvier")
//     break;  
//     case 2:
//         console.log("Fevrier")
//     break;  
//     case 3:
//         console.log("Mars")
//     break;  
//     case 4:
//         console.log("avril")
//     break;  
//     case 5:
//         console.log("Mai")
//     break;  
//     case 6:
//         console.log("Juin")
//     break;  
//     case 7:
//         console.log("juillet")
//     break;    
//     case 8:
//         console.log("aout")
//     break;  
//     case 9:
//         console.log("septembre")
//     break;  
//     case 10:
//         console.log("octobre")
//     break;  
//     case 11:
//         console.log("November")
//     break;  
//     case 12:
//         console.log("december")
//     break; 
//     default:
//         mois = "aucun mois";
//     break;
// }

// table de multipication
// let i = prompt("entre un nombre")
// for(let n = 1; n <=10 ;n++){
//     console.log(i + " X "+ n + " = " + (n*i))
// }

//SOMME DE NOMBRE
// let somme = 0;

// for (let n = 1; n <= 10; n++) {
//   if (n % 2 === 0) {
//     somme += n;
//   }
// }
// console.log("La somme des nombres pairs entre 1 et 10 est :", somme);

// 
//TABLEAU
// Exercice 1 : Liste de courses
// let liste = ["Pain", "Lait", "Œufs", "Fruits", "Fromage"];

// for (let i = 0; i < liste.length; i++) {
//   console.log(liste[i]);
// }

//somme et moyenne
// const sire = [1,5,6,7,4,9,3]
// let somme= 0

// for(let i =0 ; i< 6;i++){
//     somme = somme + sire[i]
// }
// console.log(somme)


//trouver la plus grande valeur

// let a = [7,5,4,2,9,3];
// let max = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {max=a[i];}
// }
// console.log("La plus grande valeur est :", max);

// const nombres = [4, 10, 2, 8, 6];
// const max = Math.max(...nombres);
// console.log("La plus grande valeur est :", max); 










// serie 2

//exercice 1
// let a = prompt("entre 1er nombre :")
// let b = prompt("entre 2eme nombre :")
// let c = prompt ("entre une operation (+,-,*,/) :")
// a= Number(a)
// b= Number(b)
// if(c == "+"){
//  resultat = a + b   
// }else if(c == "-"){
//  resultat = a - b
// }else if(c == "*"){
//  resultat = a * b
// }else if(c = "/" && (b !== 0)){
//  resultat = a / b 
// }else{
//  resultat = "Error c'est operation"   
// }è
// console.log(resultat)

//exercice 2
// let continuer = "oui";

// while( continuer === "oui"){
//     let nomber1 = prompt("entre 1er nombre")
// let nomber2 = prompt("entre 2eme numbre")
// nomber1 = Number(nomber1)
// nomber2 = Number(nomber2)
// let operation = prompt("entre un operation (+,-,*,/)")
// switch (operation){
//     case "+":
//         console.log(nomber1+nomber2)
//      break;
//     case "-":
//         console.log(nomber1-nomber2);
//      break;
//     case "*":
//         console.log(nomber1*nomber2); 
//      break; 
//      case "/":
//         if(nomber2 == 0){console.log("Erreur : impossible de diviser par zéro 0 ")}
//         else 
//         {console.log(nomber1/nomber2)}
//     default :
//     console.log("aucun operation"); 
// }
// continuer= prompt("souhaitez-vous faire un autre calcul ? (oui/non)")
// }
// console.log("merci ")

// function add(a,b){
//  return a + b; }
// function sub(a,b){
//  return a - b; }
// function mul(a,b){
//  return a * b; }
// function divi(a,b){
//   if(b=== 0){
//     return "error"
//   }else{
//     return a/b;
//   }
//   }
//  let CONT = "oui";
// {while (CONT === "oui") {
//   let a = Number(prompt("Donner le 1er nombre :"));
//   let b = Number(prompt("Donner le 2ème nombre :"));
//   let oper = prompt("Entrer l'opération ");
//   let result;
//   switch (oper) {
//     case "+":
//       result = add(a,b);
//       break;

//     case "-":
//       result = sub(a,b);
//       break;

//     case "*":
//       result = mul(a,b);
//       break;

//     case "/":
//       if (b === 0) {
//         console.log("Erreur : impossible de diviser par 0");
//       } else {
//         result = divi(a,b);
//       }
//       break;
//   }
//       console.log("Le résultat est : " + result);}
//   CONT= prompt("Souhaitez-vous faire un autre calcul ? (oui / non)");
// }

// console.log("BSSLAMAAA ELIKK");








// Tableaux
// let notes = [12, 15, 9, 18, 14]
// console.log(notes[0])
// console.log(notes[notes.length-1])
// notes.push(16)
// console.log(notes)
// notes.shift()
// console.log(notes)

// NIVEAU 2
// let prenoms = ["Sara", "Ali", "Youssef", "Nora"]

// // console.log(prenoms.length)

// // prenoms.sort()
// // console.log(prenoms)
 


// // for (let i = 0; i < prenoms.length; i++){ 
// // console.log(prenoms[i]); 
// // }

// // for(let prenom of prenoms){
// //     console.log(prenom)
// // }


// // ex
// // console.log(prenoms)

// // prenoms.push("karim","leila")
// // console.log(prenoms)
 
// // prenoms.splice(1,1)
// // console.log(prenoms)

// // if(prenoms.includes("Nora")){
// //     console.log("true")
// // }else{
// //     console.log("false")
// // }

// // for (let i = 0; i < prenoms.length; i++){
// // console.log((i+1 )+ " " + prenoms[i])
// // }


// // ex2
// let notes = [12, 18, 9, 14, 20, 7, 16];
// let somme = 0
// let moyenne
// for (let i = 0; i < notes.length; i++){
// somme = somme +notes[i]
// moyenne = somme/notes.length
// }console.log(moyenne)

// // 2
// let max = notes[0];
// for (let i = 0; i < notes.length; i++) {
//   if (notes[i] > max) {max=notes[i];}
// }
// console.log("La plus grande valeur est :", max);
// // 2 1
// let min = notes[0];
// for (let i = 0; i < notes.length; i++) {
//   if (notes[i] < min) {min=notes[i];}
// }
// console.log("La plus grande valeur est :", min);

// // 3
// let admis = [];
// for (let i = 0; i < notes.length; i++) {
//   if (notes[i] >= 10) {
//     admis.push(notes[i]);
//   }
// }
// console.log("Tableau des admis :", admis);
// // 4

// for (let i = 0; i < notes.length; i++) {
//   if (notes[i] >= 10) {
//     console.log(notes[i] +": admis");
//   }else{
//     console.log(notes[i] +": recalés")
//   }
// }

// 1


//  let titre = document.getElementById("titre");
// let bouton = document.getElementById("bt");
// bouton.addEventListener("click",function(){
//   titre.textContent = "Bienvenue dans le monde du JavaScript DOM" 
// })

// let text = document.getElementById("nameInput");
// let btn = document.getElementById("btn");
// let result = document.getElementById("result");

// btn.addEventListener("click", function(){
//   let name = text.value;
  
//   result.textContent = "bonjour" + name; 
// }); 

// const btn = document.getElementById("btn1");

// btn.addEventListener("click", function(){
// let p = document.createElement("p") ;
//   p.textContent ="Je viens d’être ajouté";
//     document.body.appendChild(p); 
//     p.style.color= "red"
// }); 

// const btn = document.getElementById("btn");
// const input = document.getElementById("nameInput")

// btn.addEventListener("click", function(){
//   let nameInput = input.value;
// let p = document.createElement("p") ;
//   p.textContent =nameInput;
//     document.body.appendChild(p); 
//     input.value="";
// });

// const input = document.getElementById("champTexte");
//     const btn = document.getElementById("btnAjouter");
//     const ul = document.getElementById("maListe");

// btn.addEventListener("click", function() {
//       const texte = input.value;

//        const li = document.createElement("li");
//       li.textContent = texte;

//       const deleteBtn = document.createElement("button");
//       deleteBtn.textContent = "supprimer";

//       deleteBtn.addEventListener("click", function() {
//         li.remove();
//       });
//       li.addEventListener("click", function() {
//   li.style.textDecoration = "line-through";
// });


//       li.appendChild(deleteBtn);

//       ul.appendChild(li);

//       input.value = "";
//     });



// let btn1 = document.querySelectorAll(".btn");
//     let p =document.getElementById("para");

// btn1.forEach((b,index)=>{
//   b.addEventListener("click", function(){
//     if(index === 0){
//       p.textContent="text 1"
//     }else if(index === 1){
//       p.textContent= "text 2"
//     }else{
//       p.textContent= "text 3"
//     }
//   })
// })








// const form = document.getElementById("userForm");
// const successMsg = document.getElementById("successMsg");
// const usersList = document.getElementById("usersList");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // Empêche le rechargement de la page

//   // Récupération des valeurs
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value.trim();
//   const phone = document.getElementById("phone").value.trim();
//   const age = document.getElementById("age").value.trim();

//   // Réinitialisation des messages d’erreur
//   document.querySelectorAll(".error").forEach(err => err.textContent = "");
//   successMsg.textContent = "";

//   let isValid = true;

//   // Vérifications simples
//   if (name === "") {
//     document.getElementById("nameError").textContent = "Le nom est obligatoire.";
//     isValid = false;
//   }

//   if (!email.includes("@")) {
//     document.getElementById("emailError").textContent = "Email invalide.";
//     isValid = false;
//   }

//   if (password.length < 6) {
//     document.getElementById("passwordError").textContent = "Mot de passe trop court.";
//     isValid = false;
//   }

//   if (!/^[0-9]{10}$/.test(phone)) {
//     document.getElementById("phoneError").textContent = "Numéro de téléphone invalide.";
//     isValid = false;
//   }

//   if (age < 18) {
//     document.getElementById("ageError").textContent = "Vous devez avoir au moins 18 ans.";
//     isValid = false;
//   }

//   if (!isValid) return;

//   // Création de l’objet utilisateur
//   const user = {
//     nom: name,
//     email: email,
//     motDePasse: password,
//     telephone: phone,
//     age: age
//   };

//   // Afficher le message de succès
//   successMsg.textContent = "Utilisateur ajouté avec succès ! ✅";

//   // Affichage dans la liste (DOM)
//   const div = document.createElement("div");
//   div.innerHTML = `
//     <p><strong>Nom:</strong> ${user.nom}</p>
//     <p><strong>Email:</strong> ${user.email}</p>
//     <p><strong>Téléphone:</strong> ${user.telephone}</p>
//     <p><strong>Âge:</strong> ${user.age}</p>
//     <hr>
//   `;
//   usersList.appendChild(div);

//   // Réinitialiser le formulaire
//   form.reset();
// });



// const user = { 
// name: "Nora", 
// city: "Rabat", 
// age: 22, 
// job: "Développeuse" 
// }; 

// const {name,job} = user ;
// console.log(`${name} travaille comme ${job}`);


// const colors = ["red", "green", "blue", "yellow"]; 

// const [firstColor, secondColor, ...others] = colors;

// console.log(firstColor);  
// console.log(secondColor);  
// console.log(others);


// const user = { name: "Ali", age: 25 }; 

// const userWithCity  = {
//   ...user,
//   city : "casablanca"
// };
// console.log(userWithCity);

// const a = [1, 2]; 
// const b = [3, 4, 5];

// const combined = [...a, ...b];

// console.log(combined);




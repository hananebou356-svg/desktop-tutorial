//Bases
let prenom = "Karim" ;
let ages = 25;
let ville = "agadir";
console.log(" je m'appelle " + prenom + " j'ai " + ages + " ans et habite à " + ville);
// 2
let string = "salut bonjour";
console.log( string)
let number = 2025
console.log(number)
let x = 25
let y = 10
console.log(x<y)
let fruit;
console.log(innerHTML = typeof fruit)
let z = null
console.log(z)
let pre = "hanane"
let nom ="bou"
console.log("Bonjour " + pre + " " + nom )
console.log(`Bonjour ${pre} ${nom} `)
let  compteur = 0
 while (compteur < 3) {
    console.log("Compteur :  "+ compteur);
    compteur++;
  }
  // logique 
 let futur = prompt("Quel est ton âge actuel ?")
  let age = Number(futur)
  agedans10 = age + 10
  console.log( agedans10 )
  //le moyenne
  let note1 = 10
  let note2 = 15
  let note3 = 20
  let moyenne = ( note1 + note2 + note3 )/3
  console.log( " la moyenne est " + moyenne)
  // 2 LES CONDITIONS 
  // comprehension
let nomber = prompt( number)
nomber = Number(nomber)
if(nomber % 2 === 0){
   console.log( `${nomber} est pair`)}
   else { console.log(`${nomber} est impair`)}
   //2
   let num = prompt("number")
  num = Number(num) 
   if ( num < 0){
    console.log(`${num} est negative `)
   }else if ( num > 0){
    console.log(`${num} est positive`)
   }else {
    console.log( `${num} est null`)
   }
   //3
   let isConnected = true 
   if(isConnected){
    console.log("Bienvenue")
   }else{
    console.log("Veuillez vous connecter")
   }
   //4
   let note = prompt("entre note")
   
   if( note >= 10){
    console.log("admis");
   }else{
    console.log("Recalé");
   }
   //COMBINAISONS 
   let old = prompt( "entre age")
if (old<13){
  console.log("enfant")
}else if (old >= 13 && old <=17){
  console.log("adolescent")
}else{
  console.log("Adulte")
}  
// Comparateur de deux nombres
let a = prompt("Entrez le premier nombre :");
let b = prompt("Entrez le deuxième nombre :");

if (a > b) {
  console.log(a + " est plus grand que " + b);
} else if (a < b) {
  console.log(b + " est plus grand que " + a);
} else {
  console.log("Les deux nombres sont égaux");
}
// Note avec mention
let not = prompt("Entrez la note (sur 20) :");

if (not >= 16) {
 console.log("Très bien");
} else if (not >= 14) {
  console.log("Bien");
} else if (not >= 10) {
  console.log("Passable");
} else {
  console.log("Insuffisant");
}
// Affiche les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Table de multiplication du 5
console.log("Table de multiplication du 5 :");
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i);
}




    




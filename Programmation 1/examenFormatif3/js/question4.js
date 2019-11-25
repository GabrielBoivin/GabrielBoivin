var entree = prompt("Voulez-vous un entrée à 3.50$ (o/n) ?");
var platPrincipal = prompt("Veuillez choisir votre plat principal (Makis, Nigiris ou PadThai)");
var dessert = prompt("Voulez-vous un dessert à 4.50$ (o/n) ?");
var tps =  total*0.05;
var tvq = total*0.09975;
var total = platPrincipal + dessert + entree;

if (entree === "o" || entree === "O"){
    entree = 3.50;
}

else {
    entree = 0;
}

if (platPrincipal === "Makis" || platPrincipal === "makis"){
    platPrincipal = 10;
}

else if (platPrincipal === "Nigiris" || platPrincipal === "nigiris"){
    platPrincipal = 11;
}

else if (platPrincipal === "PadThai" || platPrincipal === "Padthai" || platPrincipal === "padthai" || platPrincipal === "padThai"){
    platPrincipal = 14;
}

else {
    alert("Ce plat n’est pas disponible pour le moment, mais nous prenons votre demande en note. ");
}

if (dessert === "o" || dessert === "O"){
    dessert = 4.50;
}

else{
    dessert = 0;
}

alert("Votre " + )
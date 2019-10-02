var x = Math.floor(Math.random() * 11);
console.log(x);
var y = Math.floor(Math.random()* 11);
console.log(y);
var somme = x+y;
var multiplication = x*y;
var xUsager;
var yUsager;
var bonneReponse = 0;

alert("X+Y = " + somme + "\n X*Y = " + multiplication + "\n X = ? \n Y = ?");

xUsager = Number(prompt("Veuillez deviner la valeur du X"));
yUsager = Number(prompt("Veuillez deviner la valeur du Y"));

if (xUsager === x){
    bonneReponse += 1;
}

else if(yUsager === y){
    bonneReponse += 1;
}

else{

}

if (bonneReponse === 1){
    alert("Vous avez deviné un chiffre")
}

else if (bonneReponse === 2){
    alert("Vous avez deviné les deux chiffres")
}

else{
    alert("Vous avez deviné aucun chiffre")
}

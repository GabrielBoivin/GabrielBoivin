var tab = [];
var nbV = 0;
var nbF = 0;
var maxV = 0;
var maxF = 0;
var indiceV;
var indiceF;
var maxIndiceV;
var maxIndiceF;

for (var i = 0; i <= 1000; i ++){
    var random = Math.floor(Math.random() * 2);
    if (random === 0){
        tab[i] = false;
    }
    else{
        tab[i] = true;
    }
    console.log(tab[i]);
    if(tab[i] === true) {
        if(nbF !== 0) {
            indiceV = i;
        }
        nbF = 0;
        nbV ++;
        indiceF = 0;
        if(nbV > maxV){
            maxV = nbV;
            maxIndiceV = indiceV;
        }
    }
    else if(tab[i] === false) {
        if(nbV !== 0) {
            indiceF = i;
        }
        nbV = 0;
        nbF ++;
        indiceV = 0;
        if(nbF > maxF){
            maxF = nbF;
            maxIndiceF = indiceF;
        }
    }

}
document.write("La plus longue séquence de vrais consécutifs est de " + maxV + "<br>");
document.write("La plus longue séquence de faux consécutifs est de " + maxF + "<br>");
document.write("Position de départ de la plus longue séquence de vrais consécutifs : " + maxIndiceV + "<br>");
document.write("Position de départ de la plus longue séquence de faux consécutifs : " + maxIndiceF + "<br>");

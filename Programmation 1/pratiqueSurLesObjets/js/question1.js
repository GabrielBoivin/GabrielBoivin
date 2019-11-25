class Cylindre{

    constructor(hauteur,rayon){
        this.hauteur = hauteur;
        this.rayon = rayon;
    }

    GetVolume(){
        return (Math.PI * Math.pow(this.rayon, 2)) * this.hauteur;
    }
}

let cylindre1 = new Cylindre(10, 20);
let cylindre2 = new Cylindre(40, 101);
let cylindre3 = new Cylindre(30, 22);
let cylindre4 = new Cylindre(15, 45);
let cylindre5 = new Cylindre(7, 97);
alert(cylindre1.GetVolume());

let tab = [];
tab.push(cylindre1);
tab.push(cylindre2);
tab.push(cylindre3);
tab.push(cylindre4);
tab.push(cylindre5);


class Boite{

    constructor(tabCylindres){
        this.tabCylindres = tabCylindres;
    }

    GetVolumeBoite(){
        let somme = 0;
        for (let i = 0; i < this.tabCylindres.length; i ++){
            somme += this.tabCylindres[i].GetVolume()
        }
        return somme;
    }

}

let boite = new Boite(tab);
alert(boite.GetVolumeBoite());
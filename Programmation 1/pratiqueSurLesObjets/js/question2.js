class Examen{

    constructor(question1, question2, question3, question4, question5){
        this.question1 = question1;
        this.question2 = question2;
        this.question3 = question3;
        this.question4 = question4;
        this.question5 = question5;
    }

    GetNote(){
        return this.question1 + this.question2 + this.question3 + this.question4 +  this.question5;
    }

}

let question6 =  new Examen(20);
let question7 = new Examen(12);
let question8 = new Examen(14);
let question9 = new Examen(18);
let question10 = new Examen(7);

alert(question6.GetNote());
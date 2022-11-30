class Personnage {
    constructor( pseudo, classe, sante, attaque, niveau = 1){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
    }
    evoluer(){
        this.niveau++
        console.log(`${this.pseudo} passe au niveau ${this.niveau} !`)
    }
    verifierSante(){
        if(this.sante <= 0){
            this.sante = 0;
            console.log(`${this.pseudo} a perdu !`)
        }
    }
    get informations(){
        console.log(`${this.pseudo} ${this.classe} a ${this.sante} points de vie et est au niveau ${this.niveau} !`)
    }
}

class magicien extends Personnage{
    constructor( pseudo, classe, sante, attaque, niveau){
        super(pseudo, "magicien", 170, 90, 1)
    }
    attaquer(Personnage){
        Personnage.sante = Personnage.sante - this.attaque
        console.log(`${this.pseudo} attaque ${Personnage.pseudo} en lançant un sort ${this.attaque} dégâts !`)
        this.evoluer();
        Personnage.verifierSante();
    }
    coupSpecial(Personnage){
        Personnage.sante = Personnage.sante - (this.attaque * 5)
        console.log(`${this.pseudo} attaque avec son coup spécial puissance des arcanes ${Personnage.pseudo} ${this.attaque * 5} dégâts !`)
        this.evoluer();
        Personnage.verifierSante();
    }
}

class guerrier extends Personnage{
    constructor( pseudo, classe, sante, attaque, niveau){
        super(pseudo, "guerrier", 350, 50, 1)
    }
    attaquer(Personnage){
        Personnage.sante = Personnage.sante - this.attaque
        console.log(`${this.pseudo} attaque ${Personnage.pseudo} avec son épée ${this.attaque} dégâts !`)
        this.evoluer();
        Personnage.verifierSante();
    }
    coupSpecial(Personnage){
        Personnage.sante = Personnage.sante - (this.attaque * 5)
        console.log(`${this.pseudo} attaque avec son coup spécial haches de guerre ${Personnage.pseudo} ${this.attaque * 5} dégâts !`)
    }
}

let JordyPaper = new guerrier("Jordy Paper");
let SamyLaMachine = new magicien("Samy La Machine")

console.log(JordyPaper.informations);
console.log(SamyLaMachine.informations);
SamyLaMachine.attaquer(JordyPaper);
console.log(JordyPaper.informations);
JordyPaper.attaquer(SamyLaMachine);
console.log(SamyLaMachine.informations);
SamyLaMachine.coupSpecial(JordyPaper);
JordyPaper.coupSpecial(SamyLaMachine);
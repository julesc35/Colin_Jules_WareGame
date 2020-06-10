// variables générales// 

var poisition = "rien"

var cursor;

var player;

var nbrVie = 3;
var vie1;
var vie2;
var vie3;

var victoire;
var defaite;

var score;
var scoreG;

var jeu1 = 0;
var jeu2 = 0;
var jeu3 = 0;


// musiques //

var menuMusic;
var MusicBar;
var MusicMer;
var MusicFuite;
var MusicOutro;

// obstacles //

var BateauEnm;
var ile;
var ile2;
var rochile;

var boule;
var pierre;

// collectibles //

var rhum;
var biere;
var eau;

// boutons // 

var Bouton_ComJouer;
var Bouton_Jouer;
var Bouton_Retour;

var Bouton_Jeu1;
var Bouton_Jeu2;
var Bouton_Jeu3;

var Bouton_Bonus;

// text //

var textJeu1;
var textJeu2;
var textJeu3;

var textVictoire;
var textDefaite;



class Variables extends Phaser.Scene {
	constructor(){
		super('Variables')
	}

	init(){}

	preload(){

    // fond / terrain //

        this.load.image('Menu', 'Assets/Fond/Fond_Menu.png');
        this.load.image('Jeu1', 'Assets/Fond/Fond_Jeu1.png');
        this.load.image('Jeu2', 'Assets/Fond/Fond_Jeu2.png');
        this.load.image('Jeu3', 'Assets/Fond/Fond_Jeu3.png');
        this.load.image('FondComJouer', 'Assets/Fond/CommentJouer.png');

    // boutons //

        this.load.image('BoutJouer', 'Assets/Interface/Bouton_Jouer.png');
        this.load.image('BoutComJouer', 'Assets/Interface/Bouton_ComJouer.png');
        this.load.image('BoutRetour', 'Assets/Interface/Bouton_Retour.png');
        this.load.image('BoutJeu1', 'Assets/Interface/Bouton_Jeu1.png');
        this.load.image('BoutJeu2', 'Assets/Interface/Bouton_Jeu2.png');
        this.load.image('BoutJeu3', 'Assets/Interface/Bouton_Jeu3.png');
        this.load.image('BoutBonus', 'Assets/_Bonus/Bouton_Bonus.png');

    // elements //



    // collectibles //



    // ennemis / Obstacles //

        this.load.image('BatEnnem', 'Assets/Personnages/bateauEnnemis.png');
        this.load.image('Ennemi', 'Assets/Personnages/ennemis.png');

	}


 create(){}

 update(){
 	this.scene.start('Audio');
 }
}
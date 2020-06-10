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

var BoutComJouer;
var BoutJouer;
var BoutRetour;

var BoutJeu1;
var BoutJeu2;
var BoutJeu3;

var BoutBonus;

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

    // boutons //



    // elements //



    // collectibles //



    // 

	}


 create(){}

 update(){
 	this.scene.start('Audio');
 }
}
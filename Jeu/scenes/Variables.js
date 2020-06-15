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

    // fond / terrain / logo //

        this.load.image('Menu', 'Assets/Fond/Fond_Menu.png');
        this.load.image('Jeu1', 'Assets/Fond/Fond_Jeu1.png');
        this.load.image('Jeu2', 'Assets/Fond/Fond_Jeu2.png');
        this.load.image('Jeu3', 'Assets/Fond/Fond_Jeu3.png');
        this.load.image('FondComJouer', 'Assets/Fond/CommentJouer.png');
        this.load.image('FondBonus', 'Assets/_Bonus/Bonus.png');
        this.load.image('Logo', 'Assets/Logo.png');

    // boutons //

        this.load.image('BoutJouer', 'Assets/Interface/Bouton_Jouer.png');
        this.load.image('BoutComJouer', 'Assets/Interface/Bouton_ComJouer.png');
        this.load.image('BoutRetour', 'Assets/Interface/Bouton_Retour.png');
        this.load.image('BoutJeu1', 'Assets/Interface/Bouton_Jeu1.png');
        this.load.image('BoutJeu2', 'Assets/Interface/Bouton_Jeu2.png');
        this.load.image('BoutJeu3', 'Assets/Interface/Bouton_Jeu3.png');
        //this.load.image('BoutBonus', 'Assets/_Bonus/Bouton_Bonus.png');

    // elements //

        this.load.image('Biere', 'Assets/Elements/Biere.png');
        this.load.image('Rhum', 'Assets/Elements/Rhum.png');
        this.load.image('Eau', 'Assets/Elements/Eau.png');
        this.load.image('Vie', 'Assets/Elements/Vie.png');

    // ennemis / Obstacles //

        this.load.image('BatEnnem', 'Assets/Personnages/bateauEnnemis.png');
        this.load.image('Ennemi', 'Assets/Personnages/ennemi.png');
        this.load.image('Obstacle', 'Assets/Elements_Décors/Obstacle.png');
        this.load.image('Ennemile', 'Assets/Elements_Décors/Ennemile.png');
        this.load.image('Ennemile2', 'Assets/Elements_Décors/Ennemile2.png');
        this.load.image('EnnemiRoche', 'Assets/Elements_Décors/EnnemiRoche.png');

    // Joueur // 

        this.load.spritesheet('Pirate_Face', 'Assets/Personnages/Pirate_faces.png', {frameWidth: 150, frameHeight: 600});
        this.load.spritesheet('Pirate_Droit', 'Assets/Personnages/Pirate_Course_Droit_Sprt.png', {frameWidth: 150, frameHeight: 600});
        this.load.spritesheet('Pirate_Gauche', 'Assets/Personnages/Pirate_Course_Gauche_Sprt.png', {frameWidth: 150, frameHeight: 600});
        this.load.spritesheet('Pirate_Fuite', 'Assets/Personnages/Pirate_Course_Fuite_Sprt.png', {frameWidth: 80, frameHeight: 300});
        this.load.image('Bateau_joueur', 'Assets/Personnages/bateauJoueur.png');

    // chargements // 


        this.load.image('IntJeu1', 'Assets/Interface/Bouton_Jeu3.png');
        this.load.image('IntJeu2', 'Assets/Interface/Bouton_Jeu3.png');
        this.load.image('IntJeu3', 'Assets/Interface/Bouton_Jeu3.png');

	}


 create(){}

 update(){
 	this.scene.start('Audio');
 }
}
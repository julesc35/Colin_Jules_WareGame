class Menu extends Phaser.Scene {
	constructor(){
		super('Menu')
	}

	init(){}

	preload(){}

        create(){

                cursors = this.input.createCursorsKeys();

                // fond //


        this.add.image(960, 540, 'Menu').setScale(0.24);


                // Logo // 


       var Logo = this.add.image(1000, 280, 'Logo').setScale(0.3).setDepth(100);  

        Logo.setInteractive({useHandCursor: true});

        Logo.on('pointerdown', () => this.clickLogo());


                //boutons // 



        Bouton_Jouer = this.add.image(1000, 600, 'BoutJouer').setScale(0.75);

        Bouton_Jouer.setInteractive({useHandCursor: true});

        Bouton_Jouer.on('pointerdown', () => this.clickJouer());



        Bouton_ComJouer = this.add.image(1000, 775, 'BoutComJouer').setScale(0.75);

        Bouton_ComJouer.setInteractive({useHandCursor: true});

        Bouton_ComJouer.on('pointerdown', () => this.clickComJouer());


                // musique //


        menuMusic = this.sound.add('menuMusic');
        menuMusic.play({volume: 0.5, loop: true});

        }
        

        update(){


 }
}

// fonctions changement de scene //

/*        function clickLogo(){
                this.scene.switch('BonusScene');
        }
*/

        function clickJouer(){

                this.scene.switch('MenuJeu');

        }

        function clickComJouer(){

                this.scene.switch('ComJouer');
                
        }

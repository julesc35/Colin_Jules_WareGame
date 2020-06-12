class Menu extends Phaser.Scene {
	constructor(){
		super('Menu')
	}

	init(){}

	preload(){}

        create(){

                // fond //

        this.add.image(400, 300, 'Menu').setScale(0.30);

                //boutons // 

        this.add.image(400, 300, 'Bouton_Jouer').setScale(0.30);
        this.add.image(400, 300, 'Bouton_ComJouer').setScale(0.30);

                // musique //

        menuMusic = this.sound.add('menuMusic');
        menuMusic.play({volume: 0.7, loop: true});
        }
        

        update(){


 }
}
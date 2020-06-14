class Menu extends Phaser.Scene {
	constructor(){
		super('Menu')
	}

	init(){}

	preload(){}

        create(){

                // fond //

        this.add.image(960, 540, 'Menu').setScale(0.24);

                // Logo // 

        this.add.image(1000, 280, 'Logo').setScale(0.3).setDepth(100);          

                //boutons // 

        this.add.image(1000, 600, 'BoutJouer').setScale(0.75);


        this.add.image(1000, 775, 'BoutComJouer').setScale(0.75);


                // musique //

        menuMusic = this.sound.add('menuMusic');
        menuMusic.play({volume: 0.5, loop: true});
        }
        

        update(){


 }
}
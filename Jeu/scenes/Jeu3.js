class Jeu3 extends Phaser.Scene {
	constructor(){
		super('Jeu3')
	}

	init(){}

	preload(){}


	create(){

		// fond // 

        this.add.image(960, 540, 'Jeu3').setScale(0.30);

        // joueur // 

        player = this.add.sprite(960,540, 'Pirate_Face').setdepth(2);
        player.setCollideWorldBounds(true);

        // création des animations du joueur //

        this.anims.create({
        	key: 'left',
        	frames: this.anims.generateFrameNumbers('Pirate_Fuite', {start: 0, end: 29}),
        	frameRate: 5,
        	repeat: -1
        });

        this.anims.create({
        	key: 'stop',
        	frames: this.anims.generateFrameNumbers('Pirate_Face', {start: 0, end: 1}),
        	frameRate: 5,
        	repeat: -1
        });
}

	update(){

}
}
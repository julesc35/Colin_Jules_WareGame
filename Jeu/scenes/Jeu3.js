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

        // création des objets //
        pierre = this.physics.add.image();
		pierre2 = this.physics.add.image();
		pierre3 = this.physics.add.image();
		pierre4 = this.physics.add.image();
		pierre5 = this.physics.add.image();
}

	update(){

		// configuration des touches //
		if (cursors.left.isDown && cursors.up.isUp && cursors.right.isUp){
			player.anims.play('left', true);
			player.setFlipX(false);
			player.setVelocityX(-95);
			player.setVelocityY(0);
		}
		else if (cursors.right.isUp && cursors.up.isUp && cursors.left.isUp){
			player.anims.play('stop', true);
			player.setFlipX(false);
			player.setVelocityX(0);
			player.setVelocityY(0);
		}
		if (cursors.up.isDown && cursors.left.isDown && cursors.right.isUp){
			player.anims.play('left', true);
			player.setFlipX(false);
			player.setVelocityX(0);
			player.setVelocityY(75);
		}
}

}

		//fonctions //

	function hitBoule(player, boule){

}

	function hitPierre(player,pierre){

}

	function hitPierre2(player, pierre2){

}

	function hitPierre3(player, pierre3){

}

	function hitPierre4(player, pierre4){

}

	function hitPierre5(player, pierre5){

}
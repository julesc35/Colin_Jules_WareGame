class Jeu1 extends Phaser.Scene {
	constructor(){
		super('Jeu1')
	}

	init(){}

	preload(){}


	create(){

		// fond // 

        this.add.image(960, 540, 'Jeu1').setScale(0.30);

        // joueur // 

        player = this.add.sprite(960,540, 'Pirate_Face').setdepth(2);
        player.setCollideWorldBounds(true);

        // création des animations du joueur //

        this.anims.create({
        	key: 'left',
        	frames: this.anims.generateFrameNumbers('Pirate_Gauche', {start: 0, end: 29}),
        	frameRate: 5,
        	repeat: -1
        });

        this.anims.create({
        	key: 'stop',
        	frames: this.anims.generateFrameNumbers('Pirate_Face', {start: 0, end: 1}),
        	frameRate: 5,
        	repeat: -1
        });


	// creation des items // 

    biere = this.physics.add.group({
        key: 'biere',
        repeat: Phaser.Math.Between(1,5),
        setXY: position.X, position.Y
    });

    rhum = this.physics.add.group({
        key: 'rhum',
        repeat: Phaser.Math.Between(0,3),
        setXY: position.X, position.Y
    });

    eau = this.physics.add.group({
        key: 'eau',
        repeat: Phaser.Math.Between(2,6),
        setXY: position.X, position.Y
    });

}
	update(){

		// configuration des touches //
		if (cursors.left.isDown && cursors.right.isUp){
			player.anims.play('left', true);
			player.setFlipX(false);
			player.setVelocityX(-120);
			player.setVelocityY(0);
		}
		else if (cursors.right.isDown && cursors.left.isUp){
			player.anims.play('left', true);
			player.setFlipX(true);
			player.setVelocityX(120);
			player.setVelocityY(0);
		}
		else if (cursors.right.isUp && cursors.left.isUp){
			player.anims.play('stop', true);
			player.setFlipX(false);
			player.setVelocityX(0);
			player.setVelocityY(0);
		}
 }
}
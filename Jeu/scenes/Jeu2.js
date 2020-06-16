class Jeu2 extends Phaser.Scene {
	constructor(){
		super('Jeu2')
	}

	init(){}

	preload(){}

	create(){

		// fond // 

        this.add.image(960, 540, 'Jeu2').setScale(0.30).setDepth(1);

        // joueur // 

        player = this.add.sprite(960,540, 'Bateau_joueur').setDepth(2);
        player.setCollideWorldBounds(true);

        // création des animations du joueur //

        this.anims.create({
        	key: 'left',
        	frames: this.anims.generateFrameNumbers('Bateau_joueur', {start: 0, end: 29}),
        	frameRate: 5,
        	repeat: -1
        });

        this.anims.create({
        	key: 'stop',
        	frames: this.anims.generateFrameNumbers('Bateau_joueur', {start: 0, end: 1}),
        	frameRate: 5,
        	repeat: -1
        });

        // création de la vie //

        if (nbrVie == 1){this.add.image(1860,66, 'Vie').setDepth(3)}
        if (nbrVie == 2){this.add.image(1740,66, 'Vie').setDepth(3)}
        if (nbrVie == 3){this.add.image(1620,66, 'Vie').setDepth(3)}

        // creation des enemis //


    BateauEnm = this.physics.add.group({
        key: 'BateauEnm',
        repeat: Phaser.Math.Between(1,6),
        setX: Phaser.Math.Between(0,1920);
        setY: 0;
    });

    ile = this.physics.add.group({
        key: 'ile',
        repeat: Phaser.Math.Between(0,4),
        setX: Phaser.Math.Between(0,1920);
        setY: 0;
    });

    ile2 = this.physics.add.group({
        key: 'ile2',
        repeat: Phaser.Math.Between(0,2),
        setX: Phaser.Math.Between(0,1920);
        setY: 0;
    });
    rochile = this.physics.add.group({
        key: 'rochile',
        repeat: Phaser.Math.Between(1,4),
        setX: Phaser.Math.Between(0,1920);
        setY: 0;
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

		//fonctions //

	function hitBateauEnm(player, BateauEnm){

}

	function hitIle(player,ile){

}

	function hitIle2(player, ile2){

}

	function hitRochile(player, rochile){

}

	function victoire(){

}

	function defaite(){

}
class Jeu2 extends Phaser.Scene {
	constructor(){
		super('Jeu2')
	}

	init(){}

	preload(){}



	create(){

	victoire = 0;

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

        if (nbrVie == 1){ vie1 = this.add.image(1860,66, 'Vie').setDepth(3)}
        if (nbrVie == 2){ vie2 = this.add.image(1740,66, 'Vie').setDepth(3)}
        if (nbrVie == 3){ vie3 = this.add.image(1620,66, 'Vie').setDepth(3)}

        // creation des enemis //


    bateauEnm = this.physics.add.group({
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


    // collisions //



    this.physics.overlap(player, bateauEnm, hitBateauEnm, null, this);

    this.physics.overlap(player, ile, hitIle, null, this);

    this.physics.overlap(player, ile2, hitIle2, null, this);

    this.physics.overlap(player, rochile, hitRochile, null, this);


    /////// chrono /////// 



    // debut de partie //

    this.physics.pause();
    timerdepart = this.time.addEvent({delay: 3000, callback: () =>{
    	text_depart1.setVisible(false);
    	this.physics.resume();
    }, 
    loop: false
});

    // chrono toute la partie // 

    timer = this.time.addEvent({delay: 13000, callback: () =>{
    	victoire += 1;
    	this.physics.pause();
    	this.add.text(960, 540, 'Fin de la partie', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);
    },
    loop: false
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

	function hitBateauEnm (player, bateauEnm){
		nbrVie -= 1;
		if (nbrVie == 2){vie3.disableBody(true, true);}
		if (nbrVie == 1){vie2.disableBody(true, true);}
		if (nbrVie == 0){
			vie1.disableBody(true, true);
			this.Physics.Pause();
			this.add.text(960, 540, 'Perdu !', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);
		}
}

	function hitIle (player,ile){
		nbrVie -= 1;
		if (nbrVie == 2){vie3.disableBody(true, true);}
		if (nbrVie == 1){vie2.disableBody(true, true);}
		if (nbrVie == 0){
			vie1.disableBody(true, true);
			this.Physics.Pause();
			this.add.text(960, 540, 'Perdu !', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);
		}
}

	function hitIle2 (player, ile2){
		nbrVie -= 1;
		if (nbrVie == 2){vie3.disableBody(true, true);}
		if (nbrVie == 1){vie2.disableBody(true, true);}
		if (nbrVie == 0){
			vie1.disableBody(true, true);
			this.Physics.Pause();
			this.add.text(960, 540, 'Perdu !', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);
		}
}

	function hitRochile (player, rochile){
		nbrVie -= 1;
		if (nbrVie == 2){vie3.disableBody(true, true);}
		if (nbrVie == 1){vie2.disableBody(true, true);}
		if (nbrVie == 0){
			vie1.disableBody(true, true);
			this.Physics.Pause();
			this.add.text(960, 540, 'Perdu !', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);
		}
}

	function ExitWorld (bateauEnm, ile, ile2, rochile){
	bateauEnm.disableBody();
	ile.disableBody();	
	ile2.disableBody();
	rochile.disableBody();
}


	function fin (){
		if (victoire == 1){
			this.add.text(960, 540, 'Veuillez patienter', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);
			scoreG += score;
			this.time.addEvent({delay: 5000, callback: () =>{
				MusicBar.mute = true;
				this.scene.start('Jeu3');
			},
		loop: false
			});

		};
	}
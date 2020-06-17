class Jeu3 extends Phaser.Scene {
	constructor(){
		super('Jeu3')
	}

	init(){}

	preload(){}


	create(){


		victoire = 0;
		defaite= 0;

		// musique //



		MusicFuite = this.sound.add('FuiteMusic');
		MusicFuite.play({volume: 0.5, loop: false});

		// debut //



		text_depart1 = this.add.text(960, 540, 'debut dans 3 secondes !', { fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10).setVisible(false);


		// fond // 



        this.add.image(960, 540, 'Jeu3').setScale(0.30).setDepth(1);


        // joueur // 



        player = this.add.sprite(960,540, 'Pirate_Face').setDepth(2);
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


        // sol invisible // 


        sol_invisible = this.physics.add.staticGroup()
        sol_invisible.create(1040, 934, 'Sol_Inv').setVisible(false);


        // création des objets //


        boule = this.physics.add.sprite(2250, 610, 'Ennemi').setDepth(2);

        pierre = this.physics.add.image(1440, 780, 'Obstacle').setDepth(2);
		pierre2 = this.physics.add.image(950, 780, 'Obstacle').setDepth(2);
		pierre3 = this.physics.add.image(550, 780, 'Obstacle').setDepth(2);



    // collisions //

    this.physics.add.collider(player,sol_invisible);
    this.physics.add.collider(boule, sol_invisible);

    this.physics.overlap(player, boule, hitBoule, null, this);

    this.physics.overlap(player, pierre, hitPierre, null, this);

    this.physics.overlap(player, pierre2, hitPierre2, null, this);

    this.physics.overlap(player, pierre3, hitPierre3, null, this);



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


		// déplacement de l'ennemi //



		boule.setVelocityX(120);
		boule.setVelocityY(0);



		// victoire et defaite //



		if (defaite == 1 ) {

			this.Physics.Pause();
			this.add.text(960, 540, 'Perdu !', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);
			this.add.text(960, 440, 'votre score est de : ' + score, {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);

		}



		if (victoire == 1 ) {

			this.add.text(960, 540, 'ictoire', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);

			if(hitMarker == 0 ){score += 250;}
			if(hitMarker == 1 ){score += 160;}
			if(hitMarker == 2 ){score += 135;}
			if(hitMarker == 3 ){score += 115;}
			if(hitMarker == 4 ){score += 90;}
			if(hitMarker == 5 ){score += 50;}

			scoreG += score;
			this.physics.pause();
			this.add.text(960, 440, 'votre score  general est de : ' + scoreG, {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);
			this.time.addEvent({delay: 15000, callback: () =>{

				MusicBar.mute = true;
				this.scene.start('Jeu3');

			},

		loop: false

			});

		}

		if (player.x<30){victoire += 1;}

}

}


		//fonctions //



	function hitBoule(player, boule){

		defaite = 1;

}

	function hitPierre(player,pierre){

		hitMarker += 1;
		player.setVelocityX(0);
		player.setPosition(1320, 640);

}

	function hitPierre2(player, pierre2){

		hitMarker += 1;
		player.setVelocityX(0);
		player.setPosition(830, 640);


}

	function hitPierre3(player, pierre3){

		hitMarker += 1;
		player.setVelocityX(0);
		player.setPosition(425, 640);


}
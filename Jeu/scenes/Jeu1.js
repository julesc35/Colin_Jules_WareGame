class Jeu1 extends Phaser.Scene {
	constructor(){
		super('Jeu1')
	}

	init(){}

	preload(){}


	create(){

		// musique //



		MusicBar = this.sound.add('BarMusic');
		MusicBar.play({volume: 0.5, loop: false});



		// score //



		score_texte = this.add.text(180, 70, 'X 0', { fontFamily: 'Treasuremap', fontSize: 90}).setDepth(2);



		// debut //



		text_depart1 = this.add.text(960, 540, 'debut dans 3 secondes !', { fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10).setVisible(false);

		// fond // 



        this.add.image(960, 540, 'Jeu1').setScale(0.30).setDepth(1);



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
        setX: Phaser.Math.Between(0,1920)
    });


    rhum = this.physics.add.group({

        key: 'rhum',
        repeat: Phaser.Math.Between(0,3),
        setX: Phaser.Math.Between(0,1920)
    });


    eau = this.physics.add.group({

        key: 'eau',
        repeat: Phaser.Math.Between(2,6),
        setX: Phaser.Math.Between(0,1920)
    });



    // collisions //



    this.physics.overlap(player, biere, hitBiere, null, this);

    this.physics.overlap(player, rhum, hitRhum, null, this);


    this.physics.overlap(player, eau, hitEau, null, this);


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

		if (victoire == 1){

			this.add.text(960, 540, 'Veuillez patienter', {fontFamily: 'Treasuremap', fontSize: 130, color: '#000000'}).setDepth(10);

			scoreG += score;

			this.time.addEvent({delay: 5000, callback: () =>{

				MusicBar.mute = true;
				this.scene.start('Jeu2');
			},

		loop: false

			});
		}
}

}

		//fonctions //



	function hitBiere(player, biere){

		biere.disableBody(true, true);
		score += 25;
		score_texte.setText('X ' + score);
		if (biere.countActive(true) <= 1){

			biere.children.iterate(function(child){

				child.enableBody(true, child.X, 0, true, true);

			});
		}

	}


	function hitRhum(player,rhum){

		rhum.disableBody(true, true);
		score += 50;
		score_texte.setText('X ' + score);
		if (rhum.countActive(true) <= 1){

			rhum.children.iterate(function(child){

			child.enableBody(true, child.X, 0, true, true);

			});
	}


	function hitEau(player, eau){

		eau.disableBody(true, true);
		score -= 40;
		score_texte.setText('X ' + score);
		if (eau.countActive(true) <= 1){

			eau.children.iterate(function(child){

			child.enableBody(true, child.X, 0, true, true);

			});
	}


	function ExitWorld(biere, eau, rhum){

	biere.disableBody();
	eau.disableBody();	
	rhum.disableBody();

	}